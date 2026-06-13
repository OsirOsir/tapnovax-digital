import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  LayoutDashboard, Users, Briefcase, MessageSquare, FileText,
  UserCheck, Settings, LogOut, Menu, X, ChevronRight, Bell
} from 'lucide-react';
import { useState } from 'react';

const adminNav = [
  { label: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Users', path: '/admin/users', icon: Users },
  { label: 'Services', path: '/admin/services', icon: Briefcase },
  { label: 'Inquiries', path: '/admin/inquiries', icon: MessageSquare },
  { label: 'Service Requests', path: '/admin/service-requests', icon: FileText },
  { label: 'Onboarding', path: '/admin/onboarding', icon: UserCheck },
];

const staffNav = [
  { label: 'Dashboard', path: '/staff/dashboard', icon: LayoutDashboard },
  { label: 'Leads', path: '/staff/leads', icon: MessageSquare },
];

const clientNav = [
  { label: 'Dashboard', path: '/client/dashboard', icon: LayoutDashboard },
  { label: 'My Requests', path: '/client/service-requests', icon: FileText },
  { label: 'Onboarding', path: '/client/onboarding', icon: UserCheck },
  { label: 'Profile', path: '/client/profile', icon: Settings },
];

export default function DashboardLayout() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = user?.role === 'admin' ? adminNav : user?.role === 'staff' ? staffNav : clientNav;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const roleLabel = { admin: 'Administrator', staff: 'Sales Staff', client: 'Client' }[user?.role || 'client'];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar overlay on mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/40 z-20 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:relative z-30 h-full w-64 bg-navy-950 flex flex-col transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-white/10">
          <img src="/logo-light.svg" alt="Tapnovax Digital" className="h-8 w-auto" />
          <button className="ml-auto lg:hidden text-white/40 hover:text-white" onClick={() => setSidebarOpen(false)}>
            <X size={18} />
          </button>
        </div>

        {/* User info */}
        <div className="px-4 py-4 border-b border-white/10">
          <div className="flex items-center gap-3 p-2">
            <div className="w-9 h-9 bg-blue-500/20 rounded-full flex items-center justify-center">
              <span className="text-blue-400 font-semibold text-sm">{user?.full_name?.[0]?.toUpperCase()}</span>
            </div>
            <div className="min-w-0">
              <div className="text-white text-sm font-medium truncate">{user?.full_name}</div>
              <div className="text-white/40 text-xs">{roleLabel}</div>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = location.pathname === item.path || location.pathname.startsWith(item.path + '/');
            return (
              <Link key={item.path} to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${active ? "bg-blue-500/20 text-blue-400" : "text-white/60 hover:text-white hover:bg-white/5"}`}>
                <Icon size={17} />
                <span>{item.label}</span>
                {active && <ChevronRight size={14} className="ml-auto" />}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="px-3 py-4 border-t border-white/10">
          <button onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-sm text-white/60 hover:text-red-400 hover:bg-red-500/10 transition-colors">
            <LogOut size={17} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4 flex-shrink-0">
          <button className="lg:hidden text-gray-500 hover:text-gray-700" onClick={() => setSidebarOpen(true)}>
            <Menu size={20} />
          </button>
          <div className="flex-1">
            <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">{roleLabel} Panel</div>
          </div>
          <button className="relative p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
            <Bell size={18} />
          </button>
          <Link to="/" className="text-sm text-gray-500 hover:text-navy-700 font-medium">
            Visit Site
          </Link>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
