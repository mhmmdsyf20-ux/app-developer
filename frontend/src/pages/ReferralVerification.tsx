import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ReferralItem {
  id: string;
  code: string;
  patientName: string;
  nik: string;
  diagnosis: string;
  facility: string;
  date: string;
  status: 'PENDING' | 'APPROVED';
}

const mockReferrals: ReferralItem[] = [
  {
    id: '1',
    code: 'RUJ-2026-84920',
    patientName: 'Budi Santoso',
    nik: '3302192804920003',
    diagnosis: 'Indikasi Infeksi Saluran Pernapasan Akut (ISPA) / Demam 2 Hari',
    facility: 'Puskesmas Pembantu Sukamaju',
    date: '30 Sep 2026, 09:42',
    status: 'PENDING'
  },
  {
    id: '2',
    code: 'RUJ-2026-19204',
    patientName: 'Siti Rahmawati',
    nik: '3302195201880001',
    diagnosis: 'Hipertensi Grade 1 (TD 150/95 mmHg) - Kontrol Prolanis',
    facility: 'Puskesmas Kecamatan Sukamaju',
    date: '29 Sep 2026, 14:15',
    status: 'APPROVED'
  }
];

const ReferralVerification: React.FC = () => {
  const navigate = useNavigate();
  const [referrals, setReferrals] = useState<ReferralItem[]>(mockReferrals);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'ALL' | 'PENDING' | 'APPROVED'>('ALL');
  const [selectedReferralModal, setSelectedReferralModal] = useState<ReferralItem | null>(null);

  const filteredReferrals = referrals.filter(item => {
    const matchesSearch = item.patientName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.nik.includes(searchQuery);
    const matchesFilter = filterStatus === 'ALL' || item.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const handleApprove = (id: string) => {
    setReferrals(prev => prev.map(item => item.id === id ? { ...item, status: 'APPROVED' } : item));
    setSelectedReferralModal(null);
  };

  return (
    <div className="mobile-container flex flex-col bg-slate-50 relative">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-6 pt-3 pb-1 text-xs text-gray-600 bg-white border-b border-gray-100 font-medium">
        <span>09:47</span>
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
          onClick={() => navigate('/kader-dashboard')}
          className="p-2 rounded-full bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div>
          <h1 className="font-bold text-gray-900 text-base leading-tight">Verifikasi Surat Rujukan AI</h1>
          <p className="text-xs text-gray-400">Posyandu & Puskesmas Sukamaju</p>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white px-6 py-3 border-b border-gray-100 space-y-3">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari Kode Rujukan / Nama Pasien / NIK..."
            className="w-full bg-slate-50 border border-gray-200 rounded-full pl-9 pr-4 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#0E56D0]"
          />
          <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setFilterStatus('ALL')}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
              filterStatus === 'ALL' ? 'bg-[#0E56D0] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Semua ({referrals.length})
          </button>
          <button
            onClick={() => setFilterStatus('PENDING')}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
              filterStatus === 'PENDING' ? 'bg-[#0E56D0] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Perlu Verifikasi ({referrals.filter(r => r.status === 'PENDING').length})
          </button>
          <button
            onClick={() => setFilterStatus('APPROVED')}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
              filterStatus === 'APPROVED' ? 'bg-[#0E56D0] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Disetujui ({referrals.filter(r => r.status === 'APPROVED').length})
          </button>
        </div>
      </div>

      {/* Referral Cards List */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 pb-24">
        {filteredReferrals.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            <svg className="w-12 h-12 mx-auto mb-2 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="text-xs">Tidak ada data rujukan yang ditemukan.</p>
          </div>
        ) : (
          filteredReferrals.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-5 border border-gray-200 shadow-xs space-y-3 hover:shadow-md transition-all"
            >
              <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span className="font-mono font-bold text-xs text-[#0E56D0] bg-blue-50 px-2.5 py-1 rounded-lg">
                  {item.code}
                </span>
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${
                  item.status === 'PENDING' 
                    ? 'bg-amber-50 text-amber-700 border-amber-200' 
                    : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                }`}>
                  {item.status === 'PENDING' ? '⏳ Menunggu Verifikasi' : '✓ Disetujui Puskesmas'}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-sm">{item.patientName}</h3>
                <p className="text-[11px] text-gray-400">NIK: {item.nik} • {item.date}</p>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-gray-100 text-xs space-y-1">
                <p className="text-[10px] text-gray-400 font-semibold uppercase">Diagnosis AI:</p>
                <p className="font-semibold text-gray-800">{item.diagnosis}</p>
                <p className="text-[10px] text-gray-500 pt-1">📍 Tujuan: {item.facility}</p>
              </div>

              <div className="pt-1 flex gap-2">
                {item.status === 'PENDING' ? (
                  <button
                    onClick={() => setSelectedReferralModal(item)}
                    className="w-full bg-[#0E56D0] hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl text-xs shadow-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Verifikasi Rujukan
                  </button>
                ) : (
                  <button
                    onClick={() => navigate(`/referral-print?code=${item.code}&name=${encodeURIComponent(item.patientName)}&nik=${item.nik}&diagnosis=${encodeURIComponent(item.diagnosis)}&facility=${encodeURIComponent(item.facility)}`)}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    Cetak Surat Rujukan (PDF)
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Approve Modal Confirmation */}
      {selectedReferralModal && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl p-6 w-full max-w-xs text-center shadow-2xl animate-scale-up">
            <div className="w-14 h-14 bg-blue-100 text-[#0E56D0] rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-1">Konfirmasi Verifikasi</h3>
            <p className="text-xs text-gray-500 mb-4">
              Setujui surat rujukan <strong>{selectedReferralModal.code}</strong> atas nama <strong>{selectedReferralModal.patientName}</strong>?
            </p>
            <div className="space-y-2">
              <button
                onClick={() => handleApprove(selectedReferralModal.id)}
                className="w-full bg-[#0E56D0] text-white font-bold py-2.5 rounded-full text-xs hover:bg-blue-700 transition-colors"
              >
                Ya, Setujui & Tanda Tangan
              </button>
              <button
                onClick={() => setSelectedReferralModal(null)}
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

export default ReferralVerification;
