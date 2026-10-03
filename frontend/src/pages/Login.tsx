import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ identifier: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulasi login delay
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="page-center" style={{ padding: '30px' }}>
      
      <div style={{ width: '100%', marginBottom: '30px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem' }}>Masuk Akun</h1>
        <p className="subtitle">Silakan masuk untuk mengakses layanan kesehatan</p>
      </div>

      <div className="glass-card" style={{ width: '100%' }}>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              type="text" 
              className="input-field" 
              placeholder="Email atau NIK" 
              value={formData.identifier}
              onChange={(e) => setFormData({...formData, identifier: e.target.value})}
              required
            />
          </div>
          
          <div className="input-group">
            <input 
              type="password" 
              className="input-field" 
              placeholder="Kata Sandi"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '24px' }}>
            <span style={{ color: 'var(--primary-blue)', fontSize: '0.9rem', fontWeight: 500, cursor: 'pointer' }}>
              Lupa sandi?
            </span>
          </div>

          <button type="submit" className="btn-primary" disabled={isLoading}>
            {isLoading ? 'Memproses...' : 'Masuk Sekarang'}
          </button>
        </form>
      </div>

      <p style={{ marginTop: '30px', color: 'var(--text-gray)', fontSize: '0.9rem' }}>
        Belum punya akun? <span style={{ color: 'var(--primary-blue)', fontWeight: 600, cursor: 'pointer' }}>Daftar di sini</span>
      </p>

    </div>
  );
};

export default Login;
