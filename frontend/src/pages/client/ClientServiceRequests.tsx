import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getClientRequests } from '../../api/serviceRequests';
import { ServiceRequest } from '../../types';
import StatusBadge from '../../components/StatusBadge';
import { Loader, Plus } from 'lucide-react';

export default function ClientServiceRequests() {
  const [requests, setRequests] = useState<ServiceRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getClientRequests().then(r => setRequests(r.data)).finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="flex justify-center py-20"><Loader className="animate-spin text-navy-600" /></div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-navy-900">My Service Requests</h1>
          <p className="text-gray-500 text-sm mt-0.5">{requests.length} requests</p>
        </div>
        <Link to="/client/service-requests/new" className="btn-primary text-sm"><Plus size={16} /> New Request</Link>
      </div>

      {requests.length === 0 ? (
        <div className="card p-12 text-center">
          <p className="text-gray-400 mb-4">You haven't submitted any service requests yet.</p>
          <Link to="/client/service-requests/new" className="btn-primary text-sm">Request a Service</Link>
        </div>
      ) : (
        <div className="card overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Title</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Service</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {requests.map(r => (
                <tr key={r.id} className="hover:bg-gray-50">
                  <td className="px-6 py-3 font-medium text-gray-800">{r.title}</td>
                  <td className="px-6 py-3 text-gray-500">{r.service_name}</td>
                  <td className="px-6 py-3"><StatusBadge status={r.status} /></td>
                  <td className="px-6 py-3 text-gray-400">{new Date(r.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
