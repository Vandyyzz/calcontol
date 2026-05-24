"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Code, 
  Briefcase, 
  Award, 
  Mail, 
  Phone, 
  ArrowRight, 
  CheckCircle, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Sparkles, 
  MessageSquare, 
  MapPin, 
  BookOpen,
  Calendar,
  Check,
  User,
  Activity,
  ChevronRight,
  Database,
  Terminal,
  Eye
} from "lucide-react";

// Import generated certificate images
import certBnsp from "@/src/assets/images/cert_bnsp_1779382066555.png";
import certLaravel from "@/src/assets/images/cert_laravel_1779382084375.png";
import certFccResponsive from "@/src/assets/images/cert_fcc_responsive_1779382102260.png";
import certFccJs from "@/src/assets/images/cert_fcc_js_1779382119011.png";

// Import generated project screenshot images
import projSis from "@/src/assets/images/proj_sis_1779513486716.png";
import projUmkm from "@/src/assets/images/proj_umkm_1779513505881.png";
import projKanban from "@/src/assets/images/proj_kanban_1779513524800.png";
import projPortfolio from "@/src/assets/images/proj_portfolio_1779513545173.png";

// ==========================================
// SVGs for Technology Logos (High Fidelity)
// ==========================================

const HTML5Logo = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 2L3.5 19.5L12 22L20.5 19.5L22.5 2H1.5Z" fill="#E34F26" />
    <path d="M12 3.5V20.2L18.8 18.2L20.4 4.8L12 3.5Z" fill="#EF652A" />
    <path d="M12 11.5H8.3L8.1 9H12V6.5H5.4L5.9 12.5H12V11.5Z" fill="#EBEBEB" />
    <path d="M12 16.2L12 16.1L9 15.3L8.8 13H6.3L6.8 18L12 19.5V16.2Z" fill="#EBEBEB" />
    <path d="M12 11.5V12.5H15.7L15.3 16.1L12 17V19.5L17.2 18L18 9H12V11.5Z" fill="white" />
    <path d="M12 6.5V9H18.5L18.7 6.5H12Z" fill="white" />
  </svg>
);

const CSS3Logo = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 2L3.5 19.5L12 22L20.5 19.5L22.5 2H1.5Z" fill="#1572B6" />
    <path d="M12 3.5V20.2L18.8 18.2L20.4 4.8L12 3.5Z" fill="#33A9DC" />
    <path d="M12 9H6.1L6.3 11.5H12V9Z" fill="#EBEBEB" />
    <path d="M12 14H8.9L8.7 11.5H6.3L6.8 17.5L12 19V14Z" fill="#EBEBEB" />
    <path d="M12 4H5.6L5.8 6.5H12V4Z" fill="#EBEBEB" />
    <path d="M12 9V11.5H15.8L15.4 15.3L12 16.3V19L17.2 17.5L18 9H12Z" fill="white" />
    <path d="M12 4V6.5H18.3L18.5 4H12Z" fill="white" />
  </svg>
);

const JSLogo = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 1.5H22.5V22.5H1.5V1.5Z" fill="#F7DF1E" />
    <path d="M15.4 10.6H17.8V16.7C17.8 18.3 16.9 19.3 15.1 19.3C13.5 19.3 12.6 18.3 12.6 16.7H15C15 17.2 15 17.5 15.4 17.5C15.8 17.5 16 17.2 16 16.7V10.6H15.4ZM11 10.6H11.2C11.9 10.6 12.4 11 12.4 12.2V13C12.4 14.2 11.8 14.6 11 14.6C10.5 14.6 10.1 14.3 10.1 13.7H7.7C7.7 15.6 9 16.9 11 16.9C13 16.9 14.1 15.6 14.1 13V12.2C14.1 9.6 13 8.3 11 8.3C9.1 8.3 7.8 9.6 7.8 12.2H10.2C10.2 11.1 10.4 10.6 11 10.6Z" fill="black" />
  </svg>
);

const PHPLogo = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="12" rx="11" ry="7.5" fill="#777BB4" />
    <ellipse cx="12" cy="12" rx="10" ry="6.5" fill="#4F5B93" />
    <path d="M8.2 8.5H6.2L5 15.5H6.5L7 12.5H8.2C9.5 12.5 10.2 11.8 10.5 10.5C10.8 9.2 10.1 8.5 8.2 8.5ZM8.1 11H7.3L7.7 9.5H8.3C8.9 9.5 9.1 9.7 9 10.2C8.9 10.7 8.6 11 8.1 11Z" fill="white" />
    <path d="M13.2 8.5H11.2L9.5 18H11L11.8 13.5H13C14.2 13.5 14.8 12.8 15.1 11.5C15.4 10.2 14.8 9.5 13.2 8.5ZM12.9 11H12.1L12.5 9.5H13.1C13.6 9.5 13.8 9.7 13.7 10.2C13.6 10.7 13.3 11 12.9 11Z" fill="white" />
    <path d="M19 8.5H17L15.8 15.5H17.3L17.8 12.5H19C20.3 12.5 21 11.8 21.3 10.5C21.6 9.2 20.9 8.5 19 8.5ZM18.9 11H18.1L18.5 9.5H19.1C19.6 9.5 19.8 9.7 19.7 10.2C19.6 10.7 19.3 11 18.9 11Z" fill="white" />
  </svg>
);

const LaravelLogo = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 6C22 4.34 20.66 3 19 3H5C3.34 3 2 4.34 2 6V18C2 19.66 3.34 21 5 21H19C20.66 21 22 19.66 22 18V6Z" fill="#F05340" />
    <path d="M12 6.5L8.5 8V11.5L12 13L15.5 11.5V8L12 6.5Z" fill="white" fillOpacity="0.3" />
    <path d="M12 11.5L8.5 13V16.5L12 18L15.5 16.5V13L12 11.5Z" fill="white" fillOpacity="0.3" />
    <path d="M12 6.5V13L15.5 11.5V8L12 6.5Z" fill="#FF8D7E" />
    <path d="M8.5 13V16.5L12 18V11.5L8.5 13Z" fill="white" />
    <path d="M12 11.5L15.5 13V16.5L12 18V11.5Z" fill="#FFC9C2" />
  </svg>
);

