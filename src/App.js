import React, { useState, useEffect, useRef } from "react";
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const cv = {
  name: "Muhamad Alfito Ramadhan",
  email: "Muhamadalfito12@gmail.com",
  phone: "+6288211762079",
  location: "North Bekasi",
  summary: "Lulusan Ilmu Komunikasi (IPK: 3,54/4,00) yang ahli di bidang produksi media dan manajemenacara. Memiliki pengalaman sebagai Director, Kameramen, dan Editor dalam produksi film semidokumenter. Terlatih dalam kepemimpinan dan manajemen proyek sebagai Ketua PelaksanaWorkshop Penyiaran. Didukung oleh keahlian teknis (Google Workspace, Microsoft Office, Canva, CapCut, VN) serta unggul dalam Komunikasi Efektif, Kolaborasi Tim, Kreativitas, dan PemecahanMasalah.",
  education: [
    { title: "Bachelor of Communications Sciences", school: "Gunadarma University", date: "2024 – Expected 2025", gpa: "3.54/4.00" },
    { title: "Diploma in Public Relations", school: "Akmrtv Jakarta University", date: "2021 – 2023", gpa: "3.62/4.00" },
  ],
  experience: [
    {
      role: "Magang – PT Serasi Shipping Indonesia",
      date: "Sept 2, 2024 – Des 2, 2024",
      bullets: [
        "Menyiapkan dokumen administratif untuk keperluan pengajuan ke Kantor Imigrasi.",
        "Berpartisipasi dalam kegiatan sandar dan lepas kapal untuk kelancaran operasional.",
        "Membuat laporan berkala status kedatangan dan keberangkatan kapal.",
      ],
      docs: [
        "/serasi 1.jpg",
        "/serasi 2.jpg",
        "/serasi 3.jpg"
      ]
    },
    {
      role: "Magang Reporter – TVR Parlemen DPR RI",
      date: "Jul 3, 2023 – Sep 3, 2023",
      bullets: [
        "Menyusun daftar pertanyaan dan melakukan peliputan langsung.",
        "Menyusun transkrip wawancara dan merangkai berita berdasarkan data lapangan.",
      ],
      docs: [
        "/Dpr 1.PNG",
        "/Dpr 2.jpg",
        "/Dpr 3.jpg",
        "/Dpr 4.jpg",
      ]
    },
    {
      role: "Anggota Divisi Sumber Daya Manusia – BEM Universitas Akmrtv Jakarta",
      date: "Januari, 2023 – Januari, 2024",
      bullets: [
        "Menyelenggarakan kegiatan orientasi dan pengenalan kampus (MPLS) bagi mahasiswa baru.",
        "Melaksanakan proses rekrutmen anggota baru untuk mendukung regenerasi pengurus BEM.",
        "Mengelola evaluasi dan pengembangan anggota guna meningkatkan kinerja organisasi serta berkoordinasi dengan divisi lain untuk membangun kerja sama internal yang solid.",
      ],
      docs: [
        "/Bem.PNG", 
      ]
    },
    {
      role: "Wakil Ketua – UKM Glo Radio Akmrtv Jakarta",
      date: "Maret, 2023 – Maret, 2024",
      bullets: [
        "Mendampingi dan membantu Ketua UKM dalam menjalankan seluruh kegiatan organisasi serta mengambil alih tanggung jawab kepemimpinan ketika Ketua berhalangan.",
        "Mengawasi kinerja setiap divisi (penyiaran, produksi, publikasi, dan humas) agar program kerja berjalan sesuai jadwal dan tujuan organisasi.",
        "Membimbing anggota baru dalam memahami dunia penyiaran serta menginisiasi pelatihan dan workshop untuk meningkatkan kemampuan broadcasting dan produksi.",
      ],
      docs: [
        "/IMG_0214.jpeg", 
      ]
    },
  ],
  projects: [
    {
      title: "Penanggung Jawab – Bonding Festival \"Champion Spirit: Breaking the Limits\"",
      role: "Project Leader",
      date: "November 2023",
      desc: "Bertanggung jawab mengatur jalannya event, mulai dari perencanaan timeline, koordinasi lapangan dan wasit, hingga pengelolaan tim agar acara berjalan lancar.",
      image: "/bonding.jpg",
      docs: [
        "/bonding1.jpg",
      ],
    },
    {
      title: "Produksi Film Semi dokumenter: Menyusuri Jejak Rotan",
      role: "Director, Kameramen & Editor",
      date: "Juli 2024",
      desc: "Berhasil mengembangkan konsep, pengambilan video, dan penyuntingan menjadi karya semi dokumenter.",
      image: "/menyusuri jejak rotan 2.jpg",
      trailer: "/vidio menyusuri jejak rotan.mp4  ",
      docs: [
            "/IMG_0269.jpg",
            "/IMG_0262.jpg ",
            "/mjr1.jpg ",
      ]
    },
    {
      title: "Workshop Glo Radio: How To Be A Good Announcer",
      role: "Ketua Pelaksana",
      date: "Februari 2023",
      desc: "Berhasil Memimpin pelaksanaan sesuai timeline workshop dengan dihadiri oleh 50+ peserta",
      image: "glo.PNG",
    },
    {
      title: "Talkshow The Eight Show \"Achievements of Basketball Athletes\"",
      role: "Kameramen & Editor", 
      date: "November 2024",
      desc: "melakukan proses pengambilan gambar selama pelaksanaan talkshow serta melakukan penyuntingan video dan menghasilkan tayangan yang menarik di youtube.",
      image: "/latar depan talkshow.jpg",
      trailer: "https://www.youtube.com/embed/efDnVJS57sc",
     docs: [
            "/dokum talkshow.png",
            "/dokum talkshow 2.jpg",
            
      ]
    },
  ],
  skills: {
    technical: [
      { name: "Google Workspace", level: 95 },
      { name: "Microsoft Office", level: 90 },
      { name: "Canva", level: 85 },
      { name: "CapCut", level: 80 },
      { name: "VN", level: 80 }
    ],
    soft: [
      { name: "Effective Communication", level: 95 },
      { name: "Team Collaboration", level: 90 },
      { name: "Time Management", level: 88 },
      { name: "Creativity", level: 85 },
      { name: "Responsibility", level: 92 }
    ],
  },
  certificates: [
    { id: 1, title: "Magang PT.Serasi Shipping Indonesia", issuer: "Port Agency", date: "September 2024", image: "/sertif 1.PNG" },
    { id: 2, title: "Magang TVR Parlemen DPR RI", issuer: "Divisi Reporter", date: "Juli 2023", image:"/sertfif 2.PNG" },
    { id: 3, title: "BEM Universitas Akmrtv Jakarta", issuer: "Anggota Sumber Daya Masyarakat", date: "2023", image: "/sertif 3.JPG" },
    { id: 4, title: "UKM Glo Radio Akmrtv Jakarta", issuer: "Wakil Ketua", date: "2023", image: "/sertif 4.jpg" },
     { id: 5, title: "Workshop Glo Radio", issuer: "Ketua Pelaksana", date: "2023", image: "/sertif 5.png" },
  ]
};

