import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { login as loginApi } from '../../api/auth';
import { Loader, Star } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await loginApi(email, password);
      login(res.data.token, res.data.user);
      const role = res.data.user.role;
      navigate(role === 'admin' ? '/admin/dashboard' : role === 'staff' ? '/staff/dashboard' : '/client/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.error || 'Login failed. Check your credentials.');
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
            Manage your<br />digital services<br />
            <span className="text-blue-400">from one place.</span>
          </h2>
          <p className="text-white/40 text-sm leading-relaxed mb-10">
            Sign in to access your dashboard, track service requests, and stay connected with your account team.
          </p>
          <div className="border-t border-white/10 pt-8">
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />)}
            </div>
            <p className="text-white/60 text-sm italic leading-relaxed">"Tapnovax transformed our online presence in 60 days. Measurable results from day one."</p>
            <div className="text-white/30 text-xs mt-3">— James Mwangi, CEO · Mwangi Traders Ltd, Nairobi</div>
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
          <h1 className="text-2xl font-bold text-navy-900 mb-1">Welcome back</h1>
          <p className="text-gray-400 text-sm mb-8">Sign in to your account to continue</p>

          {error && <div className="mb-5 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="label">Email Address</label>
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="input-field" placeholder="you@example.com" />
            </div>
            <div>
              <label className="label">Password</label>
              <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="input-field" placeholder="••••••••" />
            </div>
            <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-3">
              {loading ? <><Loader size={15} className="animate-spin" /> Signing in...</> : 'Sign In'}
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-6">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-600 font-medium hover:underline">Create one</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
