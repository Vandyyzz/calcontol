import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

// Lazy initialization pattern to prevent crashes at module load/build time
let aiClient: GoogleGenAI | null = null;
function getAiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not defined");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid request payload. Messages array is required." },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { text: "Halo! Saya adalah AI Asisten Yusuf. Sayangnya, kunci API Gemini belum dikonfigurasi di server, tetapi saya bisa memberi tahu Anda bahwa Yusuf adalah developer luar biasa yang menguasai HTML, CSS, JavaScript, PHP, dan Laravel!" },
        { status: 200 }
      );
    }

    // Lazy initialization happens here to guarantee key exists
    const ai = getAiClient();

    // Format chat history to match Gemini SDK expectations or we can construct a prompt
    // For simplicity, we can feed the conversation history as a context prompt or use the chat API
    // Let's build a unified prompt that represents the chat history
    let contextPrompt = `Anda adalah AI Asisten Portofolio resmi untuk Yusuf Afandi Tari Putra.
Yusuf adalah seorang Full-Stack Web Developer yang berbakat dari Indonesia.
Detail data diri Yusuf:
- Nama Lengkap: Yusuf Afandi Tari Putra
- Keahlian Utama: HTML, CSS, JavaScript (React, Next.js), PHP (Native, CodeIgniter), dan Laravel (MVC, RESTful API).
- Karakter & Karir: Profesional, adaptif, komunikatif, senang belajar teknologi baru, dan berorientasi pada kualitas kode.
- Proyek Unggulan:
  1. "Sistem Informasi Manajemen Sekolah" (Laravel + JS + Tailwind) - Dashboard interaktif untuk guru, siswa, dan orang tua.
  2. "Platform E-Commerce UMKM" (PHP Native + Tailwind) - Membantu pedagang lokal menjual produk dengan lancar.
  3. "Aplikasi Kontak & Manajemen Tugas" (JavaScript + CSS Grid) - Mengoptimalkan produktivitas tim.
- Sertifikasi:
  1. "Laravel Web Developer Expert" (Dicoding)
  2. "Junior Web Developer" (LSP Kominfo / BNSP)
  3. "Responsive Web Design" (freeCodeCamp)
  4. "JavaScript Algorithms and Data Structures" (freeCodeCamp)

Gunakan nada bicara yang sopan, profesional, ramah, dan solutif. Jawab pertanyaan dalam bahasa Indonesia yang baik, santun, dan singkat (maksimal 2-3 paragraf). Tawarkan bantuan untuk mengubungi Yusuf secara langsung atau melihat proyeknya.

Berikut adalah riwayat percakapan dengan pengunjung:
`;

    // Append history
    for (const msg of messages) {
      const label = msg.role === 'user' ? 'Jawaban/Pertanyaan Pengunjung' : 'Respon Anda (AI Asisten)';
      contextPrompt += `\n${label}: ${msg.content}`;
    }

    // Add final instruction
    contextPrompt += `\nRespon Anda (AI Asisten):`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contextPrompt,
    });

    return NextResponse.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { error: "Gagal memproses permintaan Anda ke AI Asisten." },
      { status: 500 }
    );
  }
}
