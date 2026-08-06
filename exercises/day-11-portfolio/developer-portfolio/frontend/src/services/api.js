import axios from 'axios';

// Base URL of the Spring Boot backend.
// During local development this points at the backend running on port 8080.
// You can override it by creating a .env file with VITE_API_BASE_URL=...
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
