import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 2500); // Durasi splash screen 2.5 detik
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="page-center">
      <div className="glass-card" style={{ textAlign: 'center', border: 'none', boxShadow: 'none', background: 'transparent' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>NEXORA</h1>
        <p className="subtitle" style={{ color: 'var(--primary-blue)', fontWeight: 500 }}>Pemkab Health Portal</p>
        
        <div style={{ marginTop: '40px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: '3px solid rgba(14, 86, 208, 0.2)',
            borderTopColor: 'var(--primary-blue)',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto'
          }} />
        </div>
      </div>
      
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Splash;
