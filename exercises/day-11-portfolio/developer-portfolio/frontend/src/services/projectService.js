import api from './api';

// All API calls related to the "Projects" resource

export const getAllProjects = () => api.get('/projects').then((res) => res.data);

export const getProjectById = (id) => api.get(`/projects/${id}`).then((res) => res.data);

export const createProject = (project) => api.post('/projects', project).then((res) => res.data);

export const updateProject = (id, project) =>
  api.put(`/projects/${id}`, project).then((res) => res.data);

export const deleteProject = (id) => api.delete(`/projects/${id}`);
