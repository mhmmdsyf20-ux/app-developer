import React from 'react';
import { useNavigate } from 'react-router-dom';

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="mobile-container flex flex-col bg-white overflow-y-auto">
      {/* Status bar */}
      <div className="flex justify-between items-center px-5 pt-3 pb-1 text-[11px] text-gray-500">
        <span>10:10</span><span>5G 🔋</span>
      </div>

      {/* Header */}
      <div className="px-6 pt-3 flex flex-col items-center text-center">
        <div className="flex items-center gap-1 mb-2">
          <span className="text-[#00A99D] font-black text-2xl leading-none">N</span>
          <span className="text-[#0E56D0] font-bold text-xl">EXORA AI</span>
        </div>
        <h1 className="text-xl font-bold text-gray-900 mb-1">Selamat Datang di NEXORA</h1>
        <p className="text-gray-500 text-xs">Pilih jenis akun untuk mengakses portal kesehatan.</p>
      </div>

      {/* Role Cards */}
      <div className="px-6 mt-3 flex flex-col gap-3 pb-8">
        
        {/* Pasien Card */}
        <div className="bg-white rounded-2xl border border-gray-100 p-3.5 shadow-xs text-center">
          <div className="w-10 h-10 bg-blue-50 text-[#0E56D0] rounded-full flex items-center justify-center mx-auto mb-1.5">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
            </svg>
          </div>
          <h3 className="font-bold text-gray-900 text-xs mb-0.5">Pasien / Masyarakat</h3>
          <p className="text-gray-400 text-[10px] mb-2.5">
            Konsultasi AI 24/7, pantau kesehatan, & surat rujukan.
          </p>
          <button
            onClick={() => navigate('/register')}
            className="w-full bg-[#0E56D0] text-white font-semibold py-2 rounded-full text-xs hover:bg-blue-700 transition-colors"
          >
            Masuk sebagai Pasien
          </button>
        </div>

        {/* Kader Card */}
        <div className="bg-white rounded-2xl border border-gray-100 p-3.5 shadow-xs text-center">
          <div className="w-10 h-10 bg-teal-50 text-[#00A99D] rounded-full flex items-center justify-center mx-auto mb-1.5">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="font-bold text-gray-900 text-xs mb-0.5">Kader Posyandu</h3>
          <p className="text-gray-400 text-[10px] mb-2.5">
            Antropometri balita, cegah stunting, & lansia Prolanis.
          </p>
          <button
            onClick={() => navigate('/kader-dashboard')}
            className="w-full bg-[#00A99D] text-white font-semibold py-2 rounded-full text-xs hover:bg-teal-600 transition-colors"
          >
            Masuk sebagai Kader
          </button>
        </div>

        {/* Dokter / Puskesmas Card */}
        <div className="bg-white rounded-2xl border border-gray-100 p-3.5 shadow-xs text-center">
          <div className="w-10 h-10 bg-slate-100 text-slate-800 rounded-full flex items-center justify-center mx-auto mb-1.5">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h3 className="font-bold text-gray-900 text-xs mb-0.5">Dokter / Nakes Puskesmas</h3>
          <p className="text-gray-400 text-[10px] mb-2.5">
            Evaluasi rujukan AI, e-prescription, & pertimbangan RSUD.
          </p>
          <button
            onClick={() => navigate('/doctor-dashboard')}
            className="w-full bg-slate-900 text-white font-semibold py-2 rounded-full text-xs hover:bg-slate-800 transition-colors"
          >
            Masuk Portal Dokter
          </button>
        </div>

        {/* Kepala Desa / Pemdes Card */}
        <div className="bg-white rounded-2xl border border-gray-100 p-3.5 shadow-xs text-center">
          <div className="w-10 h-10 bg-amber-50 text-amber-800 rounded-full flex items-center justify-center mx-auto mb-1.5">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m3 0h1m-1-4h.01M9 16h.01M9 12h.01M9 8h.01M15 16h.01M15 12h.01M15 8h.01" />
            </svg>
          </div>
          <h3 className="font-bold text-gray-900 text-xs mb-0.5">Kepala Desa / Pemdes</h3>
          <p className="text-gray-400 text-[10px] mb-2.5">
            Monitoring stunting desa, dana PMT, & statistik warga.
          </p>
          <button
            onClick={() => navigate('/kades-dashboard')}
            className="w-full bg-amber-700 text-white font-semibold py-2 rounded-full text-xs hover:bg-amber-800 transition-colors"
          >
            Masuk Portal Kepala Desa
          </button>
        </div>

      </div>
    </div>
  );
};

export default RoleSelection;
