import api from './axios';

export const createServiceRequest = (data: object) => api.post('/client/service-requests', data);
export const getClientRequests = () => api.get('/client/service-requests');
export const getAdminRequests = () => api.get('/admin/service-requests');
export const updateRequestStatus = (id: number, status: string, admin_notes?: string) =>
  api.put(`/admin/service-requests/${id}/status`, { status, admin_notes });
