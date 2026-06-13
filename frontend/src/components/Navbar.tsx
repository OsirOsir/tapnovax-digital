import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const dashPath = user?.role === 'admin' ? '/admin/dashboard' : user?.role === 'staff' ? '/staff/dashboard' : '/client/dashboard';

  const handleLogout = () => { logout(); navigate('/'); };

  const isActive = (to: string) => to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img src="/logo-dark.svg" alt="Tapnovax Digital" className="h-8 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <Link key={to} to={to}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${isActive(to) ? 'text-navy-950 bg-slate-100' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'}`}>
                {label}
              </Link>
            ))}
          </nav>

          {/* Auth */}
          <div className="hidden md:flex items-center gap-2">
            {user ? (
              <>
                <Link to={dashPath} className="btn-primary py-2 px-4 text-xs">Dashboard</Link>
                <button onClick={handleLogout} className="text-sm text-slate-400 hover:text-slate-600 px-3 py-2">Sign out</button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-sm font-medium text-slate-500 hover:text-slate-800 px-3 py-2">Sign in</Link>
                <Link to="/register" className="btn-dark py-2 px-4 text-xs">
                  Get Started <ArrowRight size={13} />
                </Link>
              </>
            )}
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-2 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-50" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-1">
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to}
              className={`block text-sm font-medium px-4 py-3 rounded-lg transition-all ${isActive(to) ? 'text-navy-950 bg-slate-100' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'}`}
              onClick={() => setMobileOpen(false)}>
              {label}
            </Link>
          ))}
          <div className="pt-3 border-t border-slate-100 space-y-2">
            {user ? (
              <>
                <Link to={dashPath} className="block btn-primary justify-center text-sm" onClick={() => setMobileOpen(false)}>Dashboard</Link>
                <button onClick={() => { handleLogout(); setMobileOpen(false); }} className="block w-full text-sm text-slate-400 py-2 text-center">Sign out</button>
              </>
            ) : (
              <>
                <Link to="/login" className="block text-sm font-medium text-slate-500 px-4 py-3 hover:bg-slate-50 rounded-lg" onClick={() => setMobileOpen(false)}>Sign in</Link>
                <Link to="/register" className="block btn-dark justify-center text-sm" onClick={() => setMobileOpen(false)}>Get Started</Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
