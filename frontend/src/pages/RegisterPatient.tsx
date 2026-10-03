import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPatient = () => {
  const navigate = useNavigate();

  return (
    <div className="mobile-container flex flex-col bg-white">
      {/* Status bar */}
      <div className="flex justify-between items-center px-5 pt-3 pb-1 text-[11px] text-gray-500">
        <span>8:41</span><span>▲ ▶ 🔋</span>
      </div>

      {/* Header */}
      <div className="px-6 pt-4 flex flex-col items-center text-center mb-6">
        {/* Logo Icon */}
        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
          <span className="text-[#0E56D0] font-black text-3xl leading-none">N</span>
        </div>
        <h1 className="text-xl font-bold text-gray-900 mb-1">Masuk Sebagai Pasien</h1>
        <p className="text-gray-400 text-xs px-6">
          Daftar sekarang untuk asisten kesehatan pintar Anda.
        </p>
      </div>

      {/* Form */}
      <div className="px-6 flex-1 overflow-y-auto pb-10">
        <div className="flex flex-col gap-4">

          {/* Nama Lengkap */}
          <div>
            <label className="text-xs font-semibold text-gray-700 mb-1.5 block">Nama Lengkap</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </span>
              <input type="text" placeholder="Contoh: Ahmad Fauzi"
                className="w-full border border-gray-200 rounded-2xl py-3.5 pl-12 pr-4 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"/>
            </div>
          </div>

          {/* NIK */}
          <div>
            <label className="text-xs font-semibold text-gray-700 mb-1.5 block">NIK (16 Digit)</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0"/>
                </svg>
              </span>
              <input type="text" placeholder="327xxxxxxxxxxxxx"
                className="w-full border border-gray-200 rounded-2xl py-3.5 pl-12 pr-4 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"/>
            </div>
          </div>

          {/* Nomor HP */}
          <div>
            <label className="text-xs font-semibold text-gray-700 mb-1.5 block">Nomor HP</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </span>
              <input type="tel" placeholder="0812xxxxxxx"
                className="w-full border border-gray-200 rounded-2xl py-3.5 pl-12 pr-4 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"/>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-xs font-semibold text-gray-700 mb-1.5 block">Alamat Email</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </span>
              <input type="email" placeholder="ahmadfauzi@email.com"
                className="w-full border border-gray-200 rounded-2xl py-3.5 pl-12 pr-4 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"/>
            </div>
          </div>

          {/* Kata Sandi */}
          <div>
            <label className="text-xs font-semibold text-gray-700 mb-1.5 block">Kata Sandi</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </span>
              <input type="password" placeholder="••••••••"
                className="w-full border border-gray-200 rounded-2xl py-3.5 pl-12 pr-4 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"/>
            </div>
          </div>

          {/* Konfirmasi */}
          <div>
            <label className="text-xs font-semibold text-gray-700 mb-1.5 block">Konfirmasi</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </span>
              <input type="password" placeholder="••••••••"
                className="w-full border border-gray-200 rounded-2xl py-3.5 pl-12 pr-4 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"/>
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-start gap-3 mt-1">
            <input type="checkbox" id="terms" className="mt-0.5 w-4 h-4 accent-blue-600 flex-shrink-0"/>
            <label htmlFor="terms" className="text-xs text-gray-500 leading-relaxed">
              Saya menyetujui{' '}
              <span className="text-[#0E56D0] font-semibold">Syarat & Ketentuan</span>
              {' '}serta{' '}
              <span className="text-[#0E56D0] font-semibold">Kebijakan Privasi</span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            onClick={() => navigate('/dashboard')}
            className="w-full bg-[#0E56D0] text-white font-semibold py-4 rounded-full mt-2 hover:bg-blue-700 transition-colors"
            style={{boxShadow:'0 4px 18px rgba(14,86,208,0.3)'}}>
            Daftar
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPatient;
