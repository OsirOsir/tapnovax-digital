import { useState, useEffect } from 'react';
import { getAdminRequests, updateRequestStatus } from '../../api/serviceRequests';
import { ServiceRequest } from '../../types';
import StatusBadge from '../../components/StatusBadge';
import { Loader, ChevronDown } from 'lucide-react';

export default function AdminServiceRequests() {
  const [requests, setRequests] = useState<ServiceRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<number | null>(null);

  const load = () => getAdminRequests().then(r => setRequests(r.data)).finally(() => setLoading(false));
  useEffect(() => { load(); }, []);

  const handleStatus = async (id: number, status: string) => {
    await updateRequestStatus(id, status);
    load();
  };

  if (loading) return <div className="flex justify-center py-20"><Loader className="animate-spin text-navy-600" /></div>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy-900">Service Requests</h1>
        <p className="text-gray-500 text-sm mt-0.5">{requests.length} total requests</p>
      </div>
      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Title</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Service</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {requests.map(r => (
              <>
                <tr key={r.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-3 font-medium text-gray-800">{r.title}</td>
                  <td className="px-6 py-3 text-gray-500 text-xs">{r.service_name}</td>
                  <td className="px-6 py-3">
                    <select value={r.status} onChange={e => handleStatus(r.id, e.target.value)}
                      className="text-xs border border-gray-200 rounded-lg px-2 py-1 bg-white focus:outline-none focus:ring-1 focus:ring-navy-500">
                      {['pending','reviewing','approved','in_progress','completed','cancelled'].map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </td>
                  <td className="px-6 py-3 text-gray-400 text-xs">{new Date(r.created_at).toLocaleDateString()}</td>
                  <td className="px-6 py-3">
                    <button onClick={() => setExpanded(expanded === r.id ? null : r.id)} className="text-gray-400 hover:text-navy-600">
                      <ChevronDown size={16} className={`transition-transform ${expanded === r.id ? 'rotate-180' : ''}`} />
                    </button>
                  </td>
                </tr>
                {expanded === r.id && (
                  <tr key={`d-${r.id}`} className="bg-gray-50 border-b border-gray-100">
                    <td colSpan={5} className="px-6 py-4 text-sm">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div><span className="text-gray-400">Budget:</span> <span className="text-gray-700">{r.budget_range || '-'}</span></div>
                        <div className="col-span-2"><span className="text-gray-400">Description:</span> <p className="text-gray-700 mt-1">{r.description || '-'}</p></div>
                        {r.admin_notes && <div className="col-span-2"><span className="text-gray-400">Notes:</span> <p className="text-gray-700 mt-1">{r.admin_notes}</p></div>}
                      </div>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
