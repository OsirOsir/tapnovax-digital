import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getClientDashboard } from '../../api/dashboard';
import { ServiceRequest, Onboarding } from '../../types';
import StatusBadge from '../../components/StatusBadge';
import { Loader, Plus, ArrowRight, FileText, UserCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function ClientDashboard() {
  const { user } = useAuth();
  const [requests, setRequests] = useState<ServiceRequest[]>([]);
  const [onboardings, setOnboardings] = useState<Onboarding[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getClientDashboard().then(r => {
      setRequests(r.data.requests);
      setOnboardings(r.data.onboarding);
    }).finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="flex justify-center py-20"><Loader className="animate-spin text-navy-600" /></div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-navy-900">Welcome, {user?.full_name?.split(' ')[0]}</h1>
          <p className="text-gray-500 text-sm mt-0.5">Here's what's happening with your services</p>
        </div>
        <Link to="/client/service-requests/new" className="btn-primary text-sm">
          <Plus size={16} /> New Request
        </Link>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div className="card p-5">
          <div className="text-2xl font-bold text-navy-700">{requests.length}</div>
          <div className="text-sm text-gray-500 mt-1">Service Requests</div>
        </div>
        <div className="card p-5">
          <div className="text-2xl font-bold text-green-600">{requests.filter(r => r.status === 'completed').length}</div>
          <div className="text-sm text-gray-500 mt-1">Completed</div>
        </div>
        <div className="card p-5">
          <div className="text-2xl font-bold text-amber-600">{requests.filter(r => r.status === 'pending').length}</div>
          <div className="text-sm text-gray-500 mt-1">Pending</div>
        </div>
      </div>

      {/* Recent requests */}
      <div className="card">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2 text-navy-900 font-semibold"><FileText size={17} /> Recent Requests</div>
          <Link to="/client/service-requests" className="text-xs text-blue-600 hover:underline flex items-center gap-1">View all <ArrowRight size={12} /></Link>
        </div>
        {requests.length === 0 ? (
          <div className="px-6 py-10 text-center">
            <p className="text-gray-400 text-sm mb-3">No service requests yet</p>
            <Link to="/client/service-requests/new" className="btn-primary text-sm">Request a Service</Link>
          </div>
        ) : (
          <div className="divide-y divide-gray-50">
            {requests.map(r => (
              <div key={r.id} className="px-6 py-3 flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-gray-800">{r.title}</div>
                  <div className="text-xs text-gray-400">{r.service_name} — {new Date(r.created_at).toLocaleDateString()}</div>
                </div>
                <StatusBadge status={r.status} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Onboarding */}
      {onboardings.length > 0 && (
        <div className="card">
          <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-100 text-navy-900 font-semibold">
            <UserCheck size={17} /> Onboarding Status
          </div>
          {onboardings.map(o => (
            <div key={o.id} className="px-6 py-3 flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-800">{o.business_name || 'Onboarding'}</div>
                <div className="text-xs text-gray-400">{o.service_needed}</div>
              </div>
              <StatusBadge status={o.status} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
