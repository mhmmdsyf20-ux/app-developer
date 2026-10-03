import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    id: 1,
    isFirst: true,
  },
  {
    id: 2,
    image: '/slide2.png',
    title: 'Skrining Kesehatan\nBerbasis AI',
    desc: 'Lakukan pemeriksaan kesehatan awal secara mandiri menggunakan teknologi AI untuk mengetahui risiko penyakit lebih dini.',
  },
  {
    id: 3,
    image: '/slide3.png',
    title: 'Pantau Kesehatan Keluarga',
    desc: 'Kelola kesehatan balita, lansia, dan seluruh anggota keluarga dalam satu aplikasi yang cerdas dan terpadu.',
  },
  {
    id: 4,
    image: '/slide4.png',
    title: 'Layanan Kesehatan\nTerintegrasi',
    desc: 'Terhubung dengan Posyandu, Puskesmas, dan Pemerintah Desa melalui satu platform digital.',
  },
];

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < slides.length - 1) setStep(step + 1);
  };
  const handleSkip = () => navigate('/role-selection');
  const current = slides[step];

  // ─── Slide 1 (Splash / First) ───────────────────────────────────────────────
  if (current.isFirst) {
    return (
      <div className="mobile-container flex flex-col items-center justify-between bg-white px-6 py-10">
        {/* Status bar simulation */}
        <div className="w-full flex justify-between text-[11px] text-gray-500 mb-4">
          <span>9:41</span>
          <span className="flex gap-1 items-center">▲ ▶ 🔋</span>
        </div>

        {/* Logo */}
        <div className="flex flex-col items-center gap-2 mt-2">
          <div className="flex items-center gap-2">
            <div className="text-nexora-teal font-black text-3xl leading-none">N</div>
            <span className="text-[#0E56D0] font-bold text-2xl">EXORA AI</span>
          </div>
        </div>

        {/* Big illustration box */}
        <div className="flex-1 w-full flex items-center justify-center my-6">
          <div className="w-full bg-[#EFF6FF] rounded-3xl flex flex-col items-center justify-center py-8 px-4" style={{minHeight:280}}>
            {/* Placeholder illustration */}
            <svg width="180" height="180" viewBox="0 0 200 200" fill="none">
              <ellipse cx="100" cy="190" rx="80" ry="10" fill="#DBEAFE" opacity="0.5"/>
              {/* Simple healthcare illustration */}
              <rect x="50" y="60" width="100" height="90" rx="20" fill="#BFDBFE"/>
              <rect x="80" y="85" width="10" height="40" rx="5" fill="#1D4ED8"/>
              <rect x="70" y="100" width="30" height="10" rx="5" fill="#1D4ED8"/>
              <circle cx="100" cy="55" r="20" fill="#93C5FD"/>
              <circle cx="100" cy="55" r="12" fill="#1D4ED8"/>
            </svg>
            <div className="mt-4 bg-[#1D4ED8] rounded-xl px-4 py-2">
              <p className="text-white text-xs font-bold text-center">HEALTHCARE AI</p>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="text-center mb-6">
          <h1 className="text-[#0E56D0] text-2xl font-bold mb-3">NEXORA AI</h1>
          <p className="text-gray-500 text-sm leading-relaxed">
            Next Generation Integrated<br/>Healthcare Platform for Smart<br/>Village
          </p>
        </div>

        {/* Footer badge */}
        <div className="flex items-center gap-2 bg-[#EFF6FF] rounded-xl px-4 py-3 w-full">
          <span className="text-[#0E56D0] text-xl">🛡️</span>
          <div>
            <p className="text-[#0E56D0] text-[10px] font-bold tracking-wider">AMAN & TERPERCAYA</p>
            <p className="text-[#0E56D0] text-[10px] font-semibold">MENYIAPKAN LAYANAN</p>
          </div>
        </div>

        {/* Invisible tap to continue */}
        <div className="absolute inset-0 cursor-pointer" onClick={handleNext}/>
      </div>
    );
  }

  // ─── Slides 2–4 ─────────────────────────────────────────────────────────────
  const isLast = step === slides.length - 1;
  const dotIndex = step - 1; // Dots represent slides 2,3,4 → index 0,1,2

  return (
    <div className="mobile-container flex flex-col bg-white">
      {/* Status bar */}
      <div className="flex justify-between items-center px-5 pt-3 pb-1 text-[11px] text-gray-500">
        <span>9:41</span>
        <span>▲ ▶ 🔋</span>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center px-5 pt-2 pb-4">
        <div className="flex items-center gap-1">
          <span className="text-[#00A99D] font-black text-lg leading-none">N</span>
          <span className="text-[#0E56D0] font-bold text-base">EXORA AI</span>
        </div>
        {!isLast && (
          <button onClick={handleSkip} className="text-gray-400 text-sm font-medium">Lewati</button>
        )}
      </div>

      {/* Illustration */}
      <div className="px-5 mx-0">
        <div className="w-full bg-[#EFF6FF] rounded-3xl overflow-hidden flex items-center justify-center" style={{height:240}}>
          {/* Placeholder illustrations by slide */}
          {step === 2 && (
            <svg width="220" height="200" viewBox="0 0 220 200" fill="none">
              <ellipse cx="110" cy="100" rx="80" ry="70" fill="#BFDBFE" opacity="0.4"/>
              <circle cx="75" cy="110" r="40" fill="#93C5FD"/>
              <circle cx="145" cy="110" r="40" fill="#6EE7B7"/>
              <circle cx="110" cy="90" r="30" fill="#1D4ED8"/>
              <rect x="95" y="80" width="8" height="25" rx="4" fill="white"/>
              <rect x="87" y="89" width="25" height="8" rx="4" fill="white"/>
              {/* Family figures */}
              <circle cx="75" cy="75" r="12" fill="#FDE68A"/>
              <rect x="63" y="88" width="24" height="30" rx="5" fill="#FCA5A5"/>
              <circle cx="145" cy="75" r="10" fill="#FDE68A"/>
              <rect x="135" y="86" width="20" height="28" rx="5" fill="#86EFAC"/>
            </svg>
          )}
          {step === 3 && (
            <svg width="220" height="200" viewBox="0 0 220 200" fill="none">
              <rect x="20" y="50" width="80" height="100" rx="12" fill="#BFDBFE"/>
              <rect x="30" y="60" width="60" height="10" rx="3" fill="#1D4ED8" opacity="0.5"/>
              <rect x="30" y="75" width="40" height="8" rx="3" fill="#1D4ED8" opacity="0.3"/>
              <rect x="30" y="88" width="50" height="8" rx="3" fill="#1D4ED8" opacity="0.3"/>
              <rect x="120" y="40" width="80" height="110" rx="12" fill="#D1FAE5"/>
              <circle cx="160" cy="70" r="18" fill="#34D399"/>
              <path d="M152 70 L158 76 L168 64" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="130" y="95" width="60" height="8" rx="3" fill="#059669" opacity="0.4"/>
              <rect x="130" y="108" width="40" height="8" rx="3" fill="#059669" opacity="0.3"/>
            </svg>
          )}
          {step === 4 && (
            <svg width="220" height="200" viewBox="0 0 220 200" fill="none">
              <rect x="20" y="60" width="180" height="100" rx="16" fill="#DBEAFE"/>
              <circle cx="60" cy="90" r="22" fill="#93C5FD"/>
              <text x="53" y="96" fontSize="18" fill="#1D4ED8">🏥</text>
              <rect x="90" y="70" width="100" height="12" rx="4" fill="#1D4ED8" opacity="0.4"/>
              <rect x="90" y="88" width="80" height="8" rx="3" fill="#1D4ED8" opacity="0.25"/>
              <rect x="90" y="100" width="60" height="8" rx="3" fill="#1D4ED8" opacity="0.2"/>
              <rect x="30" y="130" width="60" height="20" rx="8" fill="#1D4ED8"/>
              <rect x="100" y="130" width="60" height="20" rx="8" fill="#0E56D0" opacity="0.7"/>
            </svg>
          )}
          {step === 1 && (
            <svg width="220" height="200" viewBox="0 0 220 200" fill="none">
              <rect x="40" y="30" width="140" height="140" rx="20" fill="#BFDBFE" opacity="0.5"/>
              <circle cx="110" cy="90" r="45" fill="#93C5FD"/>
              <circle cx="110" cy="90" r="30" fill="#1D4ED8"/>
              <circle cx="110" cy="90" r="15" fill="white"/>
              {/* AI scan lines */}
              <line x1="40" y1="90" x2="80" y2="90" stroke="#1D4ED8" strokeWidth="2"/>
              <line x1="140" y1="90" x2="180" y2="90" stroke="#1D4ED8" strokeWidth="2"/>
              <line x1="110" y1="30" x2="110" y2="60" stroke="#1D4ED8" strokeWidth="2"/>
              <line x1="110" y1="120" x2="110" y2="150" stroke="#1D4ED8" strokeWidth="2"/>
            </svg>
          )}
        </div>
      </div>

      {/* Text */}
      <div className="flex-1 px-6 pt-6 text-center">
        <h2 className="text-[22px] font-bold text-gray-900 mb-4 leading-snug whitespace-pre-line">
          {current.title}
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed">{current.desc}</p>
      </div>

      {/* Bottom navigation */}
      <div className="px-6 pb-10 flex flex-col items-center">
        {/* Dots */}
        <div className="flex gap-2 mb-6">
          {[0,1,2].map((i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${dotIndex === i ? 'w-6 bg-[#0E56D0]' : 'w-2 bg-gray-200'}`}
            />
          ))}
        </div>

        {/* Lanjut / Mulai Button */}
        <button
          onClick={isLast ? handleSkip : handleNext}
          className="w-full bg-[#0E56D0] hover:bg-blue-700 text-white font-semibold py-4 rounded-full flex items-center justify-center gap-2 shadow-lg transition-colors mb-4"
          style={{boxShadow:'0 4px 18px rgba(14,86,208,0.25)'}}
        >
          {isLast ? 'Mulai Sekarang' : 'Lanjut'} <span className="text-lg">→</span>
        </button>

        {isLast ? (
          <button onClick={handleSkip} className="text-gray-500 text-sm">
            Sudah punya akun? <span className="text-[#0E56D0] font-bold">Masuk</span>
          </button>
        ) : (
          <button onClick={handleSkip} className="text-gray-400 text-sm font-medium">Lewati</button>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
