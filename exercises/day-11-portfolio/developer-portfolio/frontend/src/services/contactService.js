import api from './api';

// All API calls related to the Contact form

export const submitContactMessage = (payload) =>
  api.post('/contact', payload).then((res) => res.data);

export const getAllMessages = () => api.get('/contact').then((res) => res.data);
