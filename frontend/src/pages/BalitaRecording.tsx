import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

interface BalitaOption {
  id: string;
  name: string;
  ageMonth: number;
  gender: 'L' | 'P';
  parentName: string;
}

const mockBalitaList: BalitaOption[] = [
  { id: '1', name: 'Ahmad Zaki', ageMonth: 18, gender: 'L', parentName: 'Budi Santoso' },
  { id: '2', name: 'Anisa Putri', ageMonth: 24, gender: 'P', parentName: 'Rina Wijaya' },
  { id: '3', name: 'Rizky Febrian', ageMonth: 12, gender: 'L', parentName: 'Hendra Suherman' },
  { id: '4', name: 'Siti Humaira', ageMonth: 6, gender: 'P', parentName: 'Dewi Lestari' },
];

const BalitaRecording: React.FC = () => {
  const navigate = useNavigate();
  const [selectedBalitaId, setSelectedBalitaId] = useState<string>('1');
  const [weight, setWeight] = useState<string>('8.8');
  const [height, setHeight] = useState<string>('74');
  const [headCircumference, setHeadCircumference] = useState<string>('45');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const selectedBalita = mockBalitaList.find(b => b.id === selectedBalitaId) || mockBalitaList[0];

  // Dynamic Stunting Detector Math
  const nutritionalAnalysis = useMemo(() => {
    const w = parseFloat(weight) || 0;
    const h = parseFloat(height) || 0;
    const age = selectedBalita.ageMonth;

    // Standard baseline heuristic for demo (height-for-age)
    // Average expected height for 18mo ~ 82cm. If 74cm -> Risk Stunting
    const expectedHeight = 50 + age * 1.8;
    const heightDiff = h - expectedHeight;

    if (h === 0 || w === 0) {
      return { status: 'Lengkapi Data', color: 'bg-gray-100 text-gray-600 border-gray-200', recommendation: 'Masukkan nilai tinggi dan berat badan balita.' };
    }

    if (heightDiff < -6) {
      return {
        status: 'Indikasi Riskan Stunting',
        color: 'bg-amber-100 text-amber-800 border-amber-300',
        recommendation: 'TB di bawah standar usianya. Disarankan pemberian PMT Protein Hewani (Telur/Ikan) & Konsultasi ke Puskesmas.'
      };
    } else if (heightDiff < -10) {
      return {
        status: 'Stunting (Sangat Pendek)',
        color: 'bg-red-100 text-red-800 border-red-300',
        recommendation: 'Tingkat pertumbuhan sangat lambat. Segera koordinasi dengan Dokter Puskesmas & Tim Pendamping Keluarga.'
      };
    } else {
      return {
        status: 'Gizi Baik (Tumbuh Normal)',
        color: 'bg-emerald-100 text-emerald-800 border-emerald-300',
        recommendation: 'Pertumbuhan fisik balita sesuai dengan grafik WHO. Pertahankan pola makan bergizi seimbang.'
      };
    }
  }, [weight, height, selectedBalita]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccessModal(true);
  };

  return (
    <div className="mobile-container flex flex-col bg-slate-50 relative">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-6 pt-3 pb-1 text-xs text-gray-600 bg-white border-b border-gray-100 font-medium">
        <span>09:46</span>
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
          <h1 className="font-bold text-gray-900 text-base leading-tight">Pencatatan Antropometri Balita</h1>
          <p className="text-xs text-gray-400">Pemeriksaan Posyandu Mawar • Desa Sukamaju</p>
        </div>
      </div>

      {/* Form Content */}
      <div className="flex-1 overflow-y-auto px-6 py-5 pb-28">
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Select Balita */}
          <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-xs">
            <label className="block text-xs font-bold text-gray-700 mb-1.5">PILIH BALITA</label>
            <select
              value={selectedBalitaId}
              onChange={(e) => setSelectedBalitaId(e.target.value)}
              className="w-full bg-slate-50 border border-gray-200 rounded-xl p-3 text-xs font-semibold text-gray-800 focus:outline-none focus:border-[#00A99D]"
            >
              {mockBalitaList.map((balita) => (
                <option key={balita.id} value={balita.id}>
                  {balita.name} ({balita.ageMonth} Bln) — Ortu: {balita.parentName}
                </option>
              ))}
            </select>
          </div>

          {/* Antropometri Inputs */}
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-4">
            <h3 className="font-bold text-gray-900 text-xs tracking-wider uppercase text-[#00A99D]">
              Hasil Pengukuran Posyandu
            </h3>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Berat Badan (kg)</label>
              <div className="relative">
                <input
                  type="number"
                  step="0.1"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl p-3 text-sm font-bold text-gray-900 focus:outline-none focus:border-[#00A99D]"
                  required
                />
                <span className="absolute right-4 top-3 text-xs text-gray-400 font-semibold">kg</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Tinggi / Panjang Badan (cm)</label>
              <div className="relative">
                <input
                  type="number"
                  step="0.1"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl p-3 text-sm font-bold text-gray-900 focus:outline-none focus:border-[#00A99D]"
                  required
                />
                <span className="absolute right-4 top-3 text-xs text-gray-400 font-semibold">cm</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Lingkar Kepala (cm)</label>
              <div className="relative">
                <input
                  type="number"
                  step="0.1"
                  value={headCircumference}
                  onChange={(e) => setHeadCircumference(e.target.value)}
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl p-3 text-sm font-bold text-gray-900 focus:outline-none focus:border-[#00A99D]"
                  required
                />
                <span className="absolute right-4 top-3 text-xs text-gray-400 font-semibold">cm</span>
              </div>
            </div>
          </div>

          {/* Automatic Stunting Detector Card */}
          <div className="bg-gradient-to-br from-slate-900 to-teal-950 text-white rounded-2xl p-5 shadow-lg border border-teal-800/50">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                AI Stunting Smart Detector
              </span>
              <span className="text-[10px] text-teal-200">Standar WHO-Kemenkes</span>
            </div>

            <div className="mt-3 mb-2">
              <p className="text-[10px] text-teal-200">Status Gizi Balita Saat Ini:</p>
              <div className={`mt-1 inline-block px-3 py-1 rounded-full font-bold text-xs border ${nutritionalAnalysis.color}`}>
                {nutritionalAnalysis.status}
              </div>
            </div>

            <p className="text-xs text-teal-100 leading-relaxed bg-white/5 p-3 rounded-xl border border-white/10 mt-3">
              💡 <strong>Rekomendasi Kader:</strong> {nutritionalAnalysis.recommendation}
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#00A99D] hover:bg-teal-600 text-white font-bold py-4 rounded-full text-sm shadow-lg shadow-teal-500/20 transition-all flex items-center justify-center gap-2 mt-4"
          >
            <span>Simpan Catatan Antropometri</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </form>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl p-6 w-full max-w-xs text-center shadow-2xl animate-scale-up">
            <div className="w-14 h-14 bg-teal-100 text-[#00A99D] rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-1">Pencatatan Berhasil!</h3>
            <p className="text-xs text-gray-500 mb-4">
              Data antropometri balita <strong>{selectedBalita.name}</strong> telah tersimpan di server Posyandu Mawar Desa.
            </p>
            <button
              onClick={() => {
                setShowSuccessModal(false);
                navigate('/kader-dashboard');
              }}
              className="w-full bg-[#00A99D] text-white font-bold py-2.5 rounded-full text-xs hover:bg-teal-600 transition-colors"
            >
              Kembali ke Beranda Kader
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BalitaRecording;
