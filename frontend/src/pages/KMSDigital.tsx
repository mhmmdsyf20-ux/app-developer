import React from 'react';
import { useNavigate } from 'react-router-dom';

const KMSDigital: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="mobile-container flex flex-col bg-slate-50 relative">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-6 pt-3 pb-1 text-xs text-gray-600 bg-white border-b border-gray-100 font-medium">
        <span>10:06</span>
        <div className="flex items-center gap-1.5">
          <span>5G</span>
          <div className="w-5 h-2.5 border border-gray-700 rounded-sm p-0.5 flex items-center">
            <div className="bg-gray-800 w-full h-full rounded-2xs" />
          </div>
        </div>
      </div>

      {/* Header Bar */}
      <div className="bg-white px-5 py-4 border-b border-gray-100 flex items-center gap-3 shadow-xs">
        <button 
          onClick={() => navigate('/patient-profile')}
          className="p-2 rounded-full bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div>
          <h1 className="font-bold text-gray-900 text-base leading-tight">KMS Digital Balita</h1>
          <p className="text-xs text-gray-400">Kartu Menuju Sehat • Posyandu Mawar</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4 pb-24">
        
        {/* Balita Profile Card */}
        <div className="bg-gradient-to-r from-[#00A99D] to-teal-800 text-white rounded-2xl p-5 shadow-md flex items-center justify-between">
          <div>
            <span className="bg-white/20 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              KMS ELEKTRONIK
            </span>
            <h2 className="font-bold text-lg mt-1">Ahmad Zaki</h2>
            <p className="text-xs text-teal-100 font-medium">18 Bulan • Laki-laki • Ortu: Budi Santoso</p>
          </div>
          <div className="w-12 h-12 bg-white text-[#00A99D] rounded-full font-bold flex items-center justify-center text-sm shadow-sm">
            18M
          </div>
        </div>

        {/* Kurva Pertumbuhan Visual (WHO Curve Widget) */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-xs space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-gray-900 text-xs tracking-wider uppercase text-[#00A99D]">
              Grafik Pertumbuhan Berat Badan (WHO)
            </h3>
            <span className="text-[10px] font-bold bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full border border-amber-200">
              ⚠️ Riskan Stunting
            </span>
          </div>

          {/* Simple Visual Graph Representation */}
          <div className="h-36 bg-slate-50 rounded-xl p-3 border border-gray-100 relative flex items-end justify-between px-4 pt-6">
            {/* Target Normal Zone Line */}
            <div className="absolute top-8 left-4 right-4 border-b-2 border-emerald-300 border-dashed flex justify-between text-[9px] text-emerald-600 font-semibold">
              <span>Batas Normal Atas (11 kg)</span>
              <span>Batas Normal Bawah (9.5 kg)</span>
            </div>

            {/* Growth Bars */}
            <div className="flex flex-col items-center gap-1 z-10">
              <span className="text-[9px] font-bold text-gray-600">7.2kg</span>
              <div className="w-6 bg-teal-400 rounded-t-md h-12"></div>
              <span className="text-[9px] text-gray-400">12B</span>
            </div>

            <div className="flex flex-col items-center gap-1 z-10">
              <span className="text-[9px] font-bold text-gray-600">7.8kg</span>
              <div className="w-6 bg-teal-400 rounded-t-md h-16"></div>
              <span className="text-[9px] text-gray-400">14B</span>
            </div>

            <div className="flex flex-col items-center gap-1 z-10">
              <span className="text-[9px] font-bold text-gray-600">8.2kg</span>
              <div className="w-6 bg-teal-500 rounded-t-md h-20"></div>
              <span className="text-[9px] text-gray-400">16B</span>
            </div>

            <div className="flex flex-col items-center gap-1 z-10">
              <span className="text-[9px] font-bold text-amber-600">8.8kg</span>
              <div className="w-6 bg-amber-500 rounded-t-md h-24 ring-2 ring-amber-300"></div>
              <span className="text-[9px] font-bold text-amber-700">18B</span>
            </div>
          </div>

          <p className="text-[11px] text-gray-500 leading-relaxed bg-teal-50/50 p-2.5 rounded-xl border border-teal-100">
            💡 <strong>Saran Gizi Posyandu:</strong> Kenaikan berat badan bulan ini +600g. Disarankan penambahan asupan protein hewani (telur & ikan) setiap hari.
          </p>
        </div>

        {/* Tabel Catatan Imunisasi Dasar */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-xs space-y-3">
          <h3 className="font-bold text-gray-900 text-xs tracking-wider uppercase text-gray-700">
            Status Imunisasi Dasar Lengkap
          </h3>

          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between p-2.5 bg-emerald-50 rounded-xl border border-emerald-100">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 bg-emerald-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold">✓</span>
                <span className="font-semibold text-gray-800">Hepatitis B0 & BCG</span>
              </div>
              <span className="text-[10px] text-emerald-700 font-bold">Lengkap (1 Bln)</span>
            </div>

            <div className="flex items-center justify-between p-2.5 bg-emerald-50 rounded-xl border border-emerald-100">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 bg-emerald-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold">✓</span>
                <span className="font-semibold text-gray-800">Polio 1, 2, 3 & DPT-HB-Hib 1-3</span>
              </div>
              <span className="text-[10px] text-emerald-700 font-bold">Lengkap (4 Bln)</span>
            </div>

            <div className="flex items-center justify-between p-2.5 bg-amber-50 rounded-xl border border-amber-100">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 bg-amber-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold">!</span>
                <span className="font-semibold text-gray-800">Campak / MR Booster</span>
              </div>
              <span className="text-[10px] text-amber-700 font-bold">Jadwal: Bln Depan</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default KMSDigital;
