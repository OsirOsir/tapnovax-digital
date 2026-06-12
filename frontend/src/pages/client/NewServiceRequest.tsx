import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getServices } from '../../api/services';
import { createServiceRequest } from '../../api/serviceRequests';
import { Service } from '../../types';
import { ArrowLeft, Loader } from 'lucide-react';

export default function NewServiceRequest() {
  const [services, setServices] = useState<Service[]>([]);
  const [form, setForm] = useState({ service_id: '', title: '', description: '', budget_range: '', preferred_contact_method: 'email' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => { getServices().then(r => setServices(r.data)); }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createServiceRequest({ ...form, service_id: parseInt(form.service_id) });
      navigate('/client/service-requests');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <Link to="/client/service-requests" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-navy-700 mb-4">
          <ArrowLeft size={15} /> Back to Requests
        </Link>
        <h1 className="text-2xl font-bold text-navy-900">New Service Request</h1>
        <p className="text-gray-500 text-sm mt-0.5">Tell us what you need and we'll review your request.</p>
      </div>
      <div className="card p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="label">Service *</label>
            <select name="service_id" required value={form.service_id} onChange={handleChange} className="input-field">
              <option value="">Select a service...</option>
              {services.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
            </select>
          </div>
          <div>
            <label className="label">Request Title *</label>
            <input name="title" required value={form.title} onChange={handleChange} className="input-field" placeholder="Brief description of what you need" />
          </div>
          <div>
            <label className="label">Detailed Description</label>
            <textarea name="description" rows={4} value={form.description} onChange={handleChange} className="input-field resize-none" placeholder="Tell us more about your goals and requirements..." />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="label">Budget Range</label>
              <select name="budget_range" value={form.budget_range} onChange={handleChange} className="input-field">
                <option value="">Not sure yet</option>
                <option value="Under KES 10,000">Under KES 10,000</option>
                <option value="KES 10,000 – 25,000">KES 10,000 – 25,000</option>
                <option value="KES 25,000 – 50,000">KES 25,000 – 50,000</option>
                <option value="KES 50,000 – 100,000">KES 50,000 – 100,000</option>
                <option value="Above KES 100,000">Above KES 100,000</option>
              </select>
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
          <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-3">
            {loading ? <><Loader size={15} className="animate-spin" /> Submitting...</> : 'Submit Request'}
          </button>
        </form>
      </div>
    </div>
  );
}
