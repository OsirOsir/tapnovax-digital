import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAdminDashboard } from '../../api/dashboard';
import { DashboardStats, Inquiry, ServiceRequest } from '../../types';
import StatsCard from '../../components/StatsCard';
import StatusBadge from '../../components/StatusBadge';
import { Users, MessageSquare, FileText, TrendingUp, Loader, ArrowRight } from 'lucide-react';

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [recentInquiries, setRecentInquiries] = useState<Inquiry[]>([]);
  const [recentRequests, setRecentRequests] = useState<ServiceRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAdminDashboard()
      .then(r => {
        setStats(r.data.stats);
        setRecentInquiries(r.data.recent_inquiries);
        setRecentRequests(r.data.recent_requests);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="flex justify-center py-20"><Loader className="animate-spin text-navy-600" /></div>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy-900">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-0.5">Overview of Tapnovax Digital operations</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard label="Total Clients" value={stats?.total_clients || 0} icon={<Users size={28} />} />
        <StatsCard label="Total Staff" value={stats?.total_staff || 0} icon={<Users size={28} />} />
        <StatsCard label="New Inquiries" value={stats?.new_inquiries || 0} color="text-blue-600" icon={<MessageSquare size={28} />} />
        <StatsCard label="Converted Leads" value={stats?.converted_leads || 0} color="text-green-600" icon={<TrendingUp size={28} />} />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard label="Total Inquiries" value={stats?.total_inquiries || 0} />
        <StatsCard label="Total Requests" value={stats?.total_requests || 0} />
        <StatsCard label="Pending" value={stats?.pending_requests || 0} color="text-amber-600" />
        <StatsCard label="Completed" value={stats?.completed_requests || 0} color="text-green-600" />
      </div>

      {/* Recent tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-navy-900">Recent Inquiries</h2>
            <Link to="/admin/inquiries" className="text-xs text-blue-600 hover:underline flex items-center gap-1">View all <ArrowRight size={12} /></Link>
          </div>
          <div className="divide-y divide-gray-50">
            {recentInquiries.length === 0 && <div className="px-6 py-8 text-center text-gray-400 text-sm">No inquiries yet</div>}
            {recentInquiries.map(i => (
              <div key={i.id} className="px-6 py-3 flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-gray-800">{i.full_name}</div>
                  <div className="text-xs text-gray-400">{i.email}</div>
                </div>
                <StatusBadge status={i.status} />
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-navy-900">Recent Service Requests</h2>
            <Link to="/admin/service-requests" className="text-xs text-blue-600 hover:underline flex items-center gap-1">View all <ArrowRight size={12} /></Link>
          </div>
          <div className="divide-y divide-gray-50">
            {recentRequests.length === 0 && <div className="px-6 py-8 text-center text-gray-400 text-sm">No requests yet</div>}
            {recentRequests.map(r => (
              <div key={r.id} className="px-6 py-3 flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-gray-800">{r.title}</div>
                  <div className="text-xs text-gray-400">{r.service_name}</div>
                </div>
                <StatusBadge status={r.status} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
