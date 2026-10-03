import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface AIPersona {
  id: string;
  name: string;
  role: string;
  avatarBg: string;
  badge: string;
  badgeBg: string;
  badgeText: string;
  description: string;
  tags: string[];
  gradient: string;
  borderActive: string;
}

export const personasList: AIPersona[] = [
  {
    id: 'dr-neha',
    name: 'Dr. Neha',
    role: 'Dokter Umum Virtual',
    avatarBg: 'bg-blue-600',
    badge: 'Rekomendasi Utama',
    badgeBg: 'bg-blue-50 border-blue-100',
    badgeText: 'text-[#0E56D0]',
    description: 'Dokter umum virtual untuk pemeriksaan awal gejala, flu, pusing, luka ringan, dan rekomendasi pertolongan pertama.',
    tags: ['Demam & Flu', 'Pusing & Nyeri', 'Pertolongan Pertama'],
    gradient: 'from-blue-500/10 to-teal-500/5',
    borderActive: 'border-[#0E56D0]'
  },
  {
    id: 'dr-maya',
    name: 'Dr. Maya',
    role: 'Spesialis Ibu & Anak (KIA)',
    avatarBg: 'bg-rose-500',
    badge: 'KIA & Tumbuh Kembang',
    badgeBg: 'bg-rose-50 border-rose-100',
    badgeText: 'text-rose-600',
    description: 'Pendampingan kehamilan, perawatan bayi baru lahir, keluhan ASI, serta jadwal imunisasi balita.',
    tags: ['Kehamilan', 'Bayi & Balita', 'Imunisasi'],
    gradient: 'from-rose-500/10 to-pink-500/5',
    borderActive: 'border-rose-500'
  },
  {
    id: 'nutribot',
    name: 'NutriBot',
    role: 'Konsultan Gizi & Anti Stunting',
    avatarBg: 'bg-[#00A99D]',
    badge: 'Program Bebas Stunting',
    badgeBg: 'bg-teal-50 border-teal-100',
    badgeText: 'text-[#00A99D]',
    description: 'Analisis gizi makanan keluarga, panduan MPASI, serta pencegahan dini risiko stunting pada balita.',
    tags: ['MPASI Sehat', 'Cegah Stunting', 'Hitung Gizi'],
    gradient: 'from-teal-500/10 to-emerald-500/5',
    borderActive: 'border-[#00A99D]'
  },
  {
    id: 'dr-aris',
    name: 'Dr. Aris',
    role: 'Kesehatan Mental & Konseling',
    avatarBg: 'bg-purple-600',
    badge: 'Privasi Terjamin',
    badgeBg: 'bg-purple-50 border-purple-100',
    badgeText: 'text-purple-600',
    description: 'Layanan curhat medis aman untuk mengatasi stres, kecemasan, gangguan tidur, dan kelelahan mental.',
    tags: ['Kelola Stres', 'Kualitas Tidur', 'Konseling'],
    gradient: 'from-purple-500/10 to-indigo-500/5',
    borderActive: 'border-purple-600'
  },
  {
    id: 'dr-seno',
    name: 'Dr. Seno',
    role: 'Dokter Lansia & Prolanis',
    avatarBg: 'bg-amber-600',
    badge: 'Prolanis Puskesmas',
    badgeBg: 'bg-amber-50 border-amber-100',
    badgeText: 'text-amber-700',
    description: 'Panduan medis khusus untuk diabetes, tekanan darah tinggi (hipertensi), asam urat, dan kebugaran usia lanjut.',
    tags: ['Hipertensi', 'Diabetes', 'Kontrol Rutin'],
    gradient: 'from-amber-500/10 to-orange-500/5',
    borderActive: 'border-amber-600'
  }
];

const SelectPersona: React.FC = () => {
  const navigate = useNavigate();
  const [selectedPersonaId, setSelectedPersonaId] = useState<string>('dr-neha');

  const selectedPersona = personasList.find(p => p.id === selectedPersonaId) || personasList[0];

  const handleStartChat = () => {
    navigate(`/chat?persona=${selectedPersona.id}`);
  };

  return (
    <div className="mobile-container flex flex-col bg-slate-50 relative">
      {/* Status bar */}
      <div className="flex justify-between items-center px-6 pt-3 pb-1 text-xs text-gray-600 bg-white border-b border-gray-100 font-medium">
        <span>09:41</span>
        <div className="flex items-center gap-1.5">
          <span>5G</span>
          <div className="w-5 h-2.5 border border-gray-700 rounded-sm p-0.5 flex items-center">
            <div className="bg-gray-800 w-full h-full rounded-2xs" />
          </div>
        </div>
      </div>

      {/* Header Bar */}
      <div className="bg-white px-6 py-4 border-b border-gray-100 flex items-center gap-3">
        <button 
          onClick={() => navigate('/dashboard')}
          className="p-2 rounded-full bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div>
          <h1 className="font-bold text-gray-900 text-lg leading-tight">Pilih Asisten AI</h1>
          <p className="text-xs text-gray-400">Pilih persona sesuai keluhan kesehatan Anda</p>
        </div>
      </div>

      {/* Persona Cards List */}
      <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4 pb-28">
        {personasList.map((persona) => {
          const isSelected = persona.id === selectedPersonaId;
          return (
            <div
              key={persona.id}
              onClick={() => setSelectedPersonaId(persona.id)}
              className={`cursor-pointer rounded-3xl p-5 border-2 transition-all relative overflow-hidden bg-white shadow-xs ${
                isSelected ? `${persona.borderActive} shadow-md` : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              {/* Background accent */}
              <div className={`absolute inset-0 bg-gradient-to-r ${persona.gradient} pointer-events-none opacity-60`} />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl ${persona.avatarBg} text-white font-bold flex items-center justify-center text-base shadow-sm shrink-0`}>
                      {persona.name.substring(0, 4)}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base flex items-center gap-1.5">
                        {persona.name}
                        {isSelected && (
                          <span className="w-4 h-4 bg-[#0E56D0] text-white rounded-full flex items-center justify-center text-[9px] font-bold">
                            ✓
                          </span>
                        )}
                      </h3>
                      <p className="text-xs font-semibold text-gray-500">{persona.role}</p>
                    </div>
                  </div>

                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${persona.badgeBg} ${persona.badgeText}`}>
                    {persona.badge}
                  </span>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  {persona.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {persona.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-600 text-[10px] font-medium px-2 py-0.5 rounded-md">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Bottom CTA */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-200 p-5 shadow-2xl">
        <button
          onClick={handleStartChat}
          className="w-full bg-[#0E56D0] hover:bg-blue-700 text-white font-bold py-4 rounded-full text-sm shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
        >
          <span>Konsultasi dengan {selectedPersona.name}</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SelectPersona;
