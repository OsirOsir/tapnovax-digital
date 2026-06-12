import { useState, useEffect } from 'react';
import api from '../../api/axios';
import { Onboarding } from '../../types';
import StatusBadge from '../../components/StatusBadge';
import { Loader } from 'lucide-react';

export default function AdminOnboarding() {
  const [items, setItems] = useState<Onboarding[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/admin/onboarding').then(r => setItems(r.data)).finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="flex justify-center py-20"><Loader className="animate-spin text-navy-600" /></div>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy-900">Onboarding</h1>
        <p className="text-gray-500 text-sm mt-0.5">{items.length} onboarding submissions</p>
      </div>
      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Client</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Business</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Service Needed</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {items.map(o => (
              <tr key={o.id} className="hover:bg-gray-50">
                <td className="px-6 py-3 font-medium text-gray-800">{o.full_name}</td>
                <td className="px-6 py-3 text-gray-500">{o.business_name || '-'}</td>
                <td className="px-6 py-3 text-gray-500 text-xs">{o.service_needed || '-'}</td>
                <td className="px-6 py-3"><StatusBadge status={o.status} /></td>
                <td className="px-6 py-3 text-gray-400 text-xs">{new Date(o.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