const NextjsLogo = () => (
  <svg className="w-12 h-12" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="90" cy="90" r="90" fill="black" />
    <path d="M149.508 154.914L77.054 62.46H62.334V117.54H74.334V77.72L137.957 159.27C142.112 158.01 146.014 156.51 149.508 154.914Z" fill="url(#nextjsGradient)" />
    <path d="M118.234 62.46H130.234V117.54H118.234V62.46Z" fill="white" />
    <defs>
      <linearGradient id="nextjsGradient" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

// ==========================================
// Mock Data for Projects and Certificates
// ==========================================

interface ProjectData {
  id: string;
  title: string;
  category: string;
  techs: string[];
  description: string;
  details: string[];
  liveSimLink?: string;
  tag: string;
  imageUrl: any;
}

const PROJECTS_DATA: ProjectData[] = [
  {
    id: "sis",
    title: "Sistem Informasi Manajemen Sekolah (SIS)",
    category: "Laravel",
    techs: ["PHP", "Laravel", "Tailwind CSS", "JavaScript", "MySQL"],
    description: "Sistem dashboard sekolah terintegrasi dengan portal administrasi guru, siswa, wali kelas, serta pengumuman real-time.",
    details: [
      "Mengurangi birokrasi pendaftaran akademis hingga 65% dengan alur kerja digital.",
      "Dashboard dinamis yang memvisualkan tren nilai kelas siswa dengan grafik khusus.",
      "Fitur absensi berbasis RFID simulasian dan rekapitulasi penilaian otomatis berbasis kurikulum nasional Merdeka Belajar."
    ],
    tag: "Laravel + Admin Suite",
    imageUrl: projSis
  },
  {
    id: "umkm",
    title: "DagangLokal: Portal E-Commerce UMKM",
    category: "PHP Native",
    techs: ["PHP Native", "HTML5", "CSS3", "JavaScript", "MySQL"],
    description: "Platform toko virtual responsif untuk membantu pengusaha lokal memajang katalog produk dan menghitung pengiriman mandiri.",
    details: [
      "Arsitektur MVC native terstruktur rapi yang aman dari eksploitasi SQL Injection & XSS.",
      "Kalkulator ongkos kirim manual terpadu untuk area lokal.",
      "Alur pemesanan langsung otomatis dialihkan ke pesan WhatsApp dengan rincian pembelian tercetak format PDF."
    ],
    tag: "PHP Native + E-Commerce",
    imageUrl: projUmkm
  },
  {
    id: "kanban",
    title: "Kanban Board Interaktif & Task Manager",
    category: "JavaScript",
    techs: ["HTML5", "CSS3 Grid/Flexbox", "JavaScript (ES6+)", "Local Storage"],
    description: "Aplikasi produktivitas klien-sentris untuk melacak status tugas tim secara interaktif dan instan tanpa server latency.",
    details: [
      "Mendukung fungsionalitas memindahkan kartu antar kolom (To Do, In Progress, Done).",
      "Penyimpanan otomatis menggunakan Local Storage sehingga tugas aman saat halaman dimuat ulang.",
      "Visualisasi status tugas dengan grafik donat interaktif dan pencarian pintar kata kunci."
    ],
    tag: "Interactive JS Tool",
    imageUrl: projKanban
  },
  {
    id: "portfolio",
    title: "Portofolio Profesional & AI Hub v1",
    category: "Sistem Modern",
    techs: ["Next.js", "React 19", "Tailwind CSS v4", "Framer Motion", "Gemini API"],
    description: "Halaman portofolio digital pribadi berkecepatan tinggi dengan asisten AI multi-modal terintegrasi langsung di dalamnya.",
    details: [
      "Mengintegrasikan Gemini API untuk mensimulasikan asisten wawancara virtual.",
      "Mode gelap instan yang ramah di mata dengan transisi CSS custom.",
      "Desain responsif fluid dengan performa skor Google Lighthouse mendekati 100%."
    ],
    tag: "Next.js + AI",
    imageUrl: projPortfolio
  }
];

interface CertificateData {
  id: string;
  title: string;
  issuer: string;
  date: string;
  idCredential: string;
  skillsTaught: string[];
  imageUrl: any;
}

const CERTIFICATES_DATA: CertificateData[] = [
  {
    id: "bnsp",
    title: "Junior Web Developer (Sertifikasi Kompetensi Nasional)",
    issuer: "LSP Kominfo / BNSP (Badan Nasional Sertifikasi Profesi)",
    date: "November 2025",
    idCredential: "REG.TI.028.0004523-2025",
    skillsTaught: ["Pemrograman Terstruktur", "Rancangan Database", "Implementasi Keamanan Web", "Uji Coba Fungsionalitas Aplikasi"],
    imageUrl: certBnsp
  },
  {
    id: "laravel-dicoding",
    title: "Menjadi Laravel Web Developer Expert",
    issuer: "Dicoding Indonesia (Kemitraan Industri Global)",
    date: "Maret 2026",
    idCredential: "LAR-EXPERT-23945YFA",
    skillsTaught: ["Model-View-Controller (MVC)", "RESTful API Development", "Sistem Antrean & Jobs", "Eloquent Relationship Heuristics"],
    imageUrl: certLaravel
  },
  {
    id: "fcc-responsive",
    title: "Responsive Web Design Certification",
    issuer: "freeCodeCamp.org",
    date: "Desember 2024",
    idCredential: "FCC-RESP-WD-1082103",
    skillsTaught: ["Aksesibilitas (A11y)", "Media Queries & Responsive Layouts", "Flexbox & CSS Grid Layouts", "Desain Visual Terpadu"],
    imageUrl: certFccResponsive
  },
  {
    id: "fcc-javascript",
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp.org",
    date: "Februari 2025",
    idCredential: "FCC-JS-ALGO-2200189",
    skillsTaught: ["Object Oriented Programming", "Functional Programming", "Regular Expressions", "Struktur Data (Array, Stack, Map)"],
    imageUrl: certFccJs
  }
];

export default function Home() {
  // Theme state
  const [darkMode, setDarkMode] = useState<boolean>(true);
  
  // Mobile navigation drawer state
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  
  // Projects interaction - active index for detailed modal
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  // Certificates interaction - active modal
  const [selectedCert, setSelectedCert] = useState<CertificateData | null>(null);

  // Active Section Tracker (for sticky navbar indicators)
  const [activeSection, setActiveSection] = useState<string>("home");

  // Contact Form States
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formSubject, setFormSubject] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isFormSending, setIsFormSending] = useState(false);

  // Sticky header background state
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  // Glowing mouse blob effect (moves with mouse)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMouseInContainer, setIsMouseInContainer] = useState(false);

  // Initialize Theme and Section Observers
  useEffect(() => {
    // Check local storage for theme
    const savedTheme = localStorage.getItem("theme");
    // Run asynchronously to prevent synchronous cascading render linter warnings
    setTimeout(() => {
      if (savedTheme) {
        setDarkMode(savedTheme === "dark");
        if (savedTheme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        // Default is dark mode for ultra professional aesthetic
        setDarkMode(true);
        document.documentElement.classList.add("dark");
      }
    }, 0);

    // Header scroll background modification
    const handleScroll = () => {
      setIsHeaderSticky(window.scrollY > 50);

      // Section tracker
      const sections = ["home", "skill", "projects", "certificates", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme Toggler
  const toggleTheme = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    if (nextMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Submit contact form simulation
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) return;

    setIsFormSending(true);
    setTimeout(() => {
      setIsFormSending(false);
      setFormSubmitted(true);
    }, 1500);
  };



  return (
    <div id="top" className="relative overflow-hidden min-h-screen">
      {/* Background visual graphics */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-grid-pattern opacity-100 z-0" />
      
      {/* Dynamic Aura Glow Blob in background (interactive with mouse placement) */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none opacity-20 dark:opacity-30 transition-transform duration-200 z-0 bg-gradient-to-tr from-sky-500 violet-500 to-rose-500"
        style={{
          left: `${mousePos.x - 300}px`,
          top: `${mousePos.y - 300}px`,
          transform: isMouseInContainer ? 'scale(1.15)' : 'scale(1)',
        }}
      />

      {/* ==========================================
          HEADER / NAVBARSECTION 
          ========================================== */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isHeaderSticky 
            ? "py-3 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm border-b border-slate-200/50 dark:border-slate-800/50" 
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Brand Logo with beautiful icon markup */}
          <a href="#top" className="flex items-center gap-3 group select-none">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
              <span className="font-display font-medium text-lg leading-none tracking-tight">Y</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-tight text-slate-900 dark:text-white transition-colors duration-300">
                Yusuf Afandi
              </span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 -mt-1 leading-none">
                TARI PUTRA
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Responsive) */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/60 dark:bg-slate-900/40 p-1 rounded-full border border-slate-200/30 dark:border-slate-800/30 select-none">
            {[
              { id: "home", label: "Home" },
              { id: "skill", label: "Skill" },
              { id: "projects", label: "Project" },
              { id: "certificates", label: "Sertifikat" },
              { id: "contact", label: "Contact" }
            ].map((section) => (
              <a 
                key={section.id}
                href={`#${section.id}`} 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === section.id 
                    ? "bg-white text-indigo-600 dark:bg-slate-800 dark:text-sky-400 shadow-sm" 
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {section.label}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons (Dark mode & Hamburg Menu) */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 transition-colors duration-300 shadow-sm"
              aria-label="Toggle Dark Mode"
              id="theme-Toggle"
            >
              {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-indigo-600" />}
            </button>

            {/* Language/Flag indicator (pure decor but solid human representation) */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-600 dark:text-slate-400 select-none bg-slate-50/50 dark:bg-slate-900/30">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span>ID</span>
            </div>

            {/* Mobile Hamburger Trigger */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors shadow-sm"
              aria-label="Open mobile navigation"
              id="mobile-Menu-Btn"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Overlay and Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs z-45"
            />
            {/* Drawer */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[280px] h-full bg-white dark:bg-slate-950 shadow-2xl border-l border-slate-200 dark:border-slate-800 z-50 p-6 flex flex-col justify-between"
            >
              <div>
                {/* Header of Drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800/50 mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-sm font-bold">Y</div>
                    <span className="font-display font-semibold text-sm">Navigation Menu</span>
                  </div>
                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-500"
                    id="close-Mobile-Menu"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Vertical Links list */}
                <nav className="flex flex-col gap-2">
                  {[
                    { id: "home", label: "Home", sub: "Kembali ke Beranda" },
                    { id: "skill", label: "Skill / Keahlian", sub: "Teknologi yang saya kuasai" },
                    { id: "projects", label: "Project & Aplikasi", sub: "Karya digital terbaik saya" },
                    { id: "certificates", label: "Sertifikat", sub: "Bukti kompetensi industri" },
                    { id: "contact", label: "Hubungi / Tanya AI", sub: "Kirim pesan langsung" }
                  ].map((item) => (
                    <a 
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`group p-3 rounded-2xl flex flex-col transition-all duration-300 ${
                        activeSection === item.id 
                          ? "bg-indigo-50 dark:bg-indigo-950/40 border-l-4 border-indigo-600" 
                          : "hover:bg-slate-50 dark:hover:bg-slate-900/50"
                      }`}
                    >
                      <span className={`font-display text-sm font-semibold ${
                        activeSection === item.id ? "text-indigo-600 dark:text-indigo-400" : "text-slate-800 dark:text-slate-100"
                      }`}>
                        {item.label}
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-sans leading-none">
                        {item.sub}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>

              {/* Drawer Footer info */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800/50 text-center">
                <p className="text-xs text-slate-500 font-mono">Yusuf Afandi Tari Putra</p>
                <p className="text-[10px] text-slate-400 mt-1">Full-Stack Web Developer</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ==========================================
          MAIN LAYOUT CONTENT
          ========================================== */}
      <main 
        className="max-w-7xl mx-auto px-6 relative z-10"
        onMouseMove={(e) => {
          setMousePos({ x: e.pageX, y: e.pageY });
          setIsMouseInContainer(true);
        }}
        onMouseLeave={() => setIsMouseInContainer(false)}
      >

        {/* ==========================================
            HERO / HOME SECTION
            ========================================== */}
        <section 
          id="home" 
          className="pt-32 pb-20 md:pt-44 md:pb-28 min-h-[90vh] flex flex-col justify-center relative"
        >
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content Column */}
            <div className="md:col-span-7 flex flex-col gap-6 text-left">
              
              {/* Micro decoration banner (humble label) */}
              <div className="inline-flex items-center gap-2 bg-indigo-500/10 dark:bg-indigo-500/15 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 px-3 py-1.5 rounded-full text-xs font-semibold w-fit tracking-wide uppercase select-none shadow-xs">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>Siap Bekerja & Berkolaborasi</span>
              </div>

              {/* Primary Headings with exquisite typography */}
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium leading-[1.1] tracking-tight text-slate-900 dark:text-white">
                  Halo, Saya <br className="hidden sm:inline" />
                  <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-600 select-all">
                    Yusuf Afandi Tari Putra
                  </span>
                </h1>
                
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2 mt-1">
                  <span className="inline-block w-8 h-[2px] bg-slate-500/50" />
                  Full-Stack Web Developer
                </h2>
              </div>

              {/* Bio description card */}
              <p className="text-base text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                Seorang pengembang aplikasi web yang mendedikasikan waktu dan kreativitas demi menciptakan arsitektur software bersih, andal, dan berdaya saing tinggi. Menguasai pemrograman hulu ke hilir dengan andalan sistem ekosistem <strong className="text-amber-500 dark:text-sky-400 font-medium">Laravel</strong> dan integrasi <strong className="text-amber-500 dark:text-sky-400 font-medium">JavaScript</strong> modern.
              </p>

              {/* Call to Actions (CTA) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2">
                <a 
                  href="#contact"
                  className="px-6 py-3.5 rounded-2xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-500 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 group"
                  id="cta-contact"
                >
                  Hubungi Yusuf
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </a>
                <a 
                  href="#projects"
                  className="px-6 py-3.5 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800/80 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xs"
                  id="cta-projects"
                >
                  Lihat Hasil Proyek
                </a>
              </div>

              {/* Stats highlights */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-slate-200/50 dark:border-slate-800/50 max-w-lg select-none">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-indigo-600 dark:text-sky-400">100%</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Kode Terstruktur & Responsif</p>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-indigo-600 dark:text-sky-400">4+</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Sertifikasi Kompetensi</p>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-indigo-600 dark:text-sky-400">4+</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Teknologi Inti Utama</p>
                </div>
              </div>

            </div>

            {/* Hero Right Visual Column - Card showcase mockups */}
            <div className="md:col-span-5 relative flex justify-center">
              
              <div className="relative w-full max-w-[380px] aspect-square rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xl flex flex-col justify-between overflow-hidden group">
                {/* Visual mesh pattern decor */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl group-hover:bg-sky-500/20 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all duration-500" />

                {/* Simulated Web Editor Card Header */}
                <div className="flex items-center justify-between pb-3 border-b border-rose-100/30">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-slate-200/55 dark:bg-slate-800/80 px-2.5 py-1 rounded-md">
                    afandi-tari-putra.sh
                  </span>
                </div>

                {/* Central code representation lines */}
                <div className="flex-1 flex flex-col justify-center gap-2.5 font-mono text-xs text-slate-600 dark:text-slate-300 py-4 select-none">
                  <div className="text-pink-500 font-semibold flex items-center gap-1">
                    <span>const </span>
                    <span className="text-slate-800 dark:text-sky-300">developer</span>
                    <span className="text-slate-500">=</span>
                    <span className="text-amber-500">{'{'}</span>
                  </div>
                  <div className="pl-4 flex items-center gap-2">
                    <span className="text-slate-500">nama:</span>
                    <span className="text-emerald-500 dark:text-emerald-400">{"\"Yusuf Afandi Tari Putra\""}</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="pl-4 flex items-center gap-2">
                    <span className="text-slate-500">keahlian:</span>
                    <span className="text-emerald-500 dark:text-emerald-400">{"[\"Laravel\", \"JS\", \"PHP\"]"}</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="pl-4 flex items-center gap-2">
                    <span className="text-slate-500">kondisi:</span>
                    <span className="text-amber-500">true</span>
                    <span className="text-slate-500 font-sans text-[11px] bg-sky-100 dark:bg-sky-950 px-1.5 py-0.5 rounded-sm dark:text-sky-300">Ready for hire</span>
                  </div>
                  <div className="text-pink-500 font-semibold flex items-center gap-1">
                    <span className="text-amber-500">{'}'}</span>
                  </div>
                </div>

                {/* Card footer metrics */}
                <div className="p-3 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200/40 dark:border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-500 font-mono">Status Sistem</span>
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Online & Aktif</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 font-mono">Lokasi</span>
                    <span className="text-xs font-semibold block text-slate-800 dark:text-slate-200">Jawa Timur, ID</span>
                  </div>
                </div>

              </div>

              {/* absolute visual decorations backing layout */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-600/10 rounded-full blur-xl pointer-events-none" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-sky-500/10 rounded-full blur-xl pointer-events-none" />

            </div>

          </div>
        </section>


        {/* ==========================================
            SKILL SECTION
            ========================================== */}
        <section 
          id="skill" 
          className="py-24 border-t border-slate-200/50 dark:border-slate-800/50 relative scroll-mt-20"
        >
          <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold font-mono tracking-widest uppercase text-indigo-600 dark:text-sky-400">Teknologi Inti</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-slate-900 dark:text-white">
              Keahlian & Penguasaan Teknologi
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Yusuf memprioritaskan pemahaman mendalam pada tumpukan teknologi modern untuk menghasilkan kode aplikasi web berkinerja tinggi yang aman, responsif, dan mudah dipelihara.
            </p>
          </div>

          {/* Sleek, Beautifully Bounded Technology Cards featuring Logos with Custom-Themed Borders */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 max-w-5xl mx-auto px-4">
            {[
              { 
                component: <HTML5Logo />, 
                name: "HTML5", 
                percentage: "95%", 
                cardStyle: "border-orange-500/30 dark:border-orange-500/20 hover:border-orange-500 hover:shadow-orange-500/10 hover:bg-orange-500/5 dark:hover:bg-orange-500/5 bg-orange-50/30 dark:bg-orange-950/5"
              },
              { 
                component: <CSS3Logo />, 
                name: "CSS3", 
                percentage: "90%", 
                cardStyle: "border-sky-500/30 dark:border-sky-500/20 hover:border-sky-500 hover:shadow-sky-500/10 hover:bg-sky-500/5 dark:hover:bg-sky-500/5 bg-sky-50/30 dark:bg-sky-950/5"
              },
              { 
                component: <JSLogo />, 
                name: "JavaScript", 
                percentage: "88%", 
                cardStyle: "border-yellow-500/30 dark:border-yellow-500/20 hover:border-yellow-500 hover:shadow-yellow-500/10 hover:bg-yellow-500/5 dark:hover:bg-yellow-500/5 bg-yellow-50/20 dark:bg-yellow-950/5"
              },
              { 
                component: <PHPLogo />, 
                name: "PHP Native", 
                percentage: "85%", 
                cardStyle: "border-indigo-500/30 dark:border-indigo-500/20 hover:border-indigo-500 hover:shadow-indigo-500/10 hover:bg-indigo-500/5 dark:hover:bg-indigo-500/5 bg-indigo-50/30 dark:bg-indigo-950/5"
              },
              { 
                component: <LaravelLogo />, 
                name: "Laravel", 
                percentage: "92%", 
                cardStyle: "border-red-500/30 dark:border-red-500/20 hover:border-red-500 hover:shadow-red-500/10 hover:bg-red-500/5 dark:hover:bg-red-500/5 bg-red-50/30 dark:bg-red-950/5"
              },
              { 
                component: <NextjsLogo />, 
                name: "Next.js", 
                percentage: "90%", 
                cardStyle: "border-slate-400/30 dark:border-slate-700/60 hover:border-slate-900 dark:hover:border-white hover:shadow-slate-500/10 hover:bg-slate-500/5 dark:hover:bg-white/5 bg-slate-50/30 dark:bg-slate-950/5"
              }
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className={`group flex flex-col items-center justify-center p-6 rounded-[2.5rem] border-[2px] shadow-xs transition-all duration-300 w-32 h-32 sm:w-40 sm:h-40 ${skill.cardStyle}`}
              >
                {/* Premium Inner Ring Border for the Logo */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[1.75rem] border border-slate-150 dark:border-slate-800/80 bg-white dark:bg-slate-950 flex items-center justify-center shadow-inner group-hover:border-transparent group-hover:shadow-[inset_0_-4px_12px_rgba(0,0,0,0.05)] transition-all duration-300">
                  <div className="transform transition-transform duration-300 group-hover:scale-110">
                    {skill.component}
                  </div>
                </div>

                <span className="mt-3 text-[11px] sm:text-xs font-mono font-bold text-slate-700 dark:text-slate-300 group-hover:text-slate-950 dark:group-hover:text-white transition-colors">
                  {skill.name}
                </span>
                
                <span className="text-[9px] font-mono font-semibold tracking-wider text-slate-400 dark:text-slate-550 mt-0.5">
                  {skill.percentage}
                </span>
              </motion.div>
            ))}
          </div>
        </section>


        {/* ==========================================
            PROJECTS SECTION
            ========================================== */}
        <section 
          id="projects" 
          className="py-24 border-t border-slate-200/50 dark:border-slate-800/50 relative scroll-mt-20"
        >
          <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold font-mono tracking-widest uppercase text-indigo-600 dark:text-sky-400">Katalog Karya</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-slate-900 dark:text-white">
              Karya & Proyek Terpilih
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Rangkuman fungsional dari aplikasi web berdaya guna tinggi yang dirancang khusus oleh Yusuf Afandi untuk memecahkan problematika digital.
            </p>
          </div>

          {/* Project Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS_DATA.map((project) => (
              <div 
                key={project.id}
                className="group relative bg-white dark:bg-slate-900/60 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden"
              >
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-600/5 rounded-full blur-xl group-hover:bg-indigo-600/10 transition-all duration-300" />
                
                <div>
                  {/* High Quality Project Screen Showcase */}
                  <div 
                    onClick={() => setSelectedProject(project)}
                    className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-slate-150 dark:border-slate-800/80 bg-slate-100 dark:bg-slate-950/45 cursor-pointer mb-5 shadow-inner transition-all duration-300 group-hover:border-indigo-500/20 dark:group-hover:border-sky-500/30"
                  >
                    <Image 
                      src={project.imageUrl} 
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-103 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <span className="text-xs font-semibold text-white bg-slate-900/90 px-3.5 py-2 rounded-xl border border-white/10 flex items-center gap-1.5 backdrop-blur-xs shadow-md">
                        <Eye className="w-4 h-4 text-indigo-400 dark:text-sky-400" />
                        Pratinjau Proyek
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-850 text-slate-600 dark:text-slate-400">
                      {project.category}
                    </span>
                    <span className="text-xs font-semibold text-indigo-600 dark:text-sky-400 font-mono">
                      {project.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-slate-950 dark:text-white mb-2.5">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techs.map((t, idx) => (
                      <span 
                        key={idx}
                        className="text-[10px] font-mono tracking-wide px-2.5 py-1 bg-slate-100/60 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-800/80 rounded-md text-slate-600 dark:text-slate-350"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/40 dark:border-slate-800/40 flex items-center justify-between">
                  {/* Button to show detail modal */}
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-sky-400 flex items-center gap-1.5 transition-colors group/btn"
                    id={`view-detail-${project.id}`}
                  >
                    Pelajari Fungsionalitas 
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </section>


        {/* ==========================================
            CERTIFICATE SECTION
            ========================================== */}
        <section 
          id="certificates" 
          className="py-24 border-t border-slate-200/50 dark:border-slate-800/50 relative scroll-mt-20"
        >
          <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold font-mono tracking-widest uppercase text-indigo-600 dark:text-sky-400">Legitimasi Kompetensi</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-slate-900 dark:text-white">
              Sertifikasi Profesional
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Rangkaian sertifikasi industri yang berhasil diraih Yusuf Afandi sebagai penjamin mutu pengerjaan rekayasa lunak web.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATES_DATA.map((cert) => (
              <div 
                key={cert.id}
                className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 p-5 rounded-2xl flex flex-col justify-between hover:shadow-md transition-all h-full"
              >
                {/* Visual Seal Emblem in decor background of certificatecard */}
                <div className="absolute top-4 right-4 text-indigo-500/5 dark:text-sky-400/5 group-hover:text-amber-500/10 select-none pointer-events-none transition-colors">
                  <Award className="w-14 h-14" />
                </div>

                <div className="flex flex-col gap-3">
                  {/* High Quality Certificate Preview Image */}
                  <div 
                    onClick={() => setSelectedCert(cert)}
                    className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-slate-150 dark:border-slate-800 bg-slate-100 dark:bg-slate-950/40 cursor-pointer"
                  >
                    <Image 
                      src={cert.imageUrl} 
                      alt={cert.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <span className="text-[10px] font-semibold text-white bg-slate-900/80 px-2.5 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5 backdrop-blur-xs">
                        <Eye className="w-3.5 h-3.5" />
                        Pratinjau
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-7 h-7 rounded-lg bg-orange-500/5 dark:bg-orange-500/10 flex items-center justify-center text-orange-600 dark:text-amber-400 shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono tracking-wider font-semibold uppercase">SERTIFIKAT RESMI</span>
                  </div>

                  <h3 className="font-display font-bold text-sm text-slate-950 dark:text-white leading-snug group-hover:text-indigo-600 dark:group-hover:text-sky-400 transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-450 font-medium font-sans leading-relaxed">
                    {cert.issuer}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/40 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-400">Pemberian:</span>
                    <span className="text-slate-600 dark:text-slate-350">{cert.date}</span>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedCert(cert)}
                    className="w-full text-center py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-950 dark:hover:text-white text-slate-600 dark:text-slate-400 text-xs font-semibold transition-all"
                    id={`open-cert-${cert.id}`}
                  >
                    Verifikasi Sertifikat
                  </button>
                </div>

              </div>
            ))}
          </div>
        </section>


        {/* ==========================================
            CONTACT / HUBUNGI SAYA SECTION
            ========================================== */}
        <section 
          id="contact" 
          className="py-24 border-t border-slate-200/50 dark:border-slate-800/50 relative scroll-mt-20"
        >
          <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold font-mono tracking-widest uppercase text-indigo-600 dark:text-sky-400">Mulai Kolaborasi</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-slate-900 dark:text-white">
              Hubungi Yusuf Afandi
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Diskusikan tawaran pekerjaan, peluang kerja sama bisnis, riset bersama, atau jembatani ide startup digital Anda bersama Yusuf.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Layout Side A: Channels, Bios & Quick Contacts */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 dark:bg-sky-500/20 flex items-center justify-center text-sky-500">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white">Presensi Fisik</h4>
                    <p className="text-xs text-slate-500 font-mono">Lokasi Kantor & Hunian</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-450 leading-relaxed font-sans mt-1">
                  Menetap di Jawa Timur, Indonesia. Terbuka penuh untuk model penugasan interaksi hibrida (Hybrid), kerja mandiri dari rumah (WFH Remote), atau penugasan langsung di kantor fisik wilayah metropolitan Surabaya / Jakarta.
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 font-mono mt-2 select-none">
                  <MapPin className="w-4 h-4 text-rose-500" />
                  <span>Jawa Timur, Indonesia</span>
                </div>
              </div>

              {/* Direct channels List */}
              <div className="flex flex-col gap-3">
                
                <a 
                  href="mailto:afandiy138@gmail.com" 
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800/80 hover:border-indigo-400 transition-all flex items-center justify-between"
                  id="direct-email"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-500">
                      <Mail className="w-4.5 h-4.5" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] text-slate-500 font-mono">Saluran Surel</span>
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">afandiy138@gmail.com</span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a 
                  href="https://wa.me/6281234567890" 
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800/80 hover:border-indigo-400 transition-all flex items-center justify-between"
                  id="direct-whatsapp"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                      <Phone className="w-4.5 h-4.5" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] text-slate-500 font-mono">WhatsApp Bisnis</span>
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">+62 812-3456-7890</span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <div className="flex gap-3 mt-1 select-none">
                  <a 
                    href="https://github.com" 
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="flex-1 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 text-slate-700 dark:text-slate-300 flex items-center justify-center gap-2 text-xs font-bold font-sans"
                    id="social-github"
                  >
                    <Github className="w-4 H-4" />
                    GitHub
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="flex-1 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 text-slate-700 dark:text-slate-300 flex items-center justify-center gap-2 text-xs font-bold font-sans"
                    id="social-linkedin"
                  >
                    <Linkedin className="w-4 h-4 text-blue-500" />
                    LinkedIn
                  </a>
                </div>

              </div>

            </div>

            {/* Contact Layout Side B: Premium selection (Inquiry form) */}
            <div className="lg:col-span-8">
              
              <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col min-h-[500px]">
                
                {/* Control Tab Bar (Simplified header instead of tabs) */}
                <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/30 select-none">
                  <div className="p-2 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/15 text-indigo-600 dark:text-sky-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 font-sans">Kirim Pesan Konvensional</h4>
                    <p className="text-[10px] text-slate-500 font-mono">Hubungi Yusuf Secara Langsung</p>
                  </div>
                </div>

                {/* Form content viewer */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="flex-1 flex flex-col justify-between">
                    <AnimatePresence mode="wait">
                      {!formSubmitted ? (
                        <motion.form 
                          key="contact-form"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          onSubmit={handleFormSubmit}
                          className="space-y-4"
                        >
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                              <label className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 font-mono">NAMA LENGKAP</label>
                              <input 
                                type="text"
                                required
                                value={formName}
                                onChange={(e) => setFormName(e.target.value)}
                                placeholder="Ketik nama Anda..."
                                className="text-xs px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 outline-none focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-950 transition-all font-sans"
                              />
                            </div>
                            <div className="flex flex-col gap-1.5">
                              <label className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 font-mono">ALAMAT SUREL (EMAIL)</label>
                              <input 
                                type="email"
                                required
                                value={formEmail}
                                onChange={(e) => setFormEmail(e.target.value)}
                                placeholder="nama@alamat.com"
                                className="text-xs px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 outline-none focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-950 transition-all font-sans"
                              />
                            </div>
                          </div>

                          <div className="flex flex-col gap-1.5">
                            <label className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 font-mono">SUBJEK HUBUNGAN</label>
                            <input 
                              type="text"
                              value={formSubject}
                              onChange={(e) => setFormSubject(e.target.value)}
                              placeholder="Lowongan Pekerjaan / Konsultasi Sistem / Penawaran Kerjasama"
                              className="text-xs px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 outline-none focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-950 transition-all font-sans"
                            />
                          </div>

                          <div className="flex flex-col gap-1.5">
                            <label className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 font-mono">ISI PESAN TERMULIA</label>
                            <textarea 
                              rows={4}
                              required
                              value={formMessage}
                              onChange={(e) => setFormMessage(e.target.value)}
                              placeholder="Ketik rincian pesan atau undangan diskusi Anda di sini..."
                              className="text-xs px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 outline-none focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-950 transition-all font-sans resize-none"
                            />
                          </div>

                          <button
                            type="submit"
                            disabled={isFormSending}
                            className="w-full py-3.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs text-center flex items-center justify-center gap-2 hover:bg-indigo-500 transition-colors disabled:bg-indigo-300 animate-none cursor-pointer"
                            id="submit-form-btn"
                          >
                            {isFormSending ? "Mengirimkan Pesan..." : "Kirimkan Pesan Anda Sekarang"}
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </motion.form>
                      ) : (
                        // Physical simulated receipt invoice showing success parameters
                        <motion.div 
                          key="form-success"
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="p-6 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/60 text-center flex flex-col justify-center items-center gap-4 py-12"
                        >
                          <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                            <Check className="w-6 h-6" />
                          </div>
                          <h4 className="font-display font-bold text-lg text-emerald-800 dark:text-emerald-400">
                            Pesan Anda Sukses Terkirim!
                          </h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
                            Terima kasih, <strong>{formName}</strong>. Simulasi receipt rincian data Anda telah tercatat dengan baik. Yusuf Afandi atau sistem pendukung administrasi kami akan mengkaji isi pesan Anda dalam waktu ringkas.
                          </p>
                          
                          {/* Receipt parameters info */}
                          <div className="w-full max-w-sm rounded-[10px] bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-4 font-mono text-[10px] text-left text-slate-500 space-y-1 mt-4 select-none">
                            <div className="text-slate-800 dark:text-slate-350 font-bold border-b pb-1 mb-2 text-center text-xs">OFFICIAL SUBMISSION RECEIPT</div>
                            <div><span className="text-slate-400">PENGIRIM:</span> {formName}</div>
                            <div><span className="text-slate-400">EMAIL:</span> {formEmail}</div>
                            <div><span className="text-slate-400">SUBJEK:</span> {formSubject || "-"}</div>
                            <div><span className="text-slate-400">STATUS:</span> COMPLETED (SUCCESS)</div>
                            <div className="border-t pt-2 mt-2 text-center text-[9px] text-slate-400">TERIMA KASIH ATAS KUNJUNGAN ANDA</div>
                          </div>

                          <button 
                            onClick={() => {
                              setFormSubmitted(false);
                              setFormName("");
                              setFormEmail("");
                              setFormSubject("");
                              setFormMessage("");
                            }}
                            className="mt-6 px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 transition-colors cursor-pointer"
                            id="reset-form-btn"
                          >
                            Kirim Pesan Baru
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

      </main>

      {/* ==========================================
          FOOTER COMPONENT
          ========================================== */}
      <footer className="border-t border-slate-200/50 dark:border-slate-800/100 bg-white dark:bg-slate-950 py-12 relative z-10 select-none">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-sm font-bold">Y</div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-bold font-display text-slate-900 dark:text-white leading-tight">Yusuf Afandi Tari Putra</span>
              <span className="text-[10px] text-slate-500 font-mono mt-0.5">Yusuf Portfolio v1.0.0</span>
            </div>
          </div>

          <p className="text-xs text-slate-500 font-sans text-center sm:text-right">
            &copy; 2026 Yusuf Afandi Tari Putra. Semua hak cipta dilindungi undang-undang. Built with Next.js & Tailwind.
          </p>
        </div>
      </footer>

      {/* ==========================================
          MODALS VIEWERS FOR DETAILED EXPLORATIONS (PROJECTS)
          ========================================== */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 pointer-events-auto"
            />
            {/* Modal Body Container */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="fixed inset-y-0 inset-x-4 sm:inset-x-0 sm:max-w-2xl sm:mx-auto h-fit my-auto max-h-[92vh] bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 z-55 flex flex-col justify-between overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-150 dark:border-slate-800 mb-6 shrink-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono bg-indigo-500/10 text-indigo-600 px-3 py-1 rounded-sm">DETIL STRUKTUR PROYEK</span>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-1 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-600"
                  id="close-project-modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* High Quality Project Screen Showcase inside Modal */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-slate-150 dark:border-slate-800 bg-slate-100 dark:bg-slate-950/40 shadow-inner mb-6 shrink-0">
                <Image 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-col gap-4 text-left">
                <h3 className="font-display font-bold text-2xl text-slate-950 dark:text-white">
                  {selectedProject.title}
                </h3>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-1.5 py-1">
                  {selectedProject.techs.map((t, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-350">{t}</span>
                  ))}
                </div>

                {/* Scope accomplishment listings */}
                <div className="space-y-3 mt-2">
                  <h4 className="text-xs font-bold font-mono text-indigo-600 dark:text-sky-450 tracking-wide uppercase">Cakupan Keberhasilan Rekayasa:</h4>
                  <ul className="space-y-2.5">
                    {selectedProject.details.map((detail, idx) => (
                      <li key={idx} className="flex gap-2.5 text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-150 dark:border-slate-800/80 flex flex-col sm:flex-row gap-2 justify-end select-none">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300"
                >
                  Tutup Tinjauan
                </button>
                <a 
                  href="#contact" 
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-bold text-white text-center"
                >
                  Tanyakan Terkait Sistem Ini &rarr;
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ==========================================
          MODALS VIEWERS FOR DETAILED EXPLORATIONS (CERTIFICATES)
          ========================================== */}
      <AnimatePresence>
        {selectedCert && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 pointer-events-auto"
            />
            {/* Modal Body Container */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="fixed inset-y-0 inset-x-4 sm:inset-x-0 sm:max-w-2xl sm:mx-auto h-fit my-auto max-h-[92vh] bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 z-55 flex flex-col justify-between overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-150 dark:border-slate-800/60 mb-6 shrink-0">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-sky-400">
                  <Award className="w-5 h-5" />
                  <span className="text-xs font-mono font-bold">VERIFIKASI DIGITAL BNSP / DEVEL</span>
                </div>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="p-1 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-600"
                  id="close-cert-modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Actual Certificate High Fidelity Image Preview */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 shadow-inner mb-6 shrink-0">
                <Image 
                  src={selectedCert.imageUrl} 
                  alt={selectedCert.title}
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Digital Certificate Layout Representation - Frame styled */}
              <div className="border-4 border-double border-slate-200 dark:border-slate-800 p-6 rounded-2xl bg-amber-500/5 dark:bg-slate-950 text-center relative select-none">
                
                {/* Micro branding stamp decoration in bg of certificate frame */}
                <div className="absolute inset-0 flex items-center justify-center opacity-5 dark:opacity-10 pointer-events-none">
                  <Award className="w-56 h-56 text-indigo-500" />
                </div>

                <span className="text-[10px] font-mono tracking-widest text-slate-400 block mb-2 uppercase">SERTIFIKAT KELULUSAN RESMI</span>
                
                <h3 className="font-display font-black text-lg sm:text-xl text-slate-900 dark:text-white mb-1 tracking-tight leading-snug">
                  {selectedCert.title}
                </h3>
                
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-4">{selectedCert.issuer}</p>

                <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-4" />

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans max-w-md mx-auto">
                  Diberikan secara layak kepada pengembang atas keberhasilan kelulusan kurikulum komparatif penguji dengan Kode Kredensial unik:
                </p>

                <p className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold bg-amber-500/10 dark:bg-amber-500/15 py-1.5 px-4 rounded-lg w-fit mx-auto my-4 border border-amber-500/20">
                  ID: {selectedCert.idCredential}
                </p>

                <div className="text-left space-y-2.5 max-w-md mx-auto pt-4 border-t border-slate-200/50 dark:border-slate-800/80">
                  <span className="text-[10px] font-bold font-mono tracking-wide text-slate-400 block">MATERI DAN METODOLOGI KOMPETENSI:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCert.skillsTaught.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="text-[10px] font-medium font-sans px-2.5 py-1 rounded-md bg-stone-100 dark:bg-slate-900 border border-slate-200/30 text-slate-600 dark:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              <div className="mt-8 pt-4 border-t border-slate-150 dark:border-slate-800/80 flex justify-end select-none">
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300"
                >
                  Selesai Memeriksa
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}
