'use client';

import React, { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Captured Global Error:', error);
  }, [error]);

  return (
    <html lang="id">
      <body className="font-sans antialiased text-slate-900 bg-slate-50 dark:text-slate-100 dark:bg-slate-950 min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full px-6 py-12 text-center">
          <span className="text-xs font-mono font-bold tracking-widest text-rose-600 dark:text-rose-400 bg-rose-500/10 px-3.5 py-1.5 rounded-full uppercase">
            FATAL ERROR
          </span>
          <h1 className="mt-6 font-display font-black text-3xl text-slate-950 dark:text-white leading-tight">
            Kesalahan Global Terdeteksi
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            Sistem gagal mematangkan tata rupa dasar aplikasi. Silakan tekan tombol di bawah untuk menyegarkan sistem.
          </p>
          <div className="mt-8">
            <button
              onClick={() => reset()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-2xl shadow-sm transition-all text-sm cursor-pointer"
            >
              Segarkan Halaman
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
