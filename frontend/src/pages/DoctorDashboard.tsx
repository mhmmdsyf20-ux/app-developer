import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface DoctorReferralItem {
  id: string;
  referralCode: string;
  patientName: string;
  nik: string;
  age: number;
  aiDiagnosis: string;
  urgency: 'TINGGI' | 'SEDANG' | 'NORMAL';
  date: string;
  status: 'PENDING_DOCTOR' | 'ACCEPTED' | 'REFERRED_TO_RSUD';
}

const mockDoctorReferrals: DoctorReferralItem[] = [
  {
    id: '1',
    referralCode: 'RUJ-2026-84920',
    patientName: 'Budi Santoso',
    nik: '3302192804920003',
    age: 34,
    aiDiagnosis: 'Indikasi Infeksi Saluran Pernapasan Akut (ISPA) Mild & Febris 2 Hari',
    urgency: 'SEDANG',
    date: '30 Sep 2026, 09:42',
    status: 'PENDING_DOCTOR'
  },
  {
    id: '2',
    referralCode: 'RUJ-2026-99210',
    patientName: 'Siti Rahmawati',
    nik: '3302195201880001',
    age: 58,
    aiDiagnosis: 'Krisistis Hipertensi (TD 170/100 mmHg) & Suspek Penyakit Jantung Koroner',
    urgency: 'TINGGI',
    date: '30 Sep 2026, 08:15',
    status: 'PENDING_DOCTOR'
  },
  {
    id: '3',
    referralCode: 'RUJ-2026-11029',
    patientName: 'Mbah Wongso',
    nik: '3302191504590002',
    age: 67,
    aiDiagnosis: 'Diabetes Mellitus Tipe 2 (GDS 280 mg/dL) - Perlu Penyesuaian Dosis Dosis Insulin',
    urgency: 'SEDANG',
    date: '29 Sep 2026, 16:30',
    status: 'ACCEPTED'
  }
];

const DoctorDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [referrals, setReferrals] = useState<DoctorReferralItem[]>(mockDoctorReferrals);
  const [selectedTab, setSelectedTab] = useState<'REFERRALS' | 'PATIENTS' | 'PRESCRIPTION'>('REFERRALS');
  const [selectedReferralModal, setSelectedReferralModal] = useState<DoctorReferralItem | null>(null);
  const [prescriptionForm, setPrescriptionForm] = useState({ patientName: 'Budi Santoso', diagnosis: '', medicine: '', notes: '' });
  const [showPrescriptionSuccessModal, setShowPrescriptionSuccessModal] = useState(false);

  const handleAcceptReferral = (id: string) => {
    setReferrals(prev => prev.map(item => item.id === id ? { ...item, status: 'ACCEPTED' } : item));
    setSelectedReferralModal(null);
  };

  const handleEscalateToRSUD = (id: string) => {
    setReferrals(prev => prev.map(item => item.id === id ? { ...item, status: 'REFERRED_TO_RSUD' } : item));
    setSelectedReferralModal(null);
  };

  const handleSendPrescription = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPrescriptionSuccessModal(true);
  };

  return (
    <div className="mobile-container flex flex-col bg-slate-50 relative">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-6 pt-3 pb-1 text-xs text-gray-600 bg-white border-b border-gray-100 font-medium">
        <span>09:55</span>
        <div className="flex items-center gap-1.5">
          <span>5G</span>
          <div className="w-5 h-2.5 border border-gray-700 rounded-sm p-0.5 flex items-center">
            <div className="bg-gray-800 w-full h-full rounded-2xs" />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto pb-24">
        {/* Header Doctor Profile Hero */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 text-white px-6 pt-5 pb-6 rounded-b-3xl shadow-md">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=150&q=80"
                  alt="Avatar Dokter"
                  className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400 p-0.5"
                />
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-slate-900 rounded-full"></span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h2 className="font-bold text-white text-base">dr. Farhan Hidayat, Sp.PD</h2>
                </div>
                <p className="text-xs text-cyan-200 font-medium">Puskesmas Sukamaju • SIP: 449/1920/2026</p>
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

          {/* Quick Metrics */}
          <div className="grid grid-cols-4 gap-2 text-center pt-1">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2.5 border border-white/10">
              <p className="text-[10px] text-cyan-200">Pasien Hari Ini</p>
              <p className="text-base font-bold text-white mt-0.5">14</p>
              <span className="text-[9px] text-emerald-300">Puskesmas</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2.5 border border-white/10">
              <p className="text-[10px] text-cyan-200">Rujukan AI</p>
              <p className="text-base font-bold text-amber-300 mt-0.5">5</p>
              <span className="text-[9px] text-amber-200">Masuk</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2.5 border border-white/10">
              <p className="text-[10px] text-cyan-200">Antrean Cek</p>
              <p className="text-base font-bold text-white mt-0.5">3</p>
              <span className="text-[9px] text-cyan-300">Menunggu</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2.5 border border-white/10">
              <p className="text-[10px] text-cyan-200">Rujuk RSUD</p>
              <p className="text-base font-bold text-purple-300 mt-0.5">2</p>
              <span className="text-[9px] text-purple-200">Disetujui</span>
            </div>
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <div className="px-6 mt-4 flex gap-2 border-b border-gray-200 pb-3">
          <button
            onClick={() => setSelectedTab('REFERRALS')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors ${
              selectedTab === 'REFERRALS' ? 'bg-slate-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            📋 Rujukan AI Masuk ({referrals.filter(r => r.status === 'PENDING_DOCTOR').length})
          </button>
          <button
            onClick={() => setSelectedTab('PRESCRIPTION')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors ${
              selectedTab === 'PRESCRIPTION' ? 'bg-slate-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            💊 Resep & E-Prescription
          </button>
        </div>

        {/* Tab 1: Rujukan AI Masuk */}
        {selectedTab === 'REFERRALS' && (
          <div className="px-6 py-4 space-y-4">
            <h3 className="font-bold text-gray-900 text-sm">Daftar Rujukan Pasien AI dari Kader/Posyandu</h3>

            {referrals.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-5 border border-gray-200 shadow-xs space-y-3 hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-mono font-bold text-xs text-[#0E56D0] bg-blue-50 px-2.5 py-1 rounded-lg">
                    {item.referralCode}
                  </span>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${
                    item.urgency === 'TINGGI' 
                      ? 'bg-red-50 text-red-700 border-red-200 animate-pulse' 
                      : 'bg-amber-50 text-amber-700 border-amber-200'
                  }`}>
                    Urgency: {item.urgency}
                  </span>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{item.patientName} ({item.age} Thn)</h4>
                  <p className="text-[11px] text-gray-400">NIK: {item.nik} • {item.date}</p>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-gray-100 text-xs">
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Diagnosis Awal AI:</p>
                  <p className="font-semibold text-gray-800 mt-0.5">{item.aiDiagnosis}</p>
                </div>

                <div className="pt-1 flex gap-2">
                  {item.status === 'PENDING_DOCTOR' ? (
                    <button
                      onClick={() => setSelectedReferralModal(item)}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 rounded-xl text-xs shadow-xs transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Evaluasi & Tangani Pasien</span>
                      <svg className="w-4 h-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  ) : item.status === 'ACCEPTED' ? (
                    <span className="w-full text-center bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold py-2 rounded-xl text-xs">
                      ✓ Dijadwalkan Konsultasi Puskesmas
                    </span>
                  ) : (
                    <span className="w-full text-center bg-purple-50 text-purple-700 border border-purple-200 font-bold py-2 rounded-xl text-xs">
                      ➔ Dirujuk Lanjutan ke RSUD
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Resep Digital */}
        {selectedTab === 'PRESCRIPTION' && (
          <div className="px-6 py-4">
            <h3 className="font-bold text-gray-900 text-sm mb-3">Buat E-Prescription & Resep Medis Digital</h3>

            <form onSubmit={handleSendPrescription} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Nama Pasien / NIK</label>
                <input
                  type="text"
                  value={prescriptionForm.patientName}
                  onChange={(e) => setPrescriptionForm({...prescriptionForm, patientName: e.target.value})}
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl p-3 text-xs font-bold text-gray-900 focus:outline-none focus:border-[#0E56D0]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Diagnosis Final Dokter</label>
                <input
                  type="text"
                  placeholder="Misal: ISPA Akut / Faringitis"
                  value={prescriptionForm.diagnosis}
                  onChange={(e) => setPrescriptionForm({...prescriptionForm, diagnosis: e.target.value})}
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl p-3 text-xs text-gray-900 focus:outline-none focus:border-[#0E56D0]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Daftar Obat & Dosis (Resep E-Apotek)</label>
                <textarea
                  rows={3}
                  placeholder="1. Parasetamol 500mg (3x1 sesudah makan)&#10;2. Amoxicillin 500mg (3x1 habiskan)&#10;3. Vitamin C 500mg (1x1)"
                  value={prescriptionForm.medicine}
                  onChange={(e) => setPrescriptionForm({...prescriptionForm, medicine: e.target.value})}
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl p-3 text-xs text-gray-900 focus:outline-none focus:border-[#0E56D0]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0E56D0] hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Terbitkan Resep Digital & Kirim ke WhatsApp Pasien</span>
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Modal Evaluasi Dokter */}
      {selectedReferralModal && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl p-6 w-full max-w-xs text-center shadow-2xl animate-scale-up">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-1">Evaluasi Dokter Puskesmas</h3>
            <p className="text-xs text-gray-500 mb-4">
              Pilih tindakan medis untuk pasien <strong>{selectedReferralModal.patientName}</strong> ({selectedReferralModal.referralCode}).
            </p>

            <div className="space-y-2">
              <button
                onClick={() => handleAcceptReferral(selectedReferralModal.id)}
                className="w-full bg-[#0E56D0] text-white font-bold py-2.5 rounded-full text-xs hover:bg-blue-700 transition-colors"
              >
                ✓ Terima & Periksa di Puskesmas
              </button>
              <button
                onClick={() => handleEscalateToRSUD(selectedReferralModal.id)}
                className="w-full bg-purple-600 text-white font-bold py-2.5 rounded-full text-xs hover:bg-purple-700 transition-colors"
              >
                ➔ Rujuk Lanjutan ke RSUD
              </button>
              <button
                onClick={() => setSelectedReferralModal(null)}
                className="w-full bg-gray-100 text-gray-700 font-semibold py-2.5 rounded-full text-xs hover:bg-gray-200 transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Prescription Success Modal */}
      {showPrescriptionSuccessModal && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl p-6 w-full max-w-xs text-center shadow-2xl">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-1">Resep Digital Diterbitkan!</h3>
            <p className="text-xs text-gray-500 mb-4">Resep obat telah dikirimkan ke akun Pasien & Apotek Puskesmas Sukamaju.</p>
            <button
              onClick={() => setShowPrescriptionSuccessModal(false)}
              className="w-full bg-[#0E56D0] text-white font-bold py-2.5 rounded-full text-xs"
            >
              Selesai
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorDashboard;
