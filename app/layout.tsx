import type { Metadata } from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Yusuf Afandi Tari Putra | Portofolio Web Developer',
  description: 'Portofolio profesional Yusuf Afandi Tari Putra - Full-Stack Web Developer berpengalaman dalam pembuatan aplikasi web modern menggunakan HTML, CSS, JavaScript, PHP, dan Laravel.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="font-sans antialiased text-slate-900 bg-slate-50 dark:text-slate-100 dark:bg-slate-950 transition-colors duration-300" suppressHydrationWarning>
        {/* Inline script to prevent flash of theme on reload */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}

