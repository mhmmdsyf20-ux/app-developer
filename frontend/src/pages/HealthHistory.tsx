import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface HealthRecordItem {
  id: string;
  type: 'AI_CONSULTATION' | 'POSYANDU_CHECK' | 'REFERRAL' | 'VACCINATION';
  title: string;
  doctorOrPosyandu: string;
  date: string;
  summary: string;
  statusBadge: string;
  statusBg: string;
}

const mockHistoryData: HealthRecordItem[] = [
  {
    id: '1',
    type: 'AI_CONSULTATION',
    title: 'Skrining Demam & Pusing',
    doctorOrPosyandu: 'Dr. Neha (AI Doctor)',
    date: '30 Sep 2026, 09:42',
    summary: 'Indikasi ISPA Ringan. Diterbitkan draft surat rujukan ke Puskesmas Sukamaju.',
    statusBadge: 'Konsultasi AI',
    statusBg: 'bg-blue-50 text-[#0E56D0] border-blue-200'
  },
  {
    id: '2',
    type: 'POSYANDU_CHECK',
    title: 'Pemeriksaan Antropometri Balita (Ahmad Zaki)',
    doctorOrPosyandu: 'Posyandu Mawar 02',
    date: '28 Aug 2026, 08:30',
    summary: 'BB: 8.8 kg, TB: 74 cm. Status: Indikasi Riskan Stunting. Rekomendasi PMT Telur.',
    statusBadge: 'Posyandu Balita',
    statusBg: 'bg-amber-50 text-amber-800 border-amber-200'
  },
  {
    id: '3',
    type: 'REFERRAL',
    title: 'Surat Rujukan Puskesmas (RUJ-2026-84920)',
    doctorOrPosyandu: 'Puskesmas Pembantu Sukamaju',
    date: '30 Sep 2026, 09:45',
    summary: 'Rujukan pengobatan ISPA & cek lab darah awal.',
    statusBadge: 'Terverifikasi',
    statusBg: 'bg-emerald-50 text-emerald-800 border-emerald-200'
  },
  {
    id: '4',
    type: 'VACCINATION',
    title: 'Imunisasi DPT & Polio Ke-3',
    doctorOrPosyandu: 'Puskesmas Pembantu Sukamaju',
    date: '15 Jul 2026, 09:00',
    summary: 'Pemberian vaksin imunisasi dasar lengkap balita.',
    statusBadge: 'Imunisasi Complete',
    statusBg: 'bg-purple-50 text-purple-800 border-purple-200'
  }
];

const HealthHistory: React.FC = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState<'ALL' | 'AI' | 'POSYANDU' | 'REFERRAL'>('ALL');

  const filteredHistory = mockHistoryData.filter(item => {
    if (selectedFilter === 'AI') return item.type === 'AI_CONSULTATION';
    if (selectedFilter === 'POSYANDU') return item.type === 'POSYANDU_CHECK';
    if (selectedFilter === 'REFERRAL') return item.type === 'REFERRAL';
    return true;
  });

  return (
    <div className="mobile-container flex flex-col bg-slate-50 relative">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-6 pt-3 pb-1 text-xs text-gray-600 bg-white border-b border-gray-100 font-medium">
        <span>09:50</span>
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
          onClick={() => navigate('/dashboard')}
          className="p-2 rounded-full bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div>
          <h1 className="font-bold text-gray-900 text-base leading-tight">Riwayat Rekam Medis</h1>
          <p className="text-xs text-gray-400">Catatan Kesehatan Pasien Budi Santoso</p>
        </div>
      </div>

      {/* Filter Category Chips */}
      <div className="bg-white px-6 py-3 border-b border-gray-100 flex gap-2 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setSelectedFilter('ALL')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
            selectedFilter === 'ALL' ? 'bg-[#0E56D0] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Semua Riwayat ({mockHistoryData.length})
        </button>
        <button
          onClick={() => setSelectedFilter('AI')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
            selectedFilter === 'AI' ? 'bg-[#0E56D0] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          🤖 Chat AI
        </button>
        <button
          onClick={() => setSelectedFilter('POSYANDU')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
            selectedFilter === 'POSYANDU' ? 'bg-[#0E56D0] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          👶 Posyandu
        </button>
        <button
          onClick={() => setSelectedFilter('REFERRAL')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
            selectedFilter === 'REFERRAL' ? 'bg-[#0E56D0] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          📜 Surat Rujukan
        </button>
      </div>

      {/* Timeline List */}
      <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4 pb-24">
        {filteredHistory.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-4 border border-gray-200 shadow-xs space-y-2 hover:shadow-md transition-all relative overflow-hidden"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${item.statusBg}`}>
                  {item.statusBadge}
                </span>
                <h3 className="font-bold text-gray-900 text-xs mt-1.5">{item.title}</h3>
                <p className="text-[10px] text-gray-400 font-medium">{item.doctorOrPosyandu} • {item.date}</p>
              </div>
            </div>

            <p className="text-xs text-gray-600 leading-relaxed bg-slate-50 p-2.5 rounded-xl border border-gray-100">
              {item.summary}
            </p>
          </div>
        ))}
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
        <button className="flex flex-col items-center text-[#0E56D0]">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <span className="text-[10px] font-semibold mt-0.5">Riwayat</span>
        </button>
        <button onClick={() => navigate('/patient-profile')} className="flex flex-col items-center text-gray-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
          <span className="text-[10px] font-semibold mt-0.5">Profil</span>
        </button>
      </div>
    </div>
  );
};

export default HealthHistory;
