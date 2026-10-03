import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

interface LansiaOption {
  id: string;
  name: string;
  age: number;
  nik: string;
}

const mockLansiaList: LansiaOption[] = [
  { id: '1', name: 'Siti Rahmawati', age: 58, nik: '3302195201880001' },
  { id: '2', name: 'Mbah Wongso', age: 67, nik: '3302191504590002' },
  { id: '3', name: 'Bapak Hartono', age: 62, nik: '3302190812640005' },
];

const LansiaRecording: React.FC = () => {
  const navigate = useNavigate();
  const [selectedLansiaId, setSelectedLansiaId] = useState<string>('1');
  const [systolicBp, setSystolicBp] = useState<string>('140');
  const [diastolicBp, setDiastolicBp] = useState<string>('90');
  const [bloodGlucose, setBloodGlucose] = useState<string>('165');
  const [cholesterol, setCholesterol] = useState<string>('210');
  const [uricAcid, setUricAcid] = useState<string>('6.5');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const selectedLansia = mockLansiaList.find(l => l.id === selectedLansiaId) || mockLansiaList[0];

  // Dynamic Risk Analysis
  const riskAnalysis = useMemo(() => {
    const sys = parseFloat(systolicBp) || 0;
    const bg = parseFloat(bloodGlucose) || 0;

    if (sys >= 140 || bg >= 200) {
      return {
        status: 'Perhatian: Hipertensi / Gula Tinggi',
        color: 'bg-amber-100 text-amber-800 border-amber-300',
        recommendation: 'Tekanan darah atau gula darah di atas batas normal. Sarankan diet rendah garam & konsultasi rutin obat Prolanis.'
      };
    } else {
      return {
        status: 'Status Kesehatan Stabil',
        color: 'bg-emerald-100 text-emerald-800 border-emerald-300',
        recommendation: 'Hasil pemeriksaan dalam batas aman. Pertahankan gaya hidup sehat & ikuti senam Prolanis.'
      };
    }
  }, [systolicBp, bloodGlucose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccessModal(true);
  };

  return (
    <div className="mobile-container flex flex-col bg-slate-50 relative">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-6 pt-3 pb-1 text-xs text-gray-600 bg-white border-b border-gray-100 font-medium">
        <span>09:52</span>
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
          <h1 className="font-bold text-gray-900 text-base leading-tight">Pencatatan Lansia & Prolanis</h1>
          <p className="text-xs text-gray-400">Pemeriksaan Penyakit Tidak Menular (PTM)</p>
        </div>
      </div>

      {/* Form Content */}
      <div className="flex-1 overflow-y-auto px-6 py-5 pb-28">
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Select Lansia */}
          <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-xs">
            <label className="block text-xs font-bold text-gray-700 mb-1.5">PILIH PESERTA LANSIA</label>
            <select
              value={selectedLansiaId}
              onChange={(e) => setSelectedLansiaId(e.target.value)}
              className="w-full bg-slate-50 border border-gray-200 rounded-xl p-3 text-xs font-semibold text-gray-800 focus:outline-none focus:border-[#0E56D0]"
            >
              {mockLansiaList.map((lansia) => (
                <option key={lansia.id} value={lansia.id}>
                  {lansia.name} ({lansia.age} Thn) — NIK: {lansia.nik}
                </option>
              ))}
            </select>
          </div>

          {/* Vitals Inputs */}
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-4">
            <h3 className="font-bold text-gray-900 text-xs tracking-wider uppercase text-[#0E56D0]">
              Hasil Cek Vital & Laboratorium Sederhana
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Tensi Sistolik</label>
                <div className="relative">
                  <input
                    type="number"
                    value={systolicBp}
                    onChange={(e) => setSystolicBp(e.target.value)}
                    className="w-full bg-slate-50 border border-gray-200 rounded-xl p-3 text-sm font-bold text-gray-900 focus:outline-none focus:border-[#0E56D0]"
                    required
                  />
                  <span className="absolute right-3 top-3 text-[10px] text-gray-400 font-semibold">mmHg</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Tensi Diastolik</label>
                <div className="relative">
                  <input
                    type="number"
                    value={diastolicBp}
                    onChange={(e) => setDiastolicBp(e.target.value)}
                    className="w-full bg-slate-50 border border-gray-200 rounded-xl p-3 text-sm font-bold text-gray-900 focus:outline-none focus:border-[#0E56D0]"
                    required
                  />
                  <span className="absolute right-3 top-3 text-[10px] text-gray-400 font-semibold">mmHg</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Gula Darah Sewaktu (GDS)</label>
              <div className="relative">
                <input
                  type="number"
                  value={bloodGlucose}
                  onChange={(e) => setBloodGlucose(e.target.value)}
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl p-3 text-sm font-bold text-gray-900 focus:outline-none focus:border-[#0E56D0]"
                  required
                />
                <span className="absolute right-4 top-3 text-xs text-gray-400 font-semibold">mg/dL</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Kolesterol</label>
                <div className="relative">
                  <input
                    type="number"
                    value={cholesterol}
                    onChange={(e) => setCholesterol(e.target.value)}
                    className="w-full bg-slate-50 border border-gray-200 rounded-xl p-3 text-sm font-bold text-gray-900 focus:outline-none focus:border-[#0E56D0]"
                  />
                  <span className="absolute right-3 top-3 text-[10px] text-gray-400 font-semibold">mg/dL</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Asam Urat</label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.1"
                    value={uricAcid}
                    onChange={(e) => setUricAcid(e.target.value)}
                    className="w-full bg-slate-50 border border-gray-200 rounded-xl p-3 text-sm font-bold text-gray-900 focus:outline-none focus:border-[#0E56D0]"
                  />
                  <span className="absolute right-3 top-3 text-[10px] text-gray-400 font-semibold">mg/dL</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Analysis Card */}
          <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-2xl p-5 shadow-lg border border-indigo-700">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider">
                AI Health Assessment Prolanis
              </span>
              <span className="text-[10px] text-indigo-200">PTM Risk Level</span>
            </div>

            <div className="mt-2 mb-2">
              <div className={`inline-block px-3 py-1 rounded-full font-bold text-xs border ${riskAnalysis.color}`}>
                {riskAnalysis.status}
              </div>
            </div>

            <p className="text-xs text-indigo-100 leading-relaxed bg-white/5 p-3 rounded-xl border border-white/10 mt-3">
              💡 <strong>Rekomendasi Kader:</strong> {riskAnalysis.recommendation}
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#0E56D0] hover:bg-blue-700 text-white font-bold py-4 rounded-full text-sm shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2 mt-4"
          >
            <span>Simpan Catatan Kesehatan Lansia</span>
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
            <div className="w-14 h-14 bg-blue-100 text-[#0E56D0] rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-1">Data Tersimpan!</h3>
            <p className="text-xs text-gray-500 mb-4">
              Catatan vital Lansia <strong>{selectedLansia.name}</strong> berhasil direkam di sistem Prolanis.
            </p>
            <button
              onClick={() => {
                setShowSuccessModal(false);
                navigate('/kader-dashboard');
              }}
              className="w-full bg-[#0E56D0] text-white font-bold py-2.5 rounded-full text-xs hover:bg-blue-700 transition-colors"
            >
              Kembali ke Beranda Kader
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LansiaRecording;