export default function App() {
  const [dark, setDark] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  // removed unused isFlipped / isAnimating to satisfy ESLint `no-unused-vars`

  const [navOpen, setNavOpen] = useState(false);
  const [modalProject, setModalProject] = useState(null);
  const [modalType, setModalType] = useState(null);
  const skillRefs = useRef([]);
  const [skillsInView, setSkillsInView] = useState({
    technical: Array(cv.skills.technical.length).fill(false),
    soft: Array(cv.skills.soft.length).fill(false),
  });



  const handleSubmit = (e) => {
    e.preventDefault();
    
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const subject = e.target.elements.subject.value;
    const message = e.target.elements.message.value;

    const formattedMessage = `
🌟 *NEW MESSAGE FROM WEBSITE* 🌟

👤 *Sender Details*
━━━━━━━━━━━━━━━
• Name: ${name}
• Email: ${email}

📋 *Message Information*
━━━━━━━━━━━━━━━
• Subject: ${subject}

💬 *Message Content*
━━━━━━━━━━━━━━━
${message}

━━━━━━━━━━━━━━━
📱 Sent via Portfolio Website
⏰ ${new Date().toLocaleString()}`.trim();

    const whatsappUrl = `https://wa.me/${cv.phone.replace(/\D/g, '')}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-in-out-cubic',
      offset: 60,
    });
  }, []);

  // First useEffect with AOS event listener
  useEffect(() => {
    const handleAosEvent = (e) => {
      if (e.detail && e.detail.classList) {
        cv.skills.technical.forEach((_, idx) => {
          if (e.detail.classList.contains(`skill-technical-${idx}`)) {
            setSkillsInView((prev) => ({
              ...prev,
              technical: prev.technical.map((v, i) => (i === idx ? true : v)),
            }));
          }
        });
        cv.skills.soft.forEach((_, idx) => {
          if (e.detail.classList.contains(`skill-soft-${idx}`)) {
            setSkillsInView((prev) => ({
              ...prev,
              soft: prev.soft.map((v, i) => (i === idx ? true : v)),
            }));
          }
        });
      }
    };
    window.addEventListener('aos:in', handleAosEvent);
    return () => window.removeEventListener('aos:in', handleAosEvent);
  }, []); // Remove cv.skills dependencies since they're static

  // Second useEffect with IntersectionObserver
  useEffect(() => {
    if (!window.IntersectionObserver) return;

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cv.skills.technical.forEach((_, idx) => {
              if (entry.target.classList.contains(`skill-technical-${idx}`)) {
                setSkillsInView((prev) => ({
                  ...prev,
                  technical: prev.technical.map((v, i) => (i === idx ? true : v)),
                }));
              }
            });
            cv.skills.soft.forEach((_, idx) => {
              if (entry.target.classList.contains(`skill-soft-${idx}`)) {
                setSkillsInView((prev) => ({
                  ...prev,
                  soft: prev.soft.map((v, i) => (i === idx ? true : v)),
                }));
              }
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    skillRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []); // Remove cv.skills dependencies since they're static

  return (
    <div className={`${dark ? "dark" : ""}`}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
        
        {/* Navigation */}
        <header className="fixed top-0 left-0 right-0 backdrop-blur-lg bg-white/95 dark:bg-gray-900/95 z-50 border-b border-gray-200/50 dark:border-gray-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="font-bold text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Muhamad Alfito R.
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              {['experience', 'projects', 'skills', 'certificates', 'contact'].map((section) => (
                <a 
                  key={section}
                  href={`#${section}`}
                  className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize"
                >
                  {section}
                </a>
              ))}
              <button 
                onClick={() => setDark(!dark)} 
                className="p-2 md:p-3 rounded-xl md:rounded-2xl border border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all duration-300 hover:scale-110 bg-white dark:bg-gray-800"
              >
                {dark ? "☀️" : "🌙"}
              </button>
            </nav>

            <div className="flex items-center gap-2 md:hidden">
              <button 
                onClick={() => setDark(!dark)} 
                className="p-2 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all duration-300 bg-white dark:bg-gray-800"
              >
                {dark ? "☀️" : "🌙"}
              </button>
              <button
                className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                onClick={() => setNavOpen(!navOpen)}
                aria-label="Open navigation"
              >
                <svg className="w-5 h-5 text-gray-700 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={navOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
                </svg>
              </button>
            </div>
          </div>

          {navOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 py-3">
              <nav className="flex flex-col gap-3">
                {['experience', 'projects', 'skills', 'certificates', 'contact'].map((section) => (
                  <a
                    key={section}
                    href={`#${section}`}
                    className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                    onClick={() => setNavOpen(false)}
                  >
                    {section}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </header>

        {/* Hero Section dengan Flip Card yang Diperbaiki */}
        <section className="pt-28 pb-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-medium shadow-lg border border-blue-200 dark:border-blue-700"
                data-aos="fade-down"
              >
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                Available for new opportunities
              </div>

              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                data-aos="fade-up"
              >
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent block">
                  {cv.name.split(' ')[0]}
                </span>
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block">
                  {cv.name.split(' ').slice(1).join(' ')}
                </span>
              </h1>
              
              <p
                className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Communications Strategist · Operational Excellence
              </p>

              <p
                className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                {cv.summary}
              </p>

              <div
                className="flex flex-col sm:flex-row gap-3 pt-4 z-10 relative"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <button 
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
                >
                  <span>Start Conversation</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>

              <div className="pt-4" data-aos="fade-up" data-aos-delay="800">
                <div className="flex flex-wrap gap-2">
                  {['Administrative Support', 'Operational Coordination', 'Media Production'].map((skill) => (
                    <div key={skill} className="px-3 py-1.5 rounded-full bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-xs font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 text-gray-700 dark:text-gray-300">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Flip Card - Versi Diperbaiki */}
           <div
  className="flex items-center justify-center mt-6 lg:mt-0 px-4 sm:px-0"
  data-aos="zoom-in-up"
  data-aos-delay="400"
>
  <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-sm md:max-w-md h-72 xs:h-80 sm:h-96 group">
    
    {/* Main Card Container */}
    <div className="relative w-full h-full rounded-2xl xs:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-3">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-700 to-pink-600"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20 xs:opacity-30">
        <div className="absolute -top-12 -right-12 xs:-top-16 xs:-right-16 w-24 h-24 xs:w-32 xs:h-32 bg-white/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute -bottom-12 -left-12 xs:-bottom-16 xs:-left-16 w-20 h-20 xs:w-28 xs:h-28 bg-white/20 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 xs:via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      
      {/* Card Content */}
      <div className="relative h-full p-4 xs:p-5 sm:p-6 md:p-8 flex flex-col items-center justify-center text-white z-10">
        
        {/* Profile Image Container */}
        <div className="relative mb-4 xs:mb-5 sm:mb-6 group/image">
          {/* Outer Glow */}
          <div className="absolute -inset-2 xs:-inset-3 sm:-inset-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 rounded-full opacity-40 xs:opacity-50 blur-lg xs:blur-xl group-hover/image:opacity-60 xs:group-hover/image:opacity-70 transition-all duration-500"></div>
          
          {/* Image Frame */}
            <div className="relative w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-36 md:w-36 md:h-40 rounded-xl xs:rounded-2xl border-[3px] xs:border-[4px] border-white/90 shadow-lg xs:shadow-xl sm:shadow-2xl overflow-hidden backdrop-blur-sm">
              <img
                src="/foto profil.jpg"
                alt="Muhamad Alfito Ramadhan"
                className="w-full h-full object-cover transform group-hover/image:scale-105 transition-transform duration-700"
              />
              
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Online Status Badge */}
            <div className="absolute -bottom-2 -right-2 xs:-bottom-2 xs:-right-2 w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-[2px] xs:border-[3px] border-white shadow-md xs:shadow-lg flex items-center justify-center">
              <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Name & Title */}
        <div className="text-center space-y-2 xs:space-y-2.5 sm:space-y-3 mb-4 xs:mb-5 sm:mb-6">
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold xs:font-black bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent leading-tight">
            Muhamad Alfito Ramadhan
          </h2>
          <div className="flex items-center justify-center gap-1.5 xs:gap-2">
            <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
            <p className="text-white/80 font-medium xs:font-semibold text-xs xs:text-sm sm:text-base tracking-wide">
              Communications Professional
            </p>
          </div>
        </div>

        {/* Skills Badges */}
        <div className="flex flex-wrap gap-1.5 xs:gap-2 justify-center">
          {cv.skills.technical.slice(0, 3).map((skill, idx) => (
            <span 
              key={idx}
              className="px-2.5 py-1 xs:px-3 xs:py-1.5 bg-white/20 backdrop-blur-sm text-white/90 rounded-full text-[10px] xs:text-xs font-medium xs:font-semibold border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105"
            >
              {skill.name}
            </span>
          ))}
        </div>

      </div>

      {/* Floating Elements - Hidden on smallest screens */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden xs:block">
        <div className="w-2 h-2 xs:w-3 xs:h-3 bg-yellow-400 rounded-full animate-bounce"></div>
      </div>
      
      <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 hidden xs:block">
        <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
      </div>
    </div>

    {/* Outer Glow Effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-2xl xs:rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
    
    {/* Corner Decorations - Hidden on mobile */}
    <div className="absolute -top-0.5 -left-0.5 w-4 h-4 border-t-2 border-l-2 border-blue-400/50 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:block"></div>
    <div className="absolute -top-0.5 -right-0.5 w-4 h-4 border-t-2 border-r-2 border-purple-400/50 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 hidden sm:block"></div>
    <div className="absolute -bottom-0.5 -left-0.5 w-4 h-4 border-b-2 border-l-2 border-pink-400/50 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 hidden sm:block"></div>
    <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 border-b-2 border-r-2 border-cyan-400/50 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 hidden sm:block"></div>
  </div>
</div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 mb-6">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
                <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Career Timeline</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-4">
                Professional Journey
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Tracing my path through professional growth, leadership roles, and impactful experiences
              </p>
            </div>

            <div className="relative">
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
              
              <div className="lg:hidden absolute left-6 transform w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>

              <div className="space-y-8 lg:space-y-16">
                {cv.experience.map((exp, idx) => (
                  <div
                    key={idx}
                    className={`relative group ${
                      idx % 2 === 0 
                        ? 'lg:pr-1/2 lg:pl-8' 
                        : 'lg:pl-1/2 lg:pr-8'
                    }`}
                    data-aos="fade-up"
                    data-aos-delay={idx * 100}
                  >
                    <div className={`
                      absolute left-6 lg:left-1/2 transform lg:-translate-x-1/2
                      w-4 h-4 lg:w-5 lg:h-5 rounded-full border-4 border-white dark:border-gray-900 
                      bg-gradient-to-r from-blue-500 to-purple-600 z-20 shadow-2xl
                      group-hover:scale-125 group-hover:from-blue-400 group-hover:to-purple-500
                      transition-all duration-500
                      ${idx % 2 === 0 ? 'lg:-translate-x-1/2' : 'lg:-translate-x-1/2'}
                    `}>
                      <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20"></div>
                    </div>

                    <div className={`
                      hidden lg:block absolute top-8 left-1/2 w-8 h-0.5 bg-gradient-to-r 
                      ${idx % 2 === 0 
                        ? '-translate-x-8 from-purple-500 to-blue-500' 
                        : 'translate-x-0 from-blue-500 to-purple-500'
                      } transition-all duration-500 group-hover:w-16
                    `}></div>

                    <div className={`
                      ml-12 lg:ml-0 relative
                      ${idx % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}
                    `}>
                      <article className={`
                        relative bg-white dark:bg-gray-800 rounded-2xl lg:rounded-3xl 
                        p-6 sm:p-8 shadow-2xl hover:shadow-3xl 
                        transition-all duration-700 transform 
                        hover:-translate-y-3 border border-gray-100 dark:border-gray-700
                        group-hover:border-blue-200 dark:group-hover:border-blue-800
                        overflow-hidden
                        ${idx % 2 === 0 ? 'lg:hover:-translate-x-2' : 'lg:hover:translate-x-2'}
                      `}
                        data-aos="zoom-in"
                        data-aos-delay={idx * 100 + 200}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="absolute -right-4 -top-4 w-8 h-8 bg-blue-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                        <div className="absolute -left-4 -bottom-4 w-8 h-8 bg-purple-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500">

                        </div>

                        <div className="relative z-10">
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 mb-4">
                            <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 012 2z" />
                            </svg>
                            <span className="text-xs font-semibold text-blue-700 dark:text-blue-300">{exp.date}</span>
                          </div>

                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                            {exp.role}
                          </h3>

                          <ul className="space-y-3 sm:space-y-4 mb-6">
                            {exp.bullets.map((bullet, i) => (
                              <li
                                key={i}
                                className="flex items-start group/item"
                                data-aos="fade-up"
                                data-aos-delay={i * 50}
                              >
                                <div className="flex-shrink-0 relative mt-1 mr-3 lg:mr-4">
                                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full group-hover/item:scale-150 transition-transform duration-300"></div>
                                  <div className="absolute inset-0 w-2 h-2 bg-blue-500 rounded-full animate-ping opacity-20"></div>
                                </div>
                                
                                <span className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base group-hover/item:translate-x-2 transition-transform duration-300">
                                  {bullet}
                                </span>
                              </li>
                            ))}
                          </ul>

                          <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-gray-900 dark:text-white">
                                  {exp.date.split(' – ')[0]}
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">Start Date</div>
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={() => { setModalProject({ title: exp.role, docs: exp.docs || [] }); setModalType('docs'); }}
                              className="group/btn flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/40 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-700 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 shadow-sm hover:shadow-md"
                            >
                              <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              <span className="text-sm font-semibold">View Docs</span>
                              <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </button>
                          </div>
                        </div>

                        <div className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                      </article>

                      <div className="lg:hidden absolute top-1/2 -left-8 transform -translate-y-1/2 w-4 h-4 text-blue-500">
                        <svg fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="hidden lg:block absolute left-1/2 bottom-0 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-2xl">
                <div className="absolute inset-0 rounded-full bg-pink-500 animate-ping opacity-30"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 mb-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Portfolio Showcase</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-4">
                Featured Projects
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Bringing creative visions to life through innovative solutions and strategic execution
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {cv.projects.map((project, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 border border-gray-100 dark:border-gray-700"
                  data-aos="fade-up"
                  data-aos-delay={150 * idx}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                  
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        style={{objectPosition: 'center'}}
                      />
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <div className="px-3 py-1.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 dark:text-gray-200">
                        {project.date}
                      </div>
                      {project.role === "Project Leader" && (
                        <div className="px-3 py-1.5 bg-yellow-400/90 backdrop-blur-sm rounded-full text-xs font-bold text-gray-900 flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                          Leader
                        </div>
                      )}
                    </div>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    </div>
                  </div>

                  <div className="relative z-10 p-6 lg:p-8">
                    <div className="mb-4">
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm lg:text-base line-clamp-3">
                        {project.desc}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900 dark:text-white">{project.role}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Role</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {project.trailer && (
                          <button
                            onClick={() => { setModalProject(project); setModalType('trailer'); }}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                            title="Watch Trailer"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </button>
                        )}
                        <button
                          onClick={() => { setModalProject(project); setModalType('docs'); }}
                          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/40 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300"
                          title="View Documentation"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500"></div>
                  </div>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute -right-10 -top-10 w-20 h-20 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
                    <div className="absolute -left-10 -bottom-10 w-20 h-20 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 bg-white dark:bg-gray-800/50 backdrop-blur-sm px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                  Skills
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  & Expertise
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8">
              <div className="space-y-6" data-aos="fade-up" data-aos-delay="100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Technical Skills</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Software & tools proficiency</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {cv.skills.technical.map((skill, idx) => (
                    <div
                      key={idx}
                      ref={el => skillRefs.current[idx] = el}
                      className={`group skill-technical-${idx}`}
                      data-aos="fade-up"
                      data-aos-delay={150 + idx * 80}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-sm">
                          {skill.name}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out group-hover:scale-105 origin-left"
                          style={{
                            width: skillsInView.technical[idx] ? `${skill.level}%` : '0%',
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 dark:bg-green-900/40 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Soft Skills</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Personal & professional attributes</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {cv.skills.soft.map((skill, idx) => (
                    <div
                      key={idx}
                      ref={el => skillRefs.current[cv.skills.technical.length + idx] = el}
                      className={`group skill-soft-${idx}`}
                      data-aos="fade-up"
                      data-aos-delay={250 + idx * 80}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors text-sm">
                          {skill.name}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-1000 ease-out group-hover:scale-105 origin-left"
                          style={{
                            width: skillsInView.soft[idx] ? `${skill.level}%` : '0%',
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-8xl mx-auto">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full blur-3xl animate-float"></div>
              <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-cyan-600/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-500/5 to-pink-600/5 rounded-full blur-3xl animate-pulse-slow"></div>
            </div>

            <div className="relative text-center mb-20" data-aos="fade-up">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl mb-8">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-red-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
                <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ACCOLADES & RECOGNITION
                </span>
              </div>
              
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                  Certificates
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  & Awards
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Professional milestones and recognitions that showcase dedication, expertise, and continuous growth in my career journey
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-transparent rounded-3xl"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
                {cv.certificates.map((cert, idx) => (
                  <div 
                    key={cert.id}
                    className="group relative cursor-pointer"
                    onClick={() => setSelectedCertificate(cert)}
                    data-aos="fade-up"
                    data-aos-delay={idx * 100}
                  >
                    <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 border border-gray-200/80 dark:border-gray-700/80 overflow-hidden">
                      
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      
                      <div className="relative mb-6 rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img 
                            src={cert.image} 
                            alt={cert.title}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                          />
                        </div>
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                          <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl p-4 transform scale-95 group-hover:scale-100 transition-transform duration-300">
                            <div className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              View Certificate
                            </div>
                          </div>
                        </div>
                        
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-bl-2xl transform translate-x-8 -translate-y-8 rotate-45 opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                      </div>

                      <div className="relative z-10">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                          {cert.title}
                        </h3>
                        
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">{cert.issuer}</p>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 012 2zm0 0h14" />
                            </svg>
                            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              {cert.date}
                            </span>
                          </div>
                          
                          <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                            idx % 3 === 0 
                              ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300' 
                              : idx % 3 === 1
                              ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300'
                              : 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300'
                          }`}>
                            {idx % 3 === 0 ? 'Expert' : idx % 3 === 1 ? 'Advanced' : 'Professional'}
                          </div>
                        </div>
                      </div>

                      <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
                      <div className="absolute -top-4 -left-4 w-6 h-6 bg-gradient-to-r from-pink-500 to-red-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{transitionDelay: '100ms'}}></div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white dark:bg-gray-800/50 backdrop-blur-sm px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                  Let's Create
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Something Amazing
                </span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Ready to bring your projects to life? Get in touch!
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-100 dark:border-gray-700"
              data-aos="zoom-in-up"
              data-aos-delay="200"
            >
              <div className="grid grid-cols-1 gap-6">
                <div data-aos="fade-up" data-aos-delay="300">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4">Get in touch</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 012 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm">Email</p>
                        <p className="text-gray-600 dark:text-gray-300 text-xs">{cv.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                      <div className="w-10 h-10 bg-green-100 dark:bg-green-900/40 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm">Phone</p>
                        <p className="text-gray-600 dark:text-gray-300 text-xs">{cv.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                      <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/40 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm">Location</p>
                        <p className="text-gray-600 dark:text-gray-300 text-xs">{cv.location}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="400">
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input 
                        name="name"
                        required
                        className="p-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 text-sm"
                        placeholder="Your name"
                      />
                      <input 
                        name="email"
                        required
                        type="email"
                        className="p-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 text-sm"
                        placeholder="Your email"
                      />
                    </div>
                    <input 
                      name="subject"
                      required

                      className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 text-sm"
                      placeholder="Subject"
                    />
                    <textarea 
                      name="message"
                      required
                      className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 text-sm min-h-[100px]"
                      placeholder="Your message"
                    />
                    <button 
                      type="submit" 
                      className="w-full py-3 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm"
                    >
                      <span>Send via WhatsApp</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.52 3.48A12.07 12.07 0 0012 0C5.37 0 0 5.37 0 12c0 2.12.55 4.19 1.6 6.02L0 24l6.26-1.64A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.26-1.44l-.38-.22-3.72.98.99-3.62-.24-.37A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.44.03 1.44 1.02 2.84 1.16 3.04.14.2 2.01 3.07 4.88 4.19.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/>
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 border-t bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="text-base font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Muhamad Alfito Ramadhan
              </div>
              <div className="flex items-center gap-4">
                <a href="http://www.linkedin.com/in/muhamadalfito" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors text-sm">LinkedIn</a>
                <a href="https://www.instagram.com/alftdani/?utm_source=ig_web_button_share_sheet" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors text-sm">Instagram</a>
                </div>
            </div>
            <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Muhamad Alfito Ramadhan. Built with precision and passion.
            </div>
          </div>
        </footer>
      </div>

      {/* Modals */}
      {modalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-3 py-4">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-sm sm:max-w-md p-4 relative max-h-[85vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl z-10 w-8 h-8 flex items-center justify-center"
              onClick={() => { setModalProject(null); setModalType(null); }}
              aria-label="Close"
            >×</button>
            <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white pr-6">{modalProject.title}</h3>
            {!modalType ? (
              <div className="flex flex-col gap-3">
                <button
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-sm"
                  onClick={() => setModalType('trailer')}
                >
                  Lihat Trailer
                </button>
                <button
                  className="w-full py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold text-sm"
                  onClick={() => setModalType('docs')}
                >
                  Lihat Dokumentasi
                </button>
              </div>
            ) : (
              <div>
                {modalType === 'trailer' ? (
                  <div className="aspect-w-16 aspect-h-9 mb-3">
                    <iframe
                      src={modalProject.trailer}
                      title="Trailer"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      className="w-full h-48 rounded-lg"
                    ></iframe>
                  </div>
                ) : (
                  <div className="space-y-3 mb-3">
                    {Array.isArray(modalProject.docs) ? (
                      modalProject.docs.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`Dokumentasi ${i + 1}`}
                          className="w-full rounded-lg shadow"
                        />
                      ))
                    ) : (
                      <img
                        src={modalProject.docs}
                        alt="Dokumentasi"
                        className="w-full rounded-lg shadow"
                      />
                    )}
                  </div>
                )}
                <button
                  className="w-full py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-semibold text-sm"
                  onClick={() => setModalType(null)}
                >
                  Kembali
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {selectedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 z-10 w-8 h-8 flex items-center justify-center bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedCertificate(null)}
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Container */}
            <div className="relative">
              <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative p-6 bg-white dark:bg-gray-900">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {selectedCertificate.title}
              </h3>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {selectedCertificate.issuer}
                  </p>
                  <p className="text-xs text-blue-600 dark:text-blue-400">
                    {selectedCertificate.date}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  className="flex-1 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  onClick={() => window.open(selectedCertificate.image, '_blank')}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>View Full Image</span>
                </button>
                
                <button
                  className="py-2.5 px-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 shadow hover:shadow-md"
                  onClick={() => setSelectedCertificate(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .flip-card {
          perspective: 1000px;
          cursor: pointer;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }

        .flip-card-inner.flipped {
          transform: rotateY(180deg);
        }

        @media (min-width: 1024px) {
          .flip-card:hover .flip-card-inner:not(.flipped) {
            transform: rotateY(5deg) scale(1.02);
          }
        }

        .card-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 1rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Improved mobile touch targets */
        @media (max-width: 640px) {
          .flip-card {
            max-width: 280px !important;
            height: 320px !important;
          }
          
          button, a {
            min-height: 44px;
            min-width: 44px;
          }
          
          input, textarea {
            font-size: 16px;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .flip-card {
            max-width: 320px !important;
            height: 360px !important;
          }
        }

        /* Animation improvements */
        .flip-card-inner {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Hover effects for desktop */
        @media (min-width: 1024px) {
          .flip-card:hover .flip-card-inner:not(.flipped) {
            transform: rotateY(5deg) scale(1.02);
            transition: transform 0.3s ease;
          }
        }

        /* Accessibility improvements */
        .flip-card:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }

        /* Scrollbar styling for back card */
        .flip-card-back div::-webkit-scrollbar {
          width: 4px;
        }

        .flip-card-back div::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }

        .flip-card-back div::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
        }

        .flip-card-back div::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
