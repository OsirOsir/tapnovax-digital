import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const dashPath = user?.role === 'admin' ? '/admin/dashboard' : user?.role === 'staff' ? '/staff/dashboard' : '/client/dashboard';

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-navy-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="font-semibold text-navy-900 text-base">Tapnovax Digital</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm text-gray-600 hover:text-navy-700 font-medium transition-colors">Home</Link>
            <Link to="/services" className="text-sm text-gray-600 hover:text-navy-700 font-medium transition-colors">Services</Link>
            <Link to="/about" className="text-sm text-gray-600 hover:text-navy-700 font-medium transition-colors">About</Link>
            <Link to="/contact" className="text-sm text-gray-600 hover:text-navy-700 font-medium transition-colors">Contact</Link>
          </nav>

          {/* Auth actions */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                <Link to={dashPath} className="btn-primary text-sm py-2">Dashboard</Link>
                <button onClick={handleLogout} className="text-sm text-gray-500 hover:text-gray-700">Sign out</button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-sm text-gray-600 hover:text-navy-700 font-medium">Sign in</Link>
                <Link to="/register" className="btn-primary text-sm py-2">Get Started</Link>
              </>
            )}
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-2 text-gray-500" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3">
          <Link to="/" className="block text-sm text-gray-700 py-2 font-medium" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/services" className="block text-sm text-gray-700 py-2 font-medium" onClick={() => setMobileOpen(false)}>Services</Link>
          <Link to="/about" className="block text-sm text-gray-700 py-2 font-medium" onClick={() => setMobileOpen(false)}>About</Link>
          <Link to="/contact" className="block text-sm text-gray-700 py-2 font-medium" onClick={() => setMobileOpen(false)}>Contact</Link>
          {user ? (
            <>
              <Link to={dashPath} className="block btn-primary text-sm" onClick={() => setMobileOpen(false)}>Dashboard</Link>
              <button onClick={() => { handleLogout(); setMobileOpen(false); }} className="block text-sm text-gray-500 py-2">Sign out</button>
            </>
          ) : (
            <>
              <Link to="/login" className="block text-sm text-gray-700 py-2 font-medium" onClick={() => setMobileOpen(false)}>Sign in</Link>
              <Link to="/register" className="block btn-primary text-sm" onClick={() => setMobileOpen(false)}>Get Started</Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}
