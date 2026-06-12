import api from './axios';

export const login = (email: string, password: string) =>
  api.post('/auth/login', { email, password });

export const register = (data: object) => api.post('/auth/register', data);
export const getMe = () => api.get('/auth/me');
export const updateProfile = (data: object) => api.put('/auth/profile', data);
export const logout = () => api.post('/auth/logout');
