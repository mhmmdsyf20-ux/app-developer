import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PatientProfile: React.FC = () => {
  const navigate = useNavigate();
  const [whatsappNotification, setWhatsappNotification] = useState(true);

  return (
    <div className="mobile-container flex flex-col bg-slate-50 relative">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-6 pt-3 pb-1 text-xs text-gray-600 bg-white border-b border-gray-100 font-medium">
        <span>09:51</span>
        <div className="flex items-center gap-1.5">
          <span>5G</span>
          <div className="w-5 h-2.5 border border-gray-700 rounded-sm p-0.5 flex items-center">
            <div className="bg-gray-800 w-full h-full rounded-2xs" />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto pb-24">
        {/* Header Profile Hero Card */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-6 pt-6 pb-8 rounded-b-3xl text-center relative shadow-md">
          <div className="relative inline-block mb-3">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
              alt="Avatar Pasien"
              className="w-20 h-20 rounded-full object-cover border-4 border-white/20 mx-auto shadow-lg"
            />
            <span className="absolute bottom-0 right-0 bg-[#00A99D] text-white p-1 rounded-full border-2 border-white">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </span>
          </div>

          <h2 className="font-bold text-white text-lg">Budi Santoso</h2>
          <p className="text-xs text-blue-200">NIK: 3302192804920003 • Pasien Aktif</p>
          <div className="mt-2 inline-block bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-3 py-0.5 rounded-full border border-emerald-400/30">
            ✓ Kartu BPJS Terverifikasi
          </div>
        </div>

        {/* Digital BPJS Card Widget */}
        <div className="px-6 -mt-4">
          <div className="bg-gradient-to-r from-[#0E56D0] to-[#00A99D] text-white rounded-2xl p-4 shadow-lg border border-white/20 relative overflow-hidden">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold tracking-widest text-cyan-200">NEXORA HEALTH CARD</span>
              <span className="text-[10px] font-mono bg-white/20 px-2 py-0.5 rounded">BPJS KESEHATAN</span>
            </div>
            <p className="font-mono text-sm font-bold tracking-wider mb-2">0001 9284 9201 8003</p>
            <div className="flex justify-between items-end text-[10px] text-blue-100">
              <div>
                <p className="text-[8px] text-blue-200">FASKES TINGKAT I</p>
                <p className="font-semibold text-white">Puskesmas Pembantu Sukamaju</p>
              </div>
              <p className="font-semibold">STATUS: AKTIF</p>
            </div>
          </div>
        </div>

        {/* Anggota Keluarga Terhubung */}
        <div className="px-6 mt-6">
          <h3 className="font-bold text-gray-900 text-sm mb-3">Anggota Keluarga Terhubung</h3>
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center text-xs">
                  AZ
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xs">Ahmad Zaki</h4>
                  <p className="text-[10px] text-gray-400">Anak (18 Bulan) • Posyandu Balita</p>
                </div>
              </div>
              <button 
                onClick={() => navigate('/kms-digital')}
                className="text-[10px] text-[#0E56D0] font-semibold hover:underline"
              >
                Lihat KMS
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-rose-100 text-rose-700 font-bold flex items-center justify-center text-xs">
                  SR
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xs">Siti Rahmawati</h4>
                  <p className="text-[10px] text-gray-400">Istri • Pemeriksaan Prolanis</p>
                </div>
              </div>
              <span className="text-[10px] text-[#0E56D0] font-semibold">Lihat Detail</span>
            </div>
          </div>
        </div>

        {/* Settings & Toggle */}
        <div className="px-6 mt-6">
          <h3 className="font-bold text-gray-900 text-sm mb-3">Pengaturan & Keamanan</h3>
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs space-y-3 text-xs">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-gray-900">Notifikasi WhatsApp</p>
                <p className="text-[10px] text-gray-400">Terima reminder posyandu & balasan AI</p>
              </div>
              <input
                type="checkbox"
                checked={whatsappNotification}
                onChange={() => setWhatsappNotification(!whatsappNotification)}
                className="w-4 h-4 accent-[#0E56D0] cursor-pointer"
              />
            </div>

            <div 
              onClick={() => navigate('/role-selection')}
              className="flex justify-between items-center pt-2 border-t border-gray-100 cursor-pointer text-blue-600 hover:text-blue-700"
            >
              <span className="font-semibold">Ganti Peran (Pasien / Kader)</span>
              <span>➔</span>
            </div>

            <div 
              onClick={() => navigate('/login')}
              className="flex justify-between items-center pt-2 border-t border-gray-100 cursor-pointer text-red-500 hover:text-red-600 font-semibold"
            >
              <span>Keluar dari Akun</span>
              <span>🚪</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Navbar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-2.5 flex justify-between items-center shadow-lg">
        <button onClick={() => navigate('/dashboard')} className="flex flex-col items-center text-gray-400">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
          <span className="text-[10px] font-semibold mt-0.5">Beranda</span>
        </button>
        <button onClick={() => navigate('/select-persona')} className="flex flex-col items-center text-gray-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          <span className="text-[10px] font-semibold mt-0.5">AI Chat</span>
        </button>
        <button onClick={() => navigate('/health-history')} className="flex flex-col items-center text-gray-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <span className="text-[10px] font-semibold mt-0.5">Riwayat</span>
        </button>
        <button className="flex flex-col items-center text-[#0E56D0]">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
          <span className="text-[10px] font-semibold mt-0.5">Profil</span>
        </button>
      </div>
    </div>
  );
};

export default PatientProfile;
