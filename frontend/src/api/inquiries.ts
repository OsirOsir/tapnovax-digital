import api from './axios';

export const submitInquiry = (data: object) => api.post('/inquiries', data);
export const getInquiries = () => api.get('/admin/inquiries');
export const getInquiry = (id: number) => api.get(`/admin/inquiries/${id}`);
export const updateInquiryStatus = (id: number, status: string) =>
  api.put(`/admin/inquiries/${id}/status`, { status });
export const addInquiryNotes = (id: number, notes: string) =>
  api.post(`/admin/inquiries/${id}/notes`, { notes });
