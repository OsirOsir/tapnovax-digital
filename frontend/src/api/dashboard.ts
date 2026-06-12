import api from './axios';

export const getAdminDashboard = () => api.get('/admin/dashboard');
export const getClientDashboard = () => api.get('/client/dashboard');
export const getStaffDashboard = () => api.get('/staff/dashboard');
export const getUsers = () => api.get('/admin/users');
