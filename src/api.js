import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api';

export const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' }
});

export async function fetchElements(params) {
  const res = await api.get('/elements', { params });
  return res.data;
}

export async function fetchElement(slug) {
  const res = await api.get(`/elements/${slug}`);
  return res.data;
}

export async function createElement(payload) {
  const res = await api.post('/elements', payload);
  return res.data;
}

export async function uploadImage(formData) {
  const res = await api.post('/upload-image', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return res.data;
}
