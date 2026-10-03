import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const KaderDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'home' | 'record' | 'referral' | 'profile'>('home');
  const [showEventModal, setShowEventModal] = useState(false);

  return (
    <div className="mobile-container flex flex-col bg-slate-50 relative">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-6 pt-3 pb-1 text-xs text-gray-600 bg-white border-b border-gray-100 font-medium">
        <span>09:45</span>
        <div className="flex items-center gap-1.5">
          <span>5G</span>
          <div className="w-5 h-2.5 border border-gray-700 rounded-sm p-0.5 flex items-center">
            <div className="bg-gray-800 w-full h-full rounded-2xs" />
          </div>
        </div>
      </div>

      {/* Main Scrollable Body */}
      <div className="flex-1 overflow-y-auto pb-24">
        {/* Header Profile Bar for Kader */}
        <div className="bg-gradient-to-r from-emerald-700 to-teal-800 text-white px-6 pt-5 pb-6 rounded-b-3xl shadow-md">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
                  alt="Avatar Kader"
                  className="w-12 h-12 rounded-full object-cover border-2 border-emerald-300 p-0.5"
                />
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-emerald-800 rounded-full"></span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h2 className="font-bold text-white text-base">Siti Aminah</h2>
                  <span className="bg-emerald-500/30 text-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-400/30">
                    Kader Posyandu
                  </span>
                </div>
                <p className="text-xs text-teal-100 font-medium">Posyandu Mawar 02 • Desa Sukamaju</p>
              </div>
            </div>

            {/* Role switch button */}
            <button
              onClick={() => navigate('/role-selection')}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all border border-white/10"
              title="Ganti Peran"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </button>
          </div>

          {/* Quick Metrics Banner */}
          <div className="grid grid-cols-4 gap-2 text-center pt-2">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2.5 border border-white/10">
              <p className="text-[10px] text-teal-100">Balita Dipantau</p>
              <p className="text-base font-bold text-white mt-0.5">48</p>
              <span className="text-[9px] text-emerald-300">Aktif</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2.5 border border-white/10">
              <p className="text-[10px] text-teal-100">Risiko Stunting</p>
              <p className="text-base font-bold text-amber-300 mt-0.5">3</p>
              <span className="text-[9px] text-amber-200">Perhatian</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2.5 border border-white/10">
              <p className="text-[10px] text-teal-100">Cek Bulan Ini</p>
              <p className="text-base font-bold text-white mt-0.5">42</p>
              <span className="text-[9px] text-emerald-300">87.5%</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2.5 border border-white/10">
              <p className="text-[10px] text-teal-100">Rujukan AI</p>
              <p className="text-base font-bold text-cyan-300 mt-0.5">2</p>
              <span className="text-[9px] text-cyan-200">Perlu Cek</span>
            </div>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="px-6 mt-6">
          <h3 className="font-bold text-gray-900 text-sm mb-3">Tindakan Cepat Kader</h3>

          <div className="grid grid-cols-3 gap-2">
            {/* Card Action 1: Input Antropometri Balita */}
            <div
              onClick={() => navigate('/balita-recording')}
              className="cursor-pointer bg-white p-3 rounded-2xl border border-gray-100 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#00A99D] flex items-center justify-center group-hover:bg-[#00A99D] group-hover:text-white transition-colors mb-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-[11px] group-hover:text-[#00A99D] transition-colors leading-tight">Catat Balita</h4>
                <p className="text-[9px] text-gray-400 mt-0.5">TB, BB & Stunting</p>
              </div>
            </div>

            {/* Card Action 2: Input Lansia & Prolanis */}
            <div
              onClick={() => navigate('/lansia-recording')}
              className="cursor-pointer bg-white p-3 rounded-2xl border border-gray-100 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors mb-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-[11px] group-hover:text-purple-600 transition-colors leading-tight">Cek Lansia</h4>
                <p className="text-[9px] text-gray-400 mt-0.5">Tensi & Gula Darah</p>
              </div>
            </div>

            {/* Card Action 3: Verifikasi Surat Rujukan */}
            <div
              onClick={() => navigate('/referral-verification')}
              className="cursor-pointer bg-white p-3 rounded-2xl border border-gray-100 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0E56D0] flex items-center justify-center group-hover:bg-[#0E56D0] group-hover:text-white transition-colors mb-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-[11px] group-hover:text-[#0E56D0] transition-colors leading-tight">Verifikasi AI</h4>
                <p className="text-[9px] text-gray-400 mt-0.5">Surat Rujukan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Monitoring Balita & Risiko Stunting Terbaru */}
        <div className="px-6 mt-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-gray-900 text-sm">Status Balita Posyandu Mawar</h3>
            <span className="text-xs text-[#00A99D] font-semibold cursor-pointer">Lihat Semua (48)</span>
          </div>

          <div className="space-y-3">
            {/* Balita 1 - Riskan Stunting */}
            <div className="bg-white rounded-2xl p-4 border border-amber-100 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center text-xs">
                  AZ
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xs">Ahmad Zaki (18 Bln)</h4>
                  <p className="text-[11px] text-gray-400">BB: 8.8 kg • TB: 74 cm • LK: 45 cm</p>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full border border-amber-200">
                ⚠️ Riskan Stunting
              </span>
            </div>

            {/* Balita 2 - Normal / Baik */}
            <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-xs">
                  AP
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xs">Anisa Putri (24 Bln)</h4>
                  <p className="text-[11px] text-gray-400">BB: 11.5 kg • TB: 85 cm • LK: 47 cm</p>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full border border-emerald-200">
                ✓ Gizi Baik
              </span>
            </div>

            {/* Balita 3 - Normal */}
            <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs">
                  RF
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xs">Rizky Febrian (12 Bln)</h4>
                  <p className="text-[11px] text-gray-400">BB: 9.6 kg • TB: 75 cm • LK: 44 cm</p>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-200">
                ✓ Normal
              </span>
            </div>
          </div>
        </div>

        {/* Jadwal Kegiatan Posyandu Kader */}
        <div className="px-6 mt-6">
          <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-4 border border-teal-100 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold text-[#00A99D] uppercase tracking-wider">Jadwal Penimbangan Berikutnya</span>
              <h4 className="font-bold text-gray-900 text-xs mt-0.5">Posyandu Balita Seri 4 - Balai RW 02</h4>
              <p className="text-[11px] text-gray-500">Sabtu, 28 September 2026 • 08.00 WIB</p>
            </div>
            <button
              onClick={() => setShowEventModal(true)}
              className="bg-[#00A99D] text-white font-semibold text-xs px-3.5 py-2 rounded-xl shadow-sm hover:bg-teal-600 transition-colors"
            >
              Kelola Event
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar for Kader */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-2.5 flex justify-between items-center shadow-lg">
        <button
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center ${activeTab === 'home' ? 'text-[#00A99D]' : 'text-gray-400'}`}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
          <span className="text-[10px] font-semibold mt-0.5">Beranda</span>
        </button>

        <button
          onClick={() => {
            setActiveTab('record');
            navigate('/balita-recording');
          }}
          className={`flex flex-col items-center ${activeTab === 'record' ? 'text-[#00A99D]' : 'text-gray-400'}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          <span className="text-[10px] font-semibold mt-0.5">Catat Balita</span>
        </button>

        <button
          onClick={() => {
            setActiveTab('referral');
            navigate('/referral-verification');
          }}
          className={`flex flex-col items-center ${activeTab === 'referral' ? 'text-[#00A99D]' : 'text-gray-400'}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="text-[10px] font-semibold mt-0.5">Verifikasi</span>
        </button>

        <button
          onClick={() => setActiveTab('profile')}
          className={`flex flex-col items-center ${activeTab === 'profile' ? 'text-[#00A99D]' : 'text-gray-400'}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="text-[10px] font-semibold mt-0.5">Profil Kader</span>
        </button>
      </div>

      {/* Event Modal */}
      {showEventModal && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-xs z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl p-6 w-full max-w-xs text-center shadow-xl">
            <div className="w-12 h-12 bg-teal-50 text-[#00A99D] rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-1">Manajemen Event Posyandu</h3>
            <p className="text-xs text-gray-500 mb-4">Fitur ini memungkinkan Kader membuat jadwal pengukuran balita & mengintegrasikan pesan WhatsApp reminder otomatis ke warga.</p>
            <button
              onClick={() => setShowEventModal(false)}
              className="w-full bg-[#00A99D] text-white font-semibold py-2.5 rounded-full text-xs"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default KaderDashboard;
