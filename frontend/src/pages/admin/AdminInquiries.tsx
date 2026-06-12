import { useState, useEffect } from 'react';
import { getInquiries, updateInquiryStatus, addInquiryNotes } from '../../api/inquiries';
import { Inquiry } from '../../types';
import StatusBadge from '../../components/StatusBadge';
import { Loader, ChevronDown, Save } from 'lucide-react';

export default function AdminInquiries() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [notes, setNotes] = useState<Record<number, string>>({});

  const load = () => getInquiries().then(r => setInquiries(r.data)).finally(() => setLoading(false));
  useEffect(() => { load(); }, []);

  const handleStatusChange = async (id: number, status: string) => {
    await updateInquiryStatus(id, status);
    load();
  };

  const handleSaveNotes = async (id: number) => {
    await addInquiryNotes(id, notes[id] || '');
    load();
  };

  if (loading) return <div className="flex justify-center py-20"><Loader className="animate-spin text-navy-600" /></div>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy-900">Inquiries</h1>
        <p className="text-gray-500 text-sm mt-0.5">{inquiries.length} total inquiries</p>
      </div>
      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Contact</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Service</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map(i => (
              <>
                <tr key={i.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-3">
                    <div className="font-medium text-gray-800">{i.full_name}</div>
                    <div className="text-xs text-gray-400">{i.email}</div>
                  </td>
                  <td className="px-6 py-3 text-gray-500 text-xs">{i.service_interest || '-'}</td>
                  <td className="px-6 py-3">
                    <select
                      value={i.status}
                      onChange={e => handleStatusChange(i.id, e.target.value)}
                      className="text-xs border border-gray-200 rounded-lg px-2 py-1 bg-white focus:outline-none focus:ring-1 focus:ring-navy-500"
                    >
                      {['new','contacted','qualified','converted','lost','closed'].map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </td>
                  <td className="px-6 py-3 text-gray-400 text-xs">{new Date(i.created_at).toLocaleDateString()}</td>
                  <td className="px-6 py-3">
                    <button onClick={() => setExpanded(expanded === i.id ? null : i.id)} className="text-gray-400 hover:text-navy-600">
                      <ChevronDown size={16} className={`transition-transform ${expanded === i.id ? 'rotate-180' : ''}`} />
                    </button>
                  </td>
                </tr>
                {expanded === i.id && (
                  <tr key={`detail-${i.id}`} className="bg-gray-50 border-b border-gray-100">
                    <td colSpan={5} className="px-6 py-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-4">
                        <div><span className="text-gray-400">Phone:</span> <span className="text-gray-700">{i.phone || '-'}</span></div>
                        <div><span className="text-gray-400">Business:</span> <span className="text-gray-700">{i.business_name || '-'}</span></div>
                        <div className="sm:col-span-2"><span className="text-gray-400">Message:</span> <p className="text-gray-700 mt-1">{i.message || '-'}</p></div>
                      </div>
                      <div>
                        <label className="label">Internal Notes</label>
                        <textarea
                          value={notes[i.id] ?? (i.notes || '')}
                          onChange={e => setNotes(n => ({ ...n, [i.id]: e.target.value }))}
                          rows={2} className="input-field resize-none mb-2"
                        />
                        <button onClick={() => handleSaveNotes(i.id)} className="btn-primary text-xs py-1.5">
                          <Save size={12} /> Save Notes
                        </button>
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
