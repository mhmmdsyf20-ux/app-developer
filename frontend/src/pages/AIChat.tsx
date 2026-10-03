import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { personasList, AIPersona } from './SelectPersona';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  diagnosis?: {
    symptoms: string;
    preliminaryDiagnosis: string;
    recommendedFacility: string;
    urgency: 'Rendah' | 'Sedang' | 'Tinggi';
  };
}

const AIChat: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const personaId = searchParams.get('persona') || 'dr-neha';
  
  const persona: AIPersona = personasList.find(p => p.id === personaId) || personasList[0];

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: `Halo Budi! Saya ${persona.name}, ${persona.role} Anda di NEXORA. Ada keluhan kesehatan atau gejala apa yang Anda rasakan hari ini?`,
      timestamp: '09:42'
    }
  ]);

  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isVoiceRecording, setIsVoiceRecording] = useState(false);
  const [showReferralCreatedModal, setShowReferralCreatedModal] = useState(false);
  const [generatedReferralCode, setGeneratedReferralCode] = useState('');

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const quickPrompts = [
    'Saya pusing dan demam 2 hari',
    'Berapa tensi darah normal?',
    'Cara cegah stunting pada balita',
    'Syarat buat surat rujukan Puskesmas'
  ];

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsTyping(true);

    // Simulate AI Contextual Response
    setTimeout(() => {
      let aiReply = '';
      let diagnosisData = undefined;

      const lowerText = text.toLowerCase();
      if (lowerText.includes('pusing') || lowerText.includes('demam')) {
        aiReply = `Berdasarkan gejala pusing dan demam yang Anda rasakan selama 2 hari, ada indikasi infeksi ISPA ringan atau kelelahan. Mohon perbanyak minum air putih, istirahat cukup, dan konsumsi parasetamol jika demam tinggi.`;
        diagnosisData = {
          symptoms: text,
          preliminaryDiagnosis: 'Indikasi Infeksi Saluran Pernapasan Akut (ISPA) / Febris Mild',
          recommendedFacility: 'Puskesmas Pembantu Sukamaju',
          urgency: 'Sedang' as const
        };
      } else if (lowerText.includes('tensi') || lowerText.includes('hipertensi')) {
        aiReply = `Tekanan darah normal untuk dewasa adalah di bawah 120/80 mmHg. Jika tensi Anda di atas 140/90 mmHg secara konsisten, disarankan melakukan kontrol rutin di Posyandu Prolanis atau Puskesmas.`;
      } else if (lowerText.includes('stunting') || lowerText.includes('balita')) {
        aiReply = `Untuk mencegah stunting: Berikan ASI Eksklusif 6 bulan, dilanjutkan MPASI tinggi protein hewani (telur, ikan, daging), serta pantau tinggi & berat badan setiap bulan di Posyandu Mawar Desa.`;
      } else {
        aiReply = `Terima kasih sudah menyampaikan keluhan Anda. Saya telah mencatat catatan medis awal ini. Apakah ada gejala tambahan seperti batuk, mual, atau lemas?`;
      }

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        diagnosis: diagnosisData
      };

      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1400);
  };

  const handleGenerateReferral = (diag: NonNullable<Message['diagnosis']>) => {
    const code = `RUJ-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
    setGeneratedReferralCode(code);
    setShowReferralCreatedModal(true);
  };

  return (
    <div className="mobile-container flex flex-col bg-slate-100 relative">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-6 pt-3 pb-1 text-xs text-gray-600 bg-white border-b border-gray-100 font-medium">
        <span>09:42</span>
        <div className="flex items-center gap-1.5">
          <span>5G</span>
          <div className="w-5 h-2.5 border border-gray-700 rounded-sm p-0.5 flex items-center">
            <div className="bg-gray-800 w-full h-full rounded-2xs" />
          </div>
        </div>
      </div>

      {/* Header Bar */}
      <div className="bg-white px-5 py-3 border-b border-gray-200 flex items-center justify-between shadow-xs z-10">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate('/select-persona')}
            className="p-2 rounded-full bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex items-center gap-2.5">
            <div className={`w-10 h-10 rounded-full ${persona.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-xs`}>
              {persona.name.substring(0, 4)}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h2 className="font-bold text-gray-900 text-sm leading-none">{persona.name}</h2>
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              </div>
              <p className="text-[10px] text-gray-400 font-medium mt-0.5">{persona.role} • Online</p>
            </div>
          </div>
        </div>

        <button 
          onClick={() => navigate('/dashboard')}
          className="text-xs font-semibold text-[#0E56D0] bg-blue-50 px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors"
        >
          Beranda
        </button>
      </div>

      {/* Medical Disclaimer Banner */}
      <div className="bg-blue-50 border-b border-blue-100 px-5 py-2 flex items-center gap-2 text-[11px] text-blue-800">
        <svg className="w-4 h-4 text-[#0E56D0] shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
        </svg>
        <span>
          <strong>Asisten Medis AI:</strong> Konsultasi awal & skrining kesehatan otomatis.
        </span>
      </div>

      {/* Chat Messages Body */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div className="flex items-end gap-2 max-w-[85%]">
              {msg.sender === 'ai' && (
                <div className={`w-7 h-7 rounded-full ${persona.avatarBg} text-white font-bold flex items-center justify-center text-[10px] shrink-0 mb-1`}>
                  AI
                </div>
              )}

              <div
                className={`rounded-2xl px-4 py-3 text-xs leading-relaxed shadow-xs ${
                  msg.sender === 'user'
                    ? 'bg-[#0E56D0] text-white rounded-br-none'
                    : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                }`}
              >
                <p>{msg.text}</p>
                <span className={`text-[9px] mt-1.5 block text-right ${msg.sender === 'user' ? 'text-blue-200' : 'text-gray-400'}`}>
                  {msg.timestamp}
                </span>
              </div>
            </div>

            {/* If AI output contains Preliminary Diagnosis Card */}
            {msg.diagnosis && (
              <div className="mt-3 ml-9 max-w-[85%] bg-gradient-to-br from-blue-900 to-indigo-900 text-white rounded-2xl p-4 shadow-lg border border-blue-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-cyan-300 rounded-full animate-ping"></span>
                    Hasil Skrining Medis AI
                  </span>
                  <span className="bg-amber-500/30 text-amber-200 text-[9px] font-bold px-2 py-0.5 rounded-full border border-amber-400/30">
                    Urgent: {msg.diagnosis.urgency}
                  </span>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div>
                    <p className="text-[10px] text-blue-200">Indikasi Diagnosis:</p>
                    <p className="font-bold text-white">{msg.diagnosis.preliminaryDiagnosis}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-blue-200">Fasilitas Kesehatan Rujukan:</p>
                    <p className="font-medium text-blue-100">{msg.diagnosis.recommendedFacility}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleGenerateReferral(msg.diagnosis!)}
                  className="mt-3 w-full bg-cyan-400 hover:bg-cyan-300 text-gray-900 font-bold py-2 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 shadow-md"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Terbitkan Surat Rujukan AI
                </button>
              </div>
            )}
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex items-center gap-2">
            <div className={`w-7 h-7 rounded-full ${persona.avatarBg} text-white font-bold flex items-center justify-center text-[10px] shrink-0`}>
              AI
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-none px-4 py-2.5 shadow-xs flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Quick Suggestion Pills */}
      <div className="px-5 py-2 bg-white/60 border-t border-gray-100 flex gap-2 overflow-x-auto no-scrollbar">
        {quickPrompts.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(prompt)}
            className="whitespace-nowrap bg-white border border-blue-100 text-[#0E56D0] hover:bg-blue-50 text-[11px] font-medium px-3 py-1.5 rounded-full transition-colors shrink-0 shadow-2xs"
          >
            💡 {prompt}
          </button>
        ))}
      </div>

      {/* Message Input Bar */}
      <div className="bg-white border-t border-gray-200 p-4 flex items-center gap-2 shadow-lg z-10">
        {/* Voice Input Toggle Button */}
        <button
          type="button"
          onClick={() => setIsVoiceRecording(!isVoiceRecording)}
          className={`p-3 rounded-full transition-all ${
            isVoiceRecording ? 'bg-red-500 text-white animate-pulse' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
          title="Rekam Suara"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        </button>

        {/* Text Area Input */}
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder={isVoiceRecording ? 'Mendengarkan ucapan Anda...' : 'Ketik keluhan kesehatan...'}
          className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#0E56D0] focus:bg-white transition-all"
        />

        {/* Send Button */}
        <button
          type="button"
          onClick={() => handleSendMessage()}
          disabled={!inputMessage.trim()}
          className={`p-3 rounded-full text-white transition-all ${
            inputMessage.trim() ? 'bg-[#0E56D0] hover:bg-blue-700 shadow-md shadow-blue-500/30' : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          <svg className="w-5 h-5 transform rotate-90" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
        </button>
      </div>

      {/* Referral Generated Modal */}
      {showReferralCreatedModal && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl p-6 w-full max-w-xs text-center shadow-2xl animate-scale-up">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h3 className="font-bold text-gray-900 text-base mb-1">Surat Rujukan Berhasil Diterbitkan!</h3>
            <p className="text-xs text-gray-500 mb-3">Tunjukkan kode rujukan ini kepada petugas di Puskesmas Sukamaju.</p>

            <div className="bg-slate-900 text-cyan-300 font-mono font-bold text-base py-3 px-4 rounded-xl mb-4 tracking-wider border border-slate-700">
              {generatedReferralCode}
            </div>

            <div className="space-y-2">
              <button 
                onClick={() => {
                  setShowReferralCreatedModal(false);
                  navigate('/dashboard');
                }}
                className="w-full bg-[#0E56D0] text-white font-bold py-2.5 rounded-full text-xs hover:bg-blue-700 transition-colors"
              >
                Kembali ke Beranda Pasien
              </button>

              <button 
                onClick={() => setShowReferralCreatedModal(false)}
                className="w-full bg-gray-100 text-gray-700 font-semibold py-2.5 rounded-full text-xs hover:bg-gray-200 transition-colors"
              >
                Lanjutkan Chat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChat;
