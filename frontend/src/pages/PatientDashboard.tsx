import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PatientDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'home' | 'ai' | 'history' | 'profile'>('home');
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [showPosyanduModal, setShowPosyanduModal] = useState(false);

  return (
    <div className="mobile-container flex flex-col bg-slate-50 relative">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-6 pt-3 pb-1 text-xs text-gray-600 bg-white border-b border-gray-100 font-medium">
        <span>09:41</span>
        <div className="flex items-center gap-1.5">
          <span>5G</span>
          <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.2 19.53 10.55 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
          </svg>
          <div className="w-5 h-2.5 border border-gray-700 rounded-sm p-0.5 flex items-center">
            <div className="bg-gray-800 w-full h-full rounded-2xs" />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto pb-24">
        {/* Header Profile Bar */}
        <div className="bg-white px-6 pt-5 pb-6 rounded-b-3xl shadow-xs border-b border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                  alt="Avatar Pasien"
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#0E56D0] p-0.5"
                />
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h2 className="font-bold text-gray-900 text-base">Budi Santoso</h2>
                  <span className="bg-blue-50 text-[#0E56D0] text-[10px] font-bold px-2 py-0.5 rounded-full border border-blue-100">
                    Terverifikasi
                  </span>
                </div>
                <p className="text-xs text-gray-400 font-medium">NIK: 3302192804920003 • Posyandu Mawar</p>
              </div>
            </div>

            {/* Notification Bell */}
            <button
              onClick={() => setShowNotificationModal(true)}
              className="relative p-2.5 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100 transition-all border border-gray-100"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
            </button>
          </div>

          {/* Quick Vitals Summary Card */}
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-2xl p-4 shadow-md mt-2 relative overflow-hidden">
            <div className="absolute right-[-20px] bottom-[-20px] w-32 h-32 bg-white/5 rounded-full blur-xl pointer-events-none"></div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-semibold tracking-wider text-blue-200 uppercase flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Ringkasan Kesehatan Pasien
              </span>
              <span className="text-[11px] text-blue-200 bg-white/10 px-2 py-0.5 rounded-full">Pemeriksaan Terakhir</span>
            </div>
            
            <div className="grid grid-cols-3 gap-2 text-center pt-1">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/10">
                <p className="text-[10px] text-blue-200">Tekanan Darah</p>
                <p className="text-sm font-bold text-white mt-0.5">120/80 <span className="text-[9px] font-normal">mmHg</span></p>
                <span className="text-[9px] text-emerald-300 font-medium bg-emerald-500/20 px-1.5 py-0.2 rounded mt-1 inline-block">Normal</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/10">
                <p className="text-[10px] text-blue-200">Gula Darah</p>
                <p className="text-sm font-bold text-white mt-0.5">95 <span className="text-[9px] font-normal">mg/dL</span></p>
                <span className="text-[9px] text-emerald-300 font-medium bg-emerald-500/20 px-1.5 py-0.2 rounded mt-1 inline-block">Bagus</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/10">
                <p className="text-[10px] text-blue-200">Berat Badan</p>
                <p className="text-sm font-bold text-white mt-0.5">68 <span className="text-[9px] font-normal">kg</span></p>
                <span className="text-[9px] text-blue-200 font-medium bg-blue-500/20 px-1.5 py-0.2 rounded mt-1 inline-block">Ideal</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Consultation Hero Card */}
        <div className="px-6 mt-5">
          <div 
            onClick={() => navigate('/select-persona')}
            className="cursor-pointer bg-gradient-to-br from-[#0E56D0] via-[#1D63D8] to-[#00A99D] rounded-3xl p-5 text-white shadow-lg relative overflow-hidden group transition-all hover:scale-[1.01]"
          >
            <div className="absolute right-[-10px] top-[-10px] w-28 h-28 bg-white/10 rounded-full blur-lg pointer-events-none group-hover:scale-125 transition-transform"></div>
            
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-white/20 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full backdrop-blur-md flex items-center gap-1">
                <svg className="w-3 h-3 text-cyan-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
                AI Smart Diagnosis 24/7
              </span>
            </div>

            <h3 className="text-lg font-bold mb-1 leading-snug">Tanyakan Keluhan Kesehatan Anda</h3>
            <p className="text-xs text-blue-100 mb-4 leading-relaxed max-w-[240px]">
              Konsultasi gratis dengan Dokter AI Virtual, analisis gejala instan & draft rujukan otomatis.
            </p>

            <div className="flex items-center justify-between pt-1">
              <div className="flex -space-x-2">
                <span className="w-7 h-7 rounded-full bg-cyan-400 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-900">Dr.N</span>
                <span className="w-7 h-7 rounded-full bg-purple-400 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-900">Dr.M</span>
                <span className="w-7 h-7 rounded-full bg-emerald-400 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-900">Nutri</span>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/select-persona');
                }}
                className="bg-white text-[#0E56D0] font-bold text-xs px-4 py-2 rounded-full shadow-md hover:bg-blue-50 transition-colors flex items-center gap-1"
              >
                Mulai Chat AI
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Layanan Utama (Grid Menu) */}
        <div className="px-6 mt-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-gray-900 text-sm">Layanan Utama</h3>
            <span className="text-xs text-[#0E56D0] font-semibold cursor-pointer">Lihat Semua</span>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {/* Menu 1: Chat AI */}
            <div 
              onClick={() => navigate('/select-persona')}
              className="flex flex-col items-center text-center cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-1.5 group-hover:bg-[#0E56D0] group-hover:text-white transition-all shadow-xs">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <span className="text-[11px] font-semibold text-gray-700 group-hover:text-blue-600">Chat AI</span>
            </div>

            {/* Menu 2: Jadwal Posyandu */}
            <div 
              onClick={() => setShowPosyanduModal(true)}
              className="flex flex-col items-center text-center cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#00A99D] mb-1.5 group-hover:bg-[#00A99D] group-hover:text-white transition-all shadow-xs">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-[11px] font-semibold text-gray-700 group-hover:text-teal-600">Posyandu</span>
            </div>

            {/* Menu 3: Rujukan AI */}
            <div 
              onClick={() => navigate('/referral-print?code=RUJ-2026-84920&name=Budi%20Santoso&nik=3302192804920003')}
              className="flex flex-col items-center text-center cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-1.5 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-xs">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="text-[11px] font-semibold text-gray-700 group-hover:text-purple-600">Rujukan</span>
            </div>

            {/* Menu 4: Rekam Medis */}
            <div 
              onClick={() => navigate('/health-history')}
              className="flex flex-col items-center text-center cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 mb-1.5 group-hover:bg-amber-600 group-hover:text-white transition-all shadow-xs">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span className="text-[11px] font-semibold text-gray-700 group-hover:text-amber-600">Rekam Medis</span>
            </div>
          </div>
        </div>

        {/* Banner Kegiatan & Edukasi Kesehatan Desa */}
        <div className="px-6 mt-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-gray-900 text-sm">Informasi & Edukasi Desa</h3>
            <span className="text-xs text-gray-400">Terbaru</span>
          </div>

          <div className="space-y-3">
            {/* Card Info 1 */}
            <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-[#00A99D] flex items-center justify-center font-bold text-xs shrink-0">
                28
                <br />
                SEP
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-bold text-[#00A99D] uppercase tracking-wider">Jadwal Posyandu Balita</span>
                <h4 className="text-xs font-bold text-gray-900 truncate">Pemeriksaan & Antropometri Balita Seri 4</h4>
                <p className="text-[11px] text-gray-400 truncate">Lokasi: Balai Desa Sukamaju (08.00 - 11.30 WIB)</p>
              </div>
            </div>

            {/* Card Info 2 */}
            <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0E56D0] flex items-center justify-center font-bold text-xs shrink-0">
                02
                <br />
                OKT
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-bold text-[#0E56D0] uppercase tracking-wider">Program Prolanis</span>
                <h4 className="text-xs font-bold text-gray-900 truncate">Cek Gula Darah & Hipertensi Lansia</h4>
                <p className="text-[11px] text-gray-400 truncate">Puskesmas Pembantu Desa Sukamaju</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-2.5 flex justify-between items-center shadow-lg">
        <button 
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center ${activeTab === 'home' ? 'text-[#0E56D0]' : 'text-gray-400'}`}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
          <span className="text-[10px] font-semibold mt-0.5">Beranda</span>
        </button>

        <button 
          onClick={() => {
            setActiveTab('ai');
            navigate('/select-persona');
          }}
          className={`flex flex-col items-center ${activeTab === 'ai' ? 'text-[#0E56D0]' : 'text-gray-400'}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="text-[10px] font-semibold mt-0.5">AI Chat</span>
        </button>

        <button 
          onClick={() => {
            setActiveTab('history');
            navigate('/health-history');
          }}
          className={`flex flex-col items-center ${activeTab === 'history' ? 'text-[#0E56D0]' : 'text-gray-400'}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-[10px] font-semibold mt-0.5">Riwayat</span>
        </button>

        <button 
          onClick={() => {
            setActiveTab('profile');
            navigate('/patient-profile');
          }}
          className={`flex flex-col items-center ${activeTab === 'profile' ? 'text-[#0E56D0]' : 'text-gray-400'}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="text-[10px] font-semibold mt-0.5">Profil</span>
        </button>
      </div>

      {/* Modal Notification */}
      {showNotificationModal && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-xs z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl p-6 w-full max-w-xs text-center shadow-xl animate-fade-in">
            <div className="w-12 h-12 bg-blue-50 text-[#0E56D0] rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-1">Notifikasi Terkini</h3>
            <p className="text-xs text-gray-500 mb-4">Hasil skrining terakhir Anda dinyatakan sehat. Pengingat penimbangan balita akan dikirim H-1.</p>
            <button 
              onClick={() => setShowNotificationModal(false)}
              className="w-full bg-[#0E56D0] text-white font-semibold py-2.5 rounded-full text-xs"
            >
              Tutup
            </button>
          </div>
        </div>
      )}

      {/* Modal Posyandu */}
      {showPosyanduModal && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-xs z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl p-6 w-full max-w-xs text-center shadow-xl">
            <div className="w-12 h-12 bg-teal-50 text-[#00A99D] rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-1">Posyandu Mawar Desa</h3>
            <p className="text-xs text-gray-500 mb-3">Jadwal Rutin: Sabtu Minggu Ke-4 Setiap Bulan</p>
            <div className="bg-gray-50 rounded-xl p-3 text-left text-xs text-gray-600 mb-4 space-y-1">
              <p>📍 Location: Balai RW 02 Desa Sukamaju</p>
              <p>👨‍⚕️ Kader Penanggung Jawab: Ibu Siti Aminah</p>
              <p>💉 Layanan: Penimbangan, Imunisasi & PMT</p>
            </div>
            <button 
              onClick={() => setShowPosyanduModal(false)}
              className="w-full bg-[#00A99D] text-white font-semibold py-2.5 rounded-full text-xs"
            >
              Tutup Informasi
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientDashboard;
