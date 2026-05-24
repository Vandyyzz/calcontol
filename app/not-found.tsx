import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 px-6 py-12 text-center">
      <div className="max-w-md w-full">
        {/* Elegant Design Wrapper */}
        <span className="text-xs font-mono font-bold tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-3.5 py-1.5 rounded-full uppercase">
          ERROR 404
        </span>
        
        <h1 className="mt-6 font-display font-black text-4xl sm:text-5xl text-slate-950 dark:text-white leading-tight">
          Halaman Tidak Ditemukan
        </h1>
        
        <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
          Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan ke alamat lain.
        </p>

        <div className="mt-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-2xl shadow-sm transition-all text-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
