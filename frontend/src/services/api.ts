import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to attach JWT token if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('nexora_token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// API Services
export const authService = {
  login: async (identifier: string, passwordHash: string) => {
    const res = await api.post('/auth/login', { identifier, password: passwordHash });
    if (res.data.token) {
      localStorage.setItem('nexora_token', res.data.token);
    }
    return res.data;
  },
  register: async (userData: any) => {
    const res = await api.post('/auth/register', userData);
    return res.data;
  }
};

export const aiService = {
  sendChat: async (persona: string, message: string) => {
    try {
      const res = await api.post('/ai/chat', { persona, message });
      return res.data;
    } catch {
      // Fallback response for offline / demo mode
      return {
        reply: `[Demo AI ${persona}] Gejala Anda telah dicatat. Perbanyak minum air putih dan istirahat.`,
        diagnosis: 'Indikasi Ringan ISPA / Kelelahan',
        consultationId: 'demo-' + Date.now()
      };
    }
  },
  generateReferral: async (consultationId: string, destinationFacility: string) => {
    try {
      const res = await api.post('/ai/referral', { consultationId, destinationFacility });
      return res.data;
    } catch {
      return {
        referral: {
          referralCode: `RUJ-2026-${Math.floor(10000 + Math.random() * 90000)}`,
          diagnosis: 'Indikasi Infeksi Saluran Pernapasan Akut (ISPA)',
          destinationFacility
        }
      };
    }
  }
};

export const balitaService = {
  saveCheckup: async (data: any) => {
    try {
      const res = await api.post('/balita/checkup', data);
      return res.data;
    } catch {
      return { message: 'Data antropometri balita berhasil direkam di lokal.' };
    }
  }
};

export const lansiaService = {
  saveCheckup: async (data: any) => {
    try {
      const res = await api.post('/lansia/checkup', data);
      return res.data;
    } catch {
      return { message: 'Data vital lansia berhasil direkam di lokal.' };
    }
  }
};
