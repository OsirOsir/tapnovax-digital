import { useState, useEffect } from 'react';
import api from '../../api/axios';
import { Onboarding } from '../../types';
import StatusBadge from '../../components/StatusBadge';
import { Loader, Plus, X } from 'lucide-react';

export default function ClientOnboarding() {
  const [items, setItems] = useState<Onboarding[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ full_name: '', phone: '', email: '', business_name: '', business_type: '', location: '', service_needed: '', goals: '', current_online_presence: '' });
  const [saving, setSaving] = useState(false);

  const load = () => api.get('/client/onboarding').then(r => setItems(r.data)).finally(() => setLoading(false));
  useEffect(() => { load(); }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    await api.post('/onboarding', form);
    setShowForm(false);
    load();
    setSaving(false);
  };

  if (loading) return <div className="flex justify-center py-20"><Loader className="animate-spin text-navy-600" /></div>;

  return (
    <div className="max-w-2xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-navy-900">Onboarding</h1>
          <p className="text-gray-500 text-sm mt-0.5">Start the onboarding process for your business</p>
        </div>
        {items.length === 0 && !showForm && (
          <button onClick={() => setShowForm(true)} className="btn-primary text-sm"><Plus size={16} /> Begin Onboarding</button>
        )}
      </div>

      {items.map(o => (
        <div key={o.id} className="card p-6 flex items-center justify-between">
          <div>
            <div className="font-semibold text-navy-900">{o.business_name || 'My Business'}</div>
            <div className="text-sm text-gray-500 mt-0.5">{o.service_needed}</div>
          </div>
          <StatusBadge status={o.status} />
        </div>
      ))}

      {showForm && (
        <div className="card p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-semibold text-navy-900">Business Onboarding Form</h2>
            <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-gray-600"><X size={18} /></button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div><label className="label">Full Name</label><input name="full_name" value={form.full_name} onChange={handleChange} className="input-field" /></div>
              <div><label className="label">Phone</label><input name="phone" value={form.phone} onChange={handleChange} className="input-field" /></div>
              <div><label className="label">Email</label><input name="email" type="email" value={form.email} onChange={handleChange} className="input-field" /></div>
              <div><label className="label">Business Name</label><input name="business_name" value={form.business_name} onChange={handleChange} className="input-field" /></div>
              <div><label className="label">Business Type</label><input name="business_type" value={form.business_type} onChange={handleChange} className="input-field" /></div>
              <div><label className="label">Location</label><input name="location" value={form.location} onChange={handleChange} className="input-field" /></div>
            </div>
            <div><label className="label">Service Needed</label><input name="service_needed" value={form.service_needed} onChange={handleChange} className="input-field" /></div>
            <div><label className="label">Business Goals</label><textarea name="goals" rows={3} value={form.goals} onChange={handleChange} className="input-field resize-none" /></div>
            <div><label className="label">Current Online Presence</label><textarea name="current_online_presence" rows={2} value={form.current_online_presence} onChange={handleChange} className="input-field resize-none" placeholder="Website, social media handles, etc." /></div>
            <button type="submit" disabled={saving} className="btn-primary w-full justify-center py-3">
              {saving ? <><Loader size={14} className="animate-spin" /> Submitting...</> : 'Submit Onboarding'}
            </button>
          </form>
        </div>
      )}

      {items.length === 0 && !showForm && (
        <div className="card p-12 text-center">
          <p className="text-gray-400 text-sm mb-4">Begin the onboarding process to get your services set up.</p>
          <button onClick={() => setShowForm(true)} className="btn-primary text-sm">Begin Onboarding</button>
        </div>
      )}
    </div>
  );
}
