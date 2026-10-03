import React from 'react';
import { useNavigate } from 'react-router-dom';

const VillageReportPrint: React.FC = () => {
  const navigate = useNavigate();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="mobile-container flex flex-col bg-slate-100 relative">
      {/* Header Bar */}
      <div className="bg-white px-5 py-3 border-b border-gray-200 flex items-center justify-between shadow-xs print:hidden">
        <button 
          onClick={() => navigate('/kades-dashboard')}
          className="p-2 rounded-full bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span className="font-bold text-xs text-gray-800">Laporan Kesehatan Desa</span>
        <button
          onClick={handlePrint}
          className="bg-amber-700 hover:bg-amber-800 text-white font-bold px-3.5 py-1.5 rounded-full text-xs transition-colors flex items-center gap-1 shadow-xs"
        >
          🖨️ Cetak PDF
        </button>
      </div>

      {/* Printable Sheet */}
      <div className="flex-1 overflow-y-auto p-6 bg-slate-100 print:bg-white print:p-0">
        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 print:shadow-none print:border-none print:p-0 text-gray-900 font-serif">
          
          {/* Header Kop Laporan */}
          <div className="border-b-2 border-gray-900 pb-4 mb-4 text-center">
            <h2 className="font-bold text-xs tracking-wider uppercase">PEMERINTAH KABUPATEN SUKAMATRA</h2>
            <h1 className="font-extrabold text-base tracking-wide uppercase">PEMERINTAH DESA SUKAMAJU</h1>
            <p className="text-[10px] font-sans text-gray-600 mt-0.5">Jl. Raya Sukamaju No. 01, Kec. Sukamaju • Kode Pos: 53192</p>
          </div>

          <div className="text-center mb-6">
            <h3 className="font-bold text-sm underline tracking-wider uppercase">LAPORAN EKSEKUTIF KESEHATAN & STUNTING DESA</h3>
            <p className="font-mono text-xs text-gray-700 font-bold mt-1">Periode: September 2026</p>
          </div>

          {/* Metric Overview Table */}
          <div className="text-xs space-y-4 font-sans">
            <h4 className="font-bold text-xs border-b border-gray-300 pb-1 text-amber-900 uppercase">I. Ringkasan Demografi & Kesehatan Warga</h4>
            <table className="w-full text-left text-xs border-collapse border border-gray-300">
              <thead className="bg-slate-100 text-gray-700">
                <tr>
                  <th className="border border-gray-300 p-2">Indikator</th>
                  <th className="border border-gray-300 p-2 text-center">Jumlah / Nilai</th>
                  <th className="border border-gray-300 p-2">Keterangan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2 font-semibold">Total Warga Terdaftar</td>
                  <td className="border border-gray-300 p-2 text-center font-bold">1.240 Jiwa</td>
                  <td className="border border-gray-300 p-2">100% Terintegrasi NIK</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-semibold">Prevalensi Stunting Desa</td>
                  <td className="border border-gray-300 p-2 text-center font-bold text-emerald-700">6,2%</td>
                  <td className="border border-gray-300 p-2">Mencapai Target Pemkab (&lt;14%)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-semibold">Balita Riskan Stunting</td>
                  <td className="border border-gray-300 p-2 text-center font-bold text-amber-700">3 Anak</td>
                  <td className="border border-gray-300 p-2">Tersebar di RW 02 (Posyandu Mawar)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-semibold">Penyerapan Anggaran PMT</td>
                  <td className="border border-gray-300 p-2 text-center font-bold">Rp 45.000.000</td>
                  <td className="border border-gray-300 p-2">Dana Desa APBD 2026</td>
                </tr>
              </tbody>
            </table>

            <h4 className="font-bold text-xs border-b border-gray-300 pb-1 text-amber-900 uppercase pt-2">II. Rekomendasi Intervensi Pemerintah Desa</h4>
            <div className="bg-amber-50/60 p-3.5 rounded-xl border border-amber-200 text-[11px] leading-relaxed space-y-1">
              <p className="font-bold text-amber-900">1. Alokasi PMT Telur & Susu RW 02:</p>
              <p className="text-gray-700">Pengadaan bantuan makanan tambahan protein hewani harian untuk 3 balita di RW 02 selama 90 hari berturut-turut.</p>
              <p className="font-bold text-amber-900 pt-1">2. Pendampingan Posyandu Lansia Prolanis:</p>
              <p className="text-gray-700">Memaksimalkan pemeriksaan tensi & gula darah rutin setiap pekan ke-2 di Balai RW 01 - RW 06.</p>
            </div>
          </div>

          {/* Footer Signature */}
          <div className="mt-10 pt-4 border-t border-gray-300 flex justify-between items-end font-sans">
            <div className="text-xs text-gray-500">
              <p>Diunggah secara otomatis dari:</p>
              <p className="font-bold text-gray-800">NEXORA Smart Village Governance Platform</p>
            </div>

            <div className="text-center text-xs">
              <p className="text-gray-600">Sukamaju, 30 September 2026</p>
              <p className="font-bold text-gray-900 mt-0.5">Kepala Desa Sukamaju,</p>
              <div className="h-14 flex items-center justify-center my-1">
                <span className="text-amber-800 font-serif italic font-bold border-b border-amber-800 px-3 text-xs">
                  ✓ Disetujui H. Bambang Sugipto
                </span>
              </div>
              <p className="font-bold text-gray-900">H. Bambang Sugipto, S.Sos</p>
              <p className="text-[10px] text-gray-500">NIP: 19740812 200212 1 003</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VillageReportPrint;
