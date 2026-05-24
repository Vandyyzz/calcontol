'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to console
    console.error('Captured Application Error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 px-6 py-12 text-center">
      <div className="max-w-md w-full">
        <span className="text-xs font-mono font-bold tracking-widest text-rose-600 dark:text-rose-400 bg-rose-500/10 px-3.5 py-1.5 rounded-full uppercase">
          PERINGATAN SISTEM
        </span>
        
        <h1 className="mt-6 font-display font-black text-3xl sm:text-4xl text-slate-950 dark:text-white leading-tight">
          Terjadi Kesalahan Aplikasi
        </h1>
        
        <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
          Aplikasi mengalami kendala memuat baris komponen. Jangan khawatir, Anda dapat mencoba memuat ulang halaman ini.
        </p>

        {error?.message && (
          <div className="mt-6 p-4 bg-slate-100 dark:bg-slate-900 rounded-xl text-left border border-slate-200 dark:border-slate-800">
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 break-words">
              {error.message}
            </p>
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-2xl shadow-sm transition-all text-sm cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            Coba Lagi
          </button>
          
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium rounded-2xl transition-all text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
