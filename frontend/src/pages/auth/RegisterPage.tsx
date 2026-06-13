import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { register as registerApi } from '../../api/auth';
import { Loader, CheckCircle } from 'lucide-react';

const perks = [
  'Submit and track service requests',
  'Dedicated account coordinator',
  'Real-time progress updates',
  'Direct messaging with our team',
];

export default function RegisterPage() {
  const [form, setForm] = useState({ full_name: '', email: '', phone: '', password: '', business_name: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await registerApi(form);
      login(res.data.token, res.data.user);
      navigate('/client/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.error || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Brand panel */}
      <div className="hidden lg:flex flex-col flex-1 bg-navy-950 justify-between p-12">
        <Link to="/">
          <img src="/logo-light.svg" alt="Tapnovax Digital" className="h-9 w-auto" />
        </Link>
        <div className="max-w-md">
          <h2 className="text-4xl font-bold text-white leading-tight mb-4">
            Start growing<br />your business<br />
            <span className="text-blue-400">the digital way.</span>
          </h2>
          <p className="text-white/40 text-sm leading-relaxed mb-10">
            Create an account to access Tapnovax Digital services and work directly with our team.
          </p>
          <div className="space-y-3">
            {perks.map((p) => (
              <div key={p} className="flex items-center gap-3 text-sm text-white/60">
                <CheckCircle size={15} className="text-blue-400 shrink-0" />
                {p}
              </div>
            ))}
          </div>
        </div>
        <div className="text-white/20 text-xs">© {new Date().getFullYear()} Tapnovax Digital</div>
      </div>

      {/* Form panel */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <div className="lg:hidden mb-8">
            <Link to="/">
              <img src="/logo-dark.svg" alt="Tapnovax Digital" className="h-8 w-auto" />
            </Link>
          </div>
          <h1 className="text-2xl font-bold text-navy-900 mb-1">Create your account</h1>
          <p className="text-gray-400 text-sm mb-8">Get started — it only takes a minute</p>

          {error && <div className="mb-5 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label">Full Name *</label>
              <input name="full_name" required value={form.full_name} onChange={handleChange} className="input-field" placeholder="Your full name" />
            </div>
            <div>
              <label className="label">Email Address *</label>
              <input name="email" type="email" required value={form.email} onChange={handleChange} className="input-field" placeholder="you@example.com" />
            </div>
            <div>
              <label className="label">Phone Number</label>
              <input name="phone" value={form.phone} onChange={handleChange} className="input-field" placeholder="+254 700 000 000" />
            </div>
            <div>
              <label className="label">Business Name</label>
              <input name="business_name" value={form.business_name} onChange={handleChange} className="input-field" placeholder="Your company name" />
            </div>
            <div>
              <label className="label">Password *</label>
              <input name="password" type="password" required minLength={6} value={form.password} onChange={handleChange} className="input-field" placeholder="Min. 6 characters" />
            </div>
            <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-3 mt-2">
              {loading ? <><Loader size={15} className="animate-spin" /> Creating account...</> : 'Create Account'}
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 font-medium hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
