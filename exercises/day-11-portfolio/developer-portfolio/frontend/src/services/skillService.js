import api from './api';

// All API calls related to the "Skills" resource

export const getAllSkills = () => api.get('/skills').then((res) => res.data);

export const getSkillById = (id) => api.get(`/skills/${id}`).then((res) => res.data);

export const createSkill = (skill) => api.post('/skills', skill).then((res) => res.data);

export const updateSkill = (id, skill) => api.put(`/skills/${id}`, skill).then((res) => res.data);

export const deleteSkill = (id) => api.delete(`/skills/${id}`);
