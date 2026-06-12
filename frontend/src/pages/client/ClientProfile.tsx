import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { updateProfile } from '../../api/auth';
import { Loader, Check } from 'lucide-react';

export default function ClientProfile() {
  const { user } = useAuth();
  const [form, setForm] = useState({
    full_name: user?.full_name || '',
    phone: user?.phone || '',
    business_name: user?.profile?.business_name || '',
    business_type: user?.profile?.business_type || '',
    location: user?.profile?.location || '',
    preferred_contact_method: user?.profile?.preferred_contact_method || 'email',
  });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    await updateProfile(form);
    setSaved(true);
    setSaving(false);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy-900">My Profile</h1>
        <p className="text-gray-500 text-sm mt-0.5">Manage your account and business information</p>
      </div>
      <div className="card p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="label">Full Name</label>
              <input name="full_name" value={form.full_name} onChange={handleChange} className="input-field" />
            </div>
            <div>
              <label className="label">Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} className="input-field" />
            </div>
            <div>
              <label className="label">Business Name</label>
              <input name="business_name" value={form.business_name} onChange={handleChange} className="input-field" />
            </div>
            <div>
              <label className="label">Business Type</label>
              <input name="business_type" value={form.business_type} onChange={handleChange} className="input-field" />
            </div>
            <div>
              <label className="label">Location</label>
              <input name="location" value={form.location} onChange={handleChange} className="input-field" placeholder="City, Country" />
            </div>
            <div>
              <label className="label">Preferred Contact</label>
              <select name="preferred_contact_method" value={form.preferred_contact_method} onChange={handleChange} className="input-field">
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
            </div>
          </div>
          <div>
            <label className="label">Email Address</label>
            <input value={user?.email} disabled className="input-field bg-gray-50 text-gray-400" />
            <p className="text-xs text-gray-400 mt-1">Email cannot be changed</p>
          </div>
          <button type="submit" disabled={saving} className="btn-primary">
            {saving ? <><Loader size={14} className="animate-spin" /> Saving...</> : saved ? <><Check size={14} /> Saved!</> : 'Save Changes'}
          </button>
        </form>
      </div>
    </div>
  );
}
