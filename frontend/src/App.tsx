import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

// Public pages
import HomePage from './pages/public/HomePage';
import ServicesPage from './pages/public/ServicesPage';
import ServiceDetailPage from './pages/public/ServiceDetailPage';
import AboutPage from './pages/public/AboutPage';
import ContactPage from './pages/public/ContactPage';
import PricingPage from './pages/public/PricingPage';

// Auth pages
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

// Layouts
import PublicLayout from './layouts/PublicLayout';
import DashboardLayout from './layouts/DashboardLayout';

// Admin pages
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminUsers from './pages/admin/AdminUsers';
import AdminServices from './pages/admin/AdminServices';
import AdminInquiries from './pages/admin/AdminInquiries';
import AdminServiceRequests from './pages/admin/AdminServiceRequests';
import AdminOnboarding from './pages/admin/AdminOnboarding';

// Client pages
import ClientDashboard from './pages/client/ClientDashboard';
import ClientServiceRequests from './pages/client/ClientServiceRequests';
import NewServiceRequest from './pages/client/NewServiceRequest';
import ClientOnboarding from './pages/client/ClientOnboarding';
import ClientProfile from './pages/client/ClientProfile';

// Staff pages
import StaffDashboard from './pages/staff/StaffDashboard';
import StaffLeads from './pages/staff/StaffLeads';

const ProtectedRoute = ({ children, roles }: { children: JSX.Element; roles?: string[] }) => {
  const { user, loading } = useAuth();
  if (loading) return <div className="flex items-center justify-center h-screen"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-navy-700" /></div>;
  if (!user) return <Navigate to="/login" replace />;
  if (roles && !roles.includes(user.role)) return <Navigate to="/" replace />;
  return children;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/pricing" element={<PricingPage />} />
          </Route>

          {/* Auth */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Admin */}
          <Route path="/admin" element={<ProtectedRoute roles={["admin"]}><DashboardLayout /></ProtectedRoute>}>
            <Route index element={<AdminDashboard />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="services" element={<AdminServices />} />
            <Route path="inquiries" element={<AdminInquiries />} />
            <Route path="service-requests" element={<AdminServiceRequests />} />
            <Route path="onboarding" element={<AdminOnboarding />} />
          </Route>

          {/* Staff */}
          <Route path="/staff" element={<ProtectedRoute roles={["staff", "admin"]}><DashboardLayout /></ProtectedRoute>}>
            <Route index element={<StaffDashboard />} />
            <Route path="dashboard" element={<StaffDashboard />} />
            <Route path="leads" element={<StaffLeads />} />
          </Route>

          {/* Client */}
          <Route path="/client" element={<ProtectedRoute roles={["client"]}><DashboardLayout /></ProtectedRoute>}>
            <Route index element={<ClientDashboard />} />
            <Route path="dashboard" element={<ClientDashboard />} />
            <Route path="service-requests" element={<ClientServiceRequests />} />
            <Route path="service-requests/new" element={<NewServiceRequest />} />
            <Route path="onboarding" element={<ClientOnboarding />} />
            <Route path="profile" element={<ClientProfile />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
