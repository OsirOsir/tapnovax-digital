import { useState, useEffect } from 'react';
import { getStaffDashboard } from '../../api/dashboard';
import { Inquiry, ServiceRequest } from '../../types';
import StatusBadge from '../../components/StatusBadge';
import { Loader } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function StaffDashboard() {
  const { user } = useAuth();
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [requests, setRequests] = useState<ServiceRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStaffDashboard().then(r => {
      setInquiries(r.data.assigned_inquiries);
      setRequests(r.data.assigned_requests);
    }).finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="flex justify-center py-20"><Loader className="animate-spin text-navy-600" /></div>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy-900">Welcome, {user?.full_name?.split(' ')[0]}</h1>
        <p className="text-gray-500 text-sm mt-0.5">Your assigned leads and service requests</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="card p-5">
          <div className="text-2xl font-bold text-navy-700">{inquiries.length}</div>
          <div className="text-sm text-gray-500 mt-1">Assigned Leads</div>
        </div>
        <div className="card p-5">
          <div className="text-2xl font-bold text-blue-600">{requests.length}</div>
          <div className="text-sm text-gray-500 mt-1">Assigned Requests</div>
        </div>
      </div>
      <div className="card">
        <div className="px-6 py-4 border-b border-gray-100 font-semibold text-navy-900">My Leads</div>
        {inquiries.length === 0 ? (
          <div className="px-6 py-10 text-center text-gray-400 text-sm">No leads assigned yet</div>
        ) : (
          <div className="divide-y divide-gray-50">
            {inquiries.map(i => (
              <div key={i.id} className="px-6 py-3 flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-gray-800">{i.full_name}</div>
                  <div className="text-xs text-gray-400">{i.email} · {i.service_interest}</div>
                </div>
                <StatusBadge status={i.status} />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="card">
        <div className="px-6 py-4 border-b border-gray-100 font-semibold text-navy-900">My Service Requests</div>
        {requests.length === 0 ? (
          <div className="px-6 py-10 text-center text-gray-400 text-sm">No requests assigned yet</div>
        ) : (
          <div className="divide-y divide-gray-50">
            {requests.map(r => (
              <div key={r.id} className="px-6 py-3 flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-gray-800">{r.title}</div>
                  <div className="text-xs text-gray-400">{r.service_name}</div>
                </div>
                <StatusBadge status={r.status} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
