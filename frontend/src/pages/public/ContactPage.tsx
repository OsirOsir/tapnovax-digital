import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, Loader, Clock, Hash, Building2 } from 'lucide-react';
import { submitInquiry } from '../../api/inquiries';

export default function ContactPage() {
  const [form, setForm] = useState({ full_name: '', email: '', phone: '', business_name: '', service_interest: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await submitInquiry(form);
      setSuccess(true);
    } catch {
      setError('Failed to send. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="bg-navy-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">Contact</div>
          <h1 className="text-4xl font-bold text-white mb-3">Get in touch</h1>
          <p className="text-white/60 max-w-xl">Tell us about your business and we will connect you with the right digital service solution.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {success ? (
                <div className="card p-10 text-center">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-green-500" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-2">Inquiry Received</h3>
                  <p className="text-gray-500 text-sm">Our team will review your message and follow up within 1 business day.</p>
                </div>
              ) : (
                <div className="card p-8">
                  <h2 className="text-xl font-semibold text-navy-900 mb-6">Send an Inquiry</h2>
                  {error && <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">{error}</div>}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="label">Full Name *</label>
                        <input name="full_name" required value={form.full_name} onChange={handleChange} className="input-field" placeholder="Your full name" />
                      </div>
                      <div>
                        <label className="label">Email Address *</label>
                        <input name="email" type="email" required value={form.email} onChange={handleChange} className="input-field" placeholder="you@company.com" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="label">Phone Number</label>
                        <input name="phone" value={form.phone} onChange={handleChange} className="input-field" placeholder="+254 700 000 000" />
                      </div>
                      <div>
                        <label className="label">Business Name</label>
                        <input name="business_name" value={form.business_name} onChange={handleChange} className="input-field" placeholder="Your company" />
                      </div>
                    </div>
                    <div>
                      <label className="label">Service of Interest</label>
                      <select name="service_interest" value={form.service_interest} onChange={handleChange} className="input-field">
                        <option value="">Select a service...</option>
                        {['Online Marketing','Business Promotion','Customer Onboarding','Sales Support','Digital Campaign Management','Social Media Management','Lead Generation','Business Technology Support'].map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="label">Message</label>
                      <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="input-field resize-none" placeholder="Tell us about your business goals..." />
                    </div>
                    <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-3">
                      {loading ? <><Loader size={16} className="animate-spin" /> Sending...</> : 'Send Inquiry'}
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">

              <div className="card p-6">
                <h3 className="font-semibold text-navy-900 mb-4">Contact Information</h3>
                <div className="space-y-4 text-sm text-gray-600">
                  <div className="flex items-start gap-3">
                    <Mail size={16} className="text-blue-500 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-medium text-gray-800">Email</div>
                      <div>Hellenakaran@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={16} className="text-blue-500 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-medium text-gray-800">Phone</div>
                      <div>+254 769 989 480</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-blue-500 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-medium text-gray-800">Physical Address</div>
                      <div>Madaraka Estate, Mtambo Road</div>
                      <div>Bamburi, Kisauni District</div>
                      <div>Mombasa — P.O. Box 80101</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="font-semibold text-navy-900 mb-3 flex items-center gap-2">
                  <Clock size={15} className="text-blue-500" /> Business Hours
                </h3>
                <div className="text-sm text-gray-500 space-y-1.5">
                  <div className="flex justify-between"><span>Monday – Friday</span><span className="font-medium text-gray-700">8am – 6pm</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span className="font-medium text-gray-700">9am – 2pm</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span className="text-gray-400">Closed</span></div>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="font-semibold text-navy-900 mb-3 flex items-center gap-2">
                  <Building2 size={15} className="text-blue-500" /> Business Registration
                </h3>
                <div className="text-sm text-gray-500 space-y-1.5">
                  <div className="flex justify-between">
                    <span>KRA PIN</span>
                    <span className="font-medium text-gray-700">A007418199N</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ID Number</span>
                    <span className="font-medium text-gray-700">6798555</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ID Type</span>
                    <span className="font-medium text-gray-700">Kenyan Citizen</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Designation</span>
                    <span className="font-medium text-gray-700">Proprietor</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Occupation</span>
                    <span className="font-medium text-gray-700 text-right max-w-[140px]">Digital Services Provider</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
