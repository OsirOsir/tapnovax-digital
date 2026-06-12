import { useState, useEffect } from 'react';
import { adminGetServices, createService, updateService, deleteService } from '../../api/services';
import { Service } from '../../types';
import StatusBadge from '../../components/StatusBadge';
import { Loader, Plus, Pencil, Trash2, X, Check } from 'lucide-react';

const emptyForm = { name: '', category: '', description: '', price_type: 'custom', base_price: '', is_active: true, is_featured: false };

export default function AdminServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<any>(emptyForm);
  const [editId, setEditId] = useState<number | null>(null);
  const [saving, setSaving] = useState(false);

  const load = () => adminGetServices().then(r => setServices(r.data)).finally(() => setLoading(false));
  useEffect(() => { load(); }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm((f: any) => ({ ...f, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      if (editId) {
        await updateService(editId, form);
      } else {
        await createService(form);
      }
      setShowForm(false);
      setForm(emptyForm);
      setEditId(null);
      load();
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (s: Service) => {
    setForm({ name: s.name, category: s.category, description: s.description, price_type: s.price_type, base_price: s.base_price || '', is_active: s.is_active, is_featured: s.is_featured });
    setEditId(s.id);
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this service?')) return;
    await deleteService(id);
    load();
  };

  if (loading) return <div className="flex justify-center py-20"><Loader className="animate-spin text-navy-600" /></div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-navy-900">Services</h1>
          <p className="text-gray-500 text-sm mt-0.5">{services.length} services configured</p>
        </div>
        <button onClick={() => { setShowForm(true); setEditId(null); setForm(emptyForm); }} className="btn-primary text-sm">
          <Plus size={16} /> Add Service
        </button>
      </div>

      {showForm && (
        <div className="card p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-semibold text-navy-900">{editId ? 'Edit Service' : 'New Service'}</h2>
            <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-gray-600"><X size={18} /></button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div><label className="label">Name</label><input name="name" value={form.name} onChange={handleChange} className="input-field" /></div>
            <div><label className="label">Category</label><input name="category" value={form.category} onChange={handleChange} className="input-field" /></div>
            <div><label className="label">Price Type</label>
              <select name="price_type" value={form.price_type} onChange={handleChange} className="input-field">
                {['fixed','custom','monthly','negotiable'].map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div><label className="label">Base Price (KES)</label><input name="base_price" type="number" value={form.base_price} onChange={handleChange} className="input-field" /></div>
            <div className="sm:col-span-2"><label className="label">Description</label><textarea name="description" rows={3} value={form.description} onChange={handleChange} className="input-field resize-none" /></div>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input type="checkbox" name="is_active" checked={form.is_active} onChange={handleChange} className="rounded border-gray-300" /> Active
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input type="checkbox" name="is_featured" checked={form.is_featured} onChange={handleChange} className="rounded border-gray-300" /> Featured
              </label>
            </div>
          </div>
          <div className="flex gap-3 mt-5">
            <button onClick={handleSave} disabled={saving} className="btn-primary text-sm">
              {saving ? <Loader size={14} className="animate-spin" /> : <Check size={14} />} Save
            </button>
            <button onClick={() => setShowForm(false)} className="btn-secondary text-sm"><X size={14} /> Cancel</button>
          </div>
        </div>
      )}

      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Category</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Pricing</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {services.map(s => (
              <tr key={s.id} className="hover:bg-gray-50">
                <td className="px-6 py-3">
                  <div className="font-medium text-gray-800">{s.name}</div>
                  {s.is_featured && <span className="text-xs text-blue-600">Featured</span>}
                </td>
                <td className="px-6 py-3 text-gray-500">{s.category}</td>
                <td className="px-6 py-3 text-gray-500">
                  {s.price_type === 'fixed' && s.base_price ? `KES ${s.base_price.toLocaleString()}` : s.price_type}
                </td>
                <td className="px-6 py-3">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${s.is_active ? 'bg-green-50 text-green-700 border-green-200' : 'bg-gray-100 text-gray-500 border-gray-200'}`}>
                    {s.is_active ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="px-6 py-3">
                  <div className="flex items-center justify-end gap-2">
                    <button onClick={() => handleEdit(s)} className="p-1.5 text-gray-400 hover:text-navy-700 hover:bg-navy-50 rounded"><Pencil size={14} /></button>
                    <button onClick={() => handleDelete(s.id)} className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded"><Trash2 size={14} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
