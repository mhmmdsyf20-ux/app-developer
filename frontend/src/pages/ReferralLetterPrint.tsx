import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const ReferralLetterPrint: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const code = searchParams.get('code') || 'RUJ-2026-84920';
  const name = searchParams.get('name') || 'Budi Santoso';
  const nik = searchParams.get('nik') || '3302192804920003';
  const diagnosis = searchParams.get('diagnosis') || 'Indikasi Infeksi Saluran Pernapasan Akut (ISPA) Mild & Febris';
  const facility = searchParams.get('facility') || 'Puskesmas Pembantu Sukamaju';

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="mobile-container flex flex-col bg-slate-100 relative">
      {/* Header Bar */}
      <div className="bg-white px-5 py-3 border-b border-gray-200 flex items-center justify-between shadow-xs print:hidden">
        <button 
          onClick={() => navigate('/referral-verification')}
          className="p-2 rounded-full bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span className="font-bold text-xs text-gray-800">Cetak Surat Rujukan</span>
        <button
          onClick={handlePrint}
          className="bg-[#0E56D0] hover:bg-blue-700 text-white font-bold px-3.5 py-1.5 rounded-full text-xs transition-colors flex items-center gap-1 shadow-xs"
        >
          🖨️ Cetak PDF
        </button>
      </div>

      {/* Printable Document Sheet */}
      <div className="flex-1 overflow-y-auto p-6 bg-slate-100 print:bg-white print:p-0">
        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 print:shadow-none print:border-none print:p-0 text-gray-900 font-serif">
          
          {/* Header Kop Surat */}
          <div className="border-b-2 border-gray-900 pb-4 mb-4 text-center">
            <h2 className="font-bold text-sm tracking-wider uppercase">PEMERINTAH KABUPATEN SUKAMATRA</h2>
            <h1 className="font-extrabold text-base tracking-wide uppercase">DINAS KESEHATAN • PUSKESMAS SUKAMAJU</h1>
            <p className="text-[10px] font-sans text-gray-600 mt-0.5">Jl. Kesehatan No. 12 Desa Sukamaju, Kec. Sukamaju • Telp: (0281) 749201</p>
          </div>

          <div className="text-center mb-6">
            <h3 className="font-bold text-sm underline tracking-widest uppercase">SURAT RUJUKAN KESEHATAN DIGITAL</h3>
            <p className="font-mono text-xs text-gray-700 font-bold mt-1">Nomor Rujukan: {code}</p>
          </div>

          {/* Body Information Table */}
          <div className="text-xs space-y-3 font-sans">
            <p className="leading-relaxed">Yang bertanda tangan di bawah ini menerangkan bahwa pasien:</p>
            
            <table className="w-full text-left text-xs border-collapse">
              <tbody>
                <tr>
                  <td className="py-1 w-32 font-semibold text-gray-600">Nama Pasien</td>
                  <td className="py-1 font-bold text-gray-900">: {name}</td>
                </tr>
                <tr>
                  <td className="py-1 font-semibold text-gray-600">NIK</td>
                  <td className="py-1 font-mono text-gray-900">: {nik}</td>
                </tr>
                <tr>
                  <td className="py-1 font-semibold text-gray-600">Faskes Tujuan</td>
                  <td className="py-1 font-bold text-blue-900">: {facility}</td>
                </tr>
                <tr>
                  <td className="py-1 font-semibold text-gray-600">Skrining AI & Diagnosa</td>
                  <td className="py-1 font-semibold text-gray-900">: {diagnosis}</td>
                </tr>
                <tr>
                  <td className="py-1 font-semibold text-gray-600">Tanggal Terbit</td>
                  <td className="py-1 text-gray-900">: 30 September 2026</td>
                </tr>
              </tbody>
            </table>

            <div className="bg-slate-50 p-3 rounded-xl border border-gray-200 mt-4 text-[11px] leading-relaxed">
              <p className="font-bold text-gray-800 mb-1">Catatan Pertolongan Pertama (NEXORA AI):</p>
              <p className="text-gray-600">Pasien telah menjalani skrining kesehatan awal berbasis AI. Mohon dilakukan pemeriksaan fisik & tindak lanjut medis sesuai prosedur Faskes I.</p>
            </div>
          </div>

          {/* Barcode & Tanda Tangan Footer */}
          <div className="mt-8 pt-4 border-t border-gray-200 flex justify-between items-end font-sans">
            <div className="text-center">
              <div className="w-20 h-20 bg-slate-900 text-white rounded-lg flex items-center justify-center font-mono text-[9px] font-bold p-1 shadow-inner mx-auto mb-1">
                [ QR-CODE RUJUKAN VALID ]
              </div>
              <span className="text-[9px] text-gray-400 font-mono">ID: {code}</span>
            </div>

            <div className="text-center text-xs">
              <p className="text-gray-600">Sukamaju, 30 September 2026</p>
              <p className="font-bold text-gray-900 mt-0.5">Dokter Penanggung Jawab,</p>
              <div className="h-12 flex items-center justify-center my-1">
                <span className="text-emerald-600 font-serif italic font-bold border-b border-emerald-600 px-2 text-xs">
                  ✓ Validated by dr. Farhan Hidayat
                </span>
              </div>
              <p className="font-bold text-gray-900">dr. Farhan Hidayat, Sp.PD</p>
              <p className="text-[10px] text-gray-500">SIP: 449/1920/2026</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ReferralLetterPrint;
