import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const KadesDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [selectedRw, setSelectedRw] = useState<string>('ALL');
  const [isBudgetApproved, setIsBudgetApproved] = useState(false);
  const [showApprovalModal, setShowApprovalModal] = useState(false);

  return (
    <div className="mobile-container flex flex-col bg-slate-50 relative">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-6 pt-3 pb-1 text-xs text-gray-600 bg-white border-b border-gray-100 font-medium">
        <span>10:10</span>
        <div className="flex items-center gap-1.5">
          <span>5G</span>
          <div className="w-5 h-2.5 border border-gray-700 rounded-sm p-0.5 flex items-center">
            <div className="bg-gray-800 w-full h-full rounded-2xs" />
          </div>
        </div>
      </div>

      {/* Main Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        {/* Header Executive Kades Hero */}
        <div className="bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-white px-6 pt-5 pb-6 rounded-b-3xl shadow-md">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                  alt="Avatar Kades"
                  className="w-12 h-12 rounded-full object-cover border-2 border-amber-300 p-0.5"
                />
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-amber-900 rounded-full"></span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h2 className="font-bold text-white text-base">H. Bambang Sugipto</h2>
                  <span className="bg-amber-500/30 text-amber-200 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-400/30">
                    Kepala Desa
                  </span>
                </div>
                <p className="text-xs text-amber-100 font-medium">Pemerintah Desa Sukamaju • Smart Village</p>
              </div>
            </div>

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

          {/* Village Health Executive Summary */}
          <div className="grid grid-cols-4 gap-2 text-center pt-1">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2.5 border border-white/10">
              <p className="text-[10px] text-amber-100">Total Warga</p>
              <p className="text-base font-bold text-white mt-0.5">1.240</p>
              <span className="text-[9px] text-emerald-300">Terdaftar</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2.5 border border-white/10">
              <p className="text-[10px] text-amber-100">Prevalensi Stunting</p>
              <p className="text-base font-bold text-emerald-300 mt-0.5">6,2%</p>
              <span className="text-[9px] text-emerald-200">Target &lt;14%</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2.5 border border-white/10">
              <p className="text-[10px] text-amber-100">Posyandu Aktif</p>
              <p className="text-base font-bold text-white mt-0.5">6</p>
              <span className="text-[9px] text-amber-200">RW 01-06</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2.5 border border-white/10">
              <p className="text-[10px] text-amber-100">Dana PMT Desa</p>
              <p className="text-base font-bold text-cyan-300 mt-0.5">45M</p>
              <span className="text-[9px] text-cyan-200">{isBudgetApproved ? 'Cair 100%' : 'Terserap'}</span>
            </div>
          </div>
        </div>

        {/* Filter RW Area */}
        <div className="px-6 mt-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-gray-900 text-sm">Dashboard Kesehatan Desa</h3>
            <select
              value={selectedRw}
              onChange={(e) => setSelectedRw(e.target.value)}
              className="bg-white border border-gray-200 rounded-lg text-xs font-semibold px-2.5 py-1 text-gray-700 focus:outline-none"
            >
              <option value="ALL">Semua RW (01 - 06)</option>
              <option value="RW01">RW 01 - Dusun Krajan</option>
              <option value="RW02">RW 02 - Dusun Mawar</option>
              <option value="RW03">RW 03 - Dusun Melati</option>
            </select>
          </div>

          {/* Stunting Distribution Widget */}
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-xs text-gray-800 uppercase tracking-wider">
                Sebaran Status Gizi Balita Desa
              </h4>
              <span className="text-[10px] font-bold text-[#00A99D] bg-teal-50 px-2 py-0.5 rounded-full">
                Posyandu AI Monitored
              </span>
            </div>

            {/* Visual Progress Bar Breakdown */}
            <div className="space-y-2 text-xs">
              <div>
                <div className="flex justify-between text-[11px] mb-1 font-semibold">
                  <span className="text-emerald-700">✓ Gizi Baik / Normal</span>
                  <span>42 Balita (87.5%)</span>
                </div>
                <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[87.5%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] mb-1 font-semibold">
                  <span className="text-amber-700">⚠️ Risiko Stunting</span>
                  <span>3 Balita (6.2%)</span>
                </div>
                <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full w-[6.2%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] mb-1 font-semibold">
                  <span className="text-red-700">🔴 Stunting Terindikasi</span>
                  <span>1 Balita (2.0%)</span>
                </div>
                <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-red-500 h-full w-[2%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Kebijakan & Alokasi Bantuan Desa */}
        <div className="px-6 mt-4">
          <div className="bg-gradient-to-br from-slate-900 to-amber-950 text-white rounded-2xl p-5 shadow-lg border border-amber-800/40 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                Rekomendasi Kebijakan Kades
              </span>
              <span className="text-[10px] text-amber-200">Kemenkes & Pemkab</span>
            </div>

            <h4 className="font-bold text-sm text-white">Alokasi PMT Tambahan Protein Hewani RW 02</h4>
            <p className="text-xs text-amber-100 leading-relaxed">
              Berdasarkan pantauan AI Posyandu Mawar, 3 balita di RW 02 terdeteksi riskan stunting. Disarankan pengesahan anggaran desa untuk bantuan telur & susu per minggu.
            </p>

            {isBudgetApproved ? (
              <div className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold p-3 rounded-xl text-xs text-center flex items-center justify-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                ✓ Anggaran PMT Telur & Susu Disetujui Kades
              </div>
            ) : (
              <button
                onClick={() => setShowApprovalModal(true)}
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 shadow-md"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                Setujui Alokasi Dana PMT Tambahan
              </button>
            )}
          </div>
        </div>

        {/* Laporan Kesehatan & Export Data */}
        <div className="px-6 mt-4">
          <button
            onClick={() => navigate('/village-report-print')}
            className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-bold py-3.5 rounded-2xl text-xs shadow-xs transition-all flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 01-2-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Buka & Cetak Laporan Kesehatan Desa (PDF)
          </button>
        </div>
      </div>

      {/* Approval Confirmation Modal */}
      {showApprovalModal && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl p-6 w-full max-w-xs text-center shadow-2xl animate-scale-up">
            <div className="w-14 h-14 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 01-2-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-1">Pengesahan Alokasi PMT</h3>
            <p className="text-xs text-gray-500 mb-4">
              Pengesahan alokasi anggaran dana desa sebesar <strong>Rp 45.000.000</strong> untuk bantuan pangan balita stunting RW 02?
            </p>

            <div className="space-y-2">
              <button
                onClick={() => {
                  setIsBudgetApproved(true);
                  setShowApprovalModal(false);
                }}
                className="w-full bg-amber-700 text-white font-bold py-2.5 rounded-full text-xs hover:bg-amber-800 transition-colors"
              >
                Ya, Sahkan Anggaran PMT
              </button>
              <button
                onClick={() => setShowApprovalModal(false)}
                className="w-full bg-gray-100 text-gray-700 font-semibold py-2.5 rounded-full text-xs hover:bg-gray-200 transition-colors"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KadesDashboard;
