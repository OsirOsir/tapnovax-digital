import { useState, useEffect } from 'react';
import { getInquiries, updateInquiryStatus, addInquiryNotes } from '../../api/inquiries';
import { Inquiry } from '../../types';
import StatusBadge from '../../components/StatusBadge';
import { Loader, ChevronDown, Save } from 'lucide-react';

export default function StaffLeads() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [notes, setNotes] = useState<Record<number, string>>({});

  const load = () => getInquiries().then(r => setInquiries(r.data)).finally(() => setLoading(false));
  useEffect(() => { load(); }, []);

  if (loading) return <div className="flex justify-center py-20"><Loader className="animate-spin text-navy-600" /></div>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy-900">Leads</h1>
        <p className="text-gray-500 text-sm mt-0.5">{inquiries.length} total leads</p>
      </div>
      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Contact</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Service</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map(i => (
              <>
                <tr key={i.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-3">
                    <div className="font-medium text-gray-800">{i.full_name}</div>
                    <div className="text-xs text-gray-400">{i.phone}</div>
                  </td>
                  <td className="px-6 py-3 text-gray-500 text-xs">{i.service_interest || '-'}</td>
                  <td className="px-6 py-3">
                    <select value={i.status} onChange={e => { updateInquiryStatus(i.id, e.target.value).then(load); }}
                      className="text-xs border border-gray-200 rounded-lg px-2 py-1 bg-white focus:outline-none">
                      {['new','contacted','qualified','converted','lost','closed'].map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </td>
                  <td className="px-6 py-3">
                    <button onClick={() => setExpanded(expanded === i.id ? null : i.id)} className="text-gray-400 hover:text-navy-600">
                      <ChevronDown size={16} className={`transition-transform ${expanded === i.id ? 'rotate-180' : ''}`} />
                    </button>
                  </td>
                </tr>
                {expanded === i.id && (
                  <tr key={`d-${i.id}`} className="bg-gray-50 border-b border-gray-100">
                    <td colSpan={4} className="px-6 py-4">
                      <div className="text-sm mb-3 text-gray-600">{i.message}</div>
                      <div>
                        <label className="label">Notes</label>
                        <textarea value={notes[i.id] ?? (i.notes || '')} onChange={e => setNotes(n => ({ ...n, [i.id]: e.target.value }))} rows={2} className="input-field resize-none mb-2" />
                        <button onClick={() => addInquiryNotes(i.id, notes[i.id] || '').then(load)} className="btn-primary text-xs py-1.5">
                          <Save size={12} /> Save
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
