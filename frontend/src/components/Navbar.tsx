import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home', num: '01' },
  { to: '/services', label: 'Services', num: '02' },
  { to: '/pricing', label: 'Pricing', num: '03' },
  { to: '/about', label: 'About', num: '04' },
  { to: '/contact', label: 'Contact', num: '05' },
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
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link to="/">
            <img src="/logo-dark.svg" alt="Tapnovax Digital" className="h-7 w-auto" />
          </Link>

          {/* Desktop nav — numbered like ConductorAI */}
          <nav className="hidden md:flex items-center gap-0">
            {navLinks.map(({ to, label, num }) => (
              <Link key={to} to={to}
                className={`px-4 py-4 text-xs font-mono tracking-wider transition-all border-b-2 ${isActive(to) ? 'border-slate-900 text-slate-900' : 'border-transparent text-slate-400 hover:text-slate-900'}`}>
                {num} {label.toLowerCase()}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                <Link to={dashPath} className="btn-dark py-2 px-4 text-xs">Dashboard</Link>
                <button onClick={handleLogout} className="text-xs font-mono text-slate-400 hover:text-slate-700">sign out</button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-xs font-mono text-slate-400 hover:text-slate-800 px-3 py-2">sign in</Link>
                <Link to="/contact" className="btn-dark py-2 px-5 text-xs">contact us &gt;&gt;&gt;</Link>
              </>
            )}
          </div>

          <button className="md:hidden p-2 text-slate-500" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-1">
          {navLinks.map(({ to, label, num }) => (
            <Link key={to} to={to}
              className={`block text-xs font-mono py-3 border-b border-slate-50 ${isActive(to) ? 'text-slate-900' : 'text-slate-400'}`}
              onClick={() => setMobileOpen(false)}>
              {num} {label.toLowerCase()}
            </Link>
          ))}
          <div className="pt-3 space-y-2">
            {user ? (
              <Link to={dashPath} className="block btn-dark justify-center text-xs" onClick={() => setMobileOpen(false)}>Dashboard</Link>
            ) : (
              <Link to="/contact" className="block btn-dark justify-center text-xs" onClick={() => setMobileOpen(false)}>contact us &gt;&gt;&gt;</Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
