import api from './axios';

export const getServices = () => api.get('/services');
export const getServiceBySlug = (slug: string) => api.get(`/services/slug/${slug}`);
export const adminGetServices = () => api.get('/admin/services');
export const createService = (data: object) => api.post('/admin/services', data);
export const updateService = (id: number, data: object) => api.put(`/admin/services/${id}`, data);
export const deleteService = (id: number) => api.delete(`/admin/services/${id}`);
