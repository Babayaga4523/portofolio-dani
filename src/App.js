import React, { useState, useEffect, useRef } from "react";
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const cv = {
  name: "Muhamad Alfito Ramadhan",
  email: "Muhamadalfito12@gmail.com",
  phone: "+6288211762079",
  location: "North Bekasi",
  summary: "Lulusan Ilmu Komunikasi (IPK: 3,54/4,00) yang ahli di bidang produksi media dan manajemenacara. Memiliki pengalaman sebagai Director, Kameramen, dan Editor dalam produksi film semidokumenter. Terlatih dalam kepemimpinan dan manajemen proyek sebagai Ketua PelaksanaWorkshop Penyiaran. Didukung oleh keahlian teknis (Google Workspace, Microsoft Office, Canva,CapCut, VN) serta unggul dalam Komunikasi Efektif, Kolaborasi Tim, Kreativitas, dan PemecahanMasalah.",
  education: [
    { title: "Bachelor of Communications Sciences", school: "Gunadarma University", date: "2024 – Expected 2025", gpa: "3.54/4.00" },
    { title: "Diploma in Public Relations", school: "Akmrtv Jakarta University", date: "2021 – 2023", gpa: "3.62/4.00" },
  ],
  experience: [
    {
      role: "Magang – PT Serasi Shipping Indonesia",
      date: "Sept 2, 2024 – Nov 2, 2024",
      bullets: [
        "Menyiapkan dokumen administratif untuk keperluan pengajuan ke Kantor Imigrasi.",
        "Berpartisipasi dalam kegiatan sandar dan lepas kapal untuk kelancaran operasional.",
        "Membuat laporan berkala status kedatangan dan keberangkatan kapal.",
      ],
    },
    {
      role: "Magang Reporter – TVR Parlemen DPR RI",
      date: "Jul 3, 2023 – Sep 3, 2023",
      bullets: [
        "Menyusun daftar pertanyaan dan melakukan peliputan langsung.",
        "Menyusun transkrip wawancara dan merangkai berita berdasarkan data lapangan.",
      ],
    },
    {
      role: "Anggota Divisi Sumber Daya Manusia – BEM Universitas Akmrtv Jakarta",
      date: "Januari, 2023 – Januari, 2024",
      bullets: [
        "Menyelenggarakan kegiatan orientasi dan pengenalan kampus (MPLS) bagi mahasiswa baru.",
        "Melaksanakan proses rekrutmen anggota baru untuk mendukung regenerasi pengurus BEM.",
        "Mengelola evaluasi dan pengembangan anggota guna meningkatkan kinerja organisasi serta berkoordinasi dengan divisi lain untuk membangun kerja sama internal yang solid.",
      ],
    },
    {
      role: "Wakil Ketua – UKM Glo Radio Akmrtv Jakarta",
      date: "Maret, 2023 – Maret, 2024",
      bullets: [
        "Mendampingi dan membantu Ketua UKM dalam menjalankan seluruh kegiatan organisasi serta mengambil alih tanggung jawab kepemimpinan ketika Ketua berhalangan.",
        "Mengawasi kinerja setiap divisi (penyiaran, produksi, publikasi, dan humas) agar program kerja berjalan sesuai jadwal dan tujuan organisasi.",
        "Membimbing anggota baru dalam memahami dunia penyiaran serta menginisiasi pelatihan dan workshop untuk meningkatkan kemampuan broadcasting dan produksi.",
      ],
    },
  ],
  projects: [
    {
      title: "Penanggung Jawab – Bonding Festival “Champion Spirit: Breaking the Limits”",
      role: "Project Leader",
      date: "November 2023",
      desc: "Bertanggung jawab mengatur keseluruhan jalannya kegiatan event Futsal, termasuk perencanaan timeline, koordinasi lapangan dan wasit, serta pengelolaan anggota tim untuk memastikan acara berjalan lancar dan sesuai rencana.",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600",
      trailer: "https://www.youtube.com/embed/your-trailer-id",
      docs: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
        "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800"
      ],
    },
    {
      title: "Produksi Film Semi Dokumenter: Menyusuri Jejak Rotan",
      role: "Director, Kameramen & Editor",
      date: "Juli 2024",
      desc: "Konsep, pengambilan video, dan penyuntingan menjadi karya semi dokumenter.",
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
      desc: "Memimpin pelaksanaan, proposal, timeline, dan kebutuhan teknis workshop.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
      trailer: "https://www.youtube.com/embed/your-trailer-id3",
      docs: "https://www.youtube.com/embed/your-docs-id3",
    },
  ],
  skills: {
    technical: [
      { name: "Google Workspace", level: 95 },
      { name: "Microsoft Office", level: 90 },
      { name: "Canva", level: 85 },
      { name: "CapCut", level: 80 },
      { name: "VN", level: 75 }
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
    { id: 1, title: "Digital Marketing Certification", issuer: "Google Digital Garage", date: "2023", image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=400" },
    { id: 2, title: "Public Relations Strategy", issuer: "PR Indonesia", date: "2022", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400" },
    { id: 3, title: "Media Production Workshop", issuer: "Akmrtv Jakarta", date: "2023", image: "https://images.unsplash.com/photo-1554260570-9140fd3b7614?w=400" },
    { id: 4, title: "Leadership Training", issuer: "BEM University", date: "2023", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400" },
  ]
};

export default function App() {
  const [dark, setDark] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [modalProject, setModalProject] = useState(null);
  const [modalType, setModalType] = useState(null); // 'trailer' or 'docs'
  const [navOpen, setNavOpen] = useState(false);
  const [skillsInView, setSkillsInView] = useState({
    technical: Array(cv.skills.technical.length).fill(false),
    soft: Array(cv.skills.soft.length).fill(false),
  });

  const skillRefs = useRef([]);

  const handleCardFlip = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setIsFlipped(!isFlipped);
    
    // Reset animation state after transition
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

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

  useEffect(() => {
    // Listen to AOS events
    const handleAosEvent = (e) => {
      if (e.detail && e.detail.classList) {
        // Technical
        cv.skills.technical.forEach((_, idx) => {
          if (e.detail.classList.contains(`skill-technical-${idx}`)) {
            setSkillsInView((prev) => ({
              ...prev,
              technical: prev.technical.map((v, i) => (i === idx ? true : v)),
            }));
          }
        });
        // Soft
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
  }, [cv.skills.technical.length, cv.skills.soft.length]);

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
  }, [cv.skills.technical.length, cv.skills.soft.length]);

  return (
    <div className={`${dark ? "dark" : ""}`}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
        
        {/* Navigation */}
        <header className="fixed top-0 left-0 right-0 backdrop-blur-lg bg-white/90 dark:bg-gray-900/95 z-50 border-b border-gray-200/50 dark:border-gray-700/50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo & Title */}
            <div className="flex items-center gap-4">
              <div className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Muhamad Alfito Ramadhan
              </div>
              <div className="hidden md:block text-sm text-gray-600 dark:text-gray-300 border-l border-gray-300 dark:border-gray-600 pl-4">
                Communications & Operations
              </div>
            </div>
            {/* Desktop Navigation */}
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
                className="p-3 rounded-2xl border border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all duration-300 hover:scale-110 bg-white dark:bg-gray-800"
              >
                {dark ? "☀️" : "🌙"}
              </button>
            </nav>
            {/* Hamburger Button for Mobile */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
              onClick={() => setNavOpen(!navOpen)}
              aria-label="Open navigation"
            >
              <span className="sr-only">Open navigation</span>
              <svg className="w-6 h-6 text-gray-700 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={navOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
              </svg>
            </button>
          </div>
          {/* Mobile Navigation */}
          {navOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-6 py-4">
              <nav className="flex flex-col gap-4">
                {['experience', 'projects', 'skills', 'certificates', 'contact'].map((section) => (
                  <a
                    key={section}
                    href={`#${section}`}
                    className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize"
                    onClick={() => setNavOpen(false)}
                  >
                    {section}
                  </a>
                ))}
                <button
                  onClick={() => { setDark(!dark); setNavOpen(false); }}
                  className="mt-2 p-3 rounded-2xl border border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                >
                  {dark ? "☀️ Light" : "🌙 Dark"}
                </button>
              </nav>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                {/* Badge */}
                <div
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-medium shadow-lg border border-blue-200 dark:border-blue-700 animate-fade-in"
                  data-aos="fade-down"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Available for new opportunities
                </div>
                {/* Name */}
                <h1
                  className="text-6xl lg:text-7xl font-bold leading-tight animate-gradient-text"
                  data-aos="fade-up"
                >
                  <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    {cv.name.split(' ')[0]}
                  </span>
                  <br />
                  <span className="text-5xl lg:text-6xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {cv.name.split(' ').slice(1).join(' ')}
                  </span>
                </h1>
                {/* Headline */}
                <p
                  className="text-2xl text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Communications Strategist · Operational Excellence
                </p>
              </div>
              {/* Summary */}
              <p
                className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                {cv.summary}
              </p>
              {/* Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <a href="#contact" className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
                  <span>Start Conversation</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a href="/CV_Muhamad Alfito Dani.pdf" download className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border-2 border-gray-300 dark:border-gray-600 font-semibold hover:border-blue-400 transition-all duration-300 hover:scale-105 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                  <span>Download CV</span>
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
              </div>

              <div className="pt-6" data-aos="fade-up" data-aos-delay="800">
                <div className="flex flex-wrap gap-3">
                  {['Administrative Support', 'Operational Coordination', 'Media Production'].map((skill) => (
                    <div key={skill} className="px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 text-gray-700 dark:text-gray-300">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Flip Card */}
            <div
              className="flex items-center justify-center"
              data-aos="zoom-in-up"
              data-aos-delay="400"
            >
              <div 
                className={`card-container w-96 h-[500px] perspective-1000 cursor-pointer ${isAnimating ? 'pointer-events-none' : ''}`}
                onClick={handleCardFlip}
              >
                <div className={`card relative w-full h-full transition-transform duration-600 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                  
                  {/* Front of Card */}
                  <div className="card-face front absolute w-full h-full backface-hidden rounded-3xl overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 relative">
                      {/* Animated Background Elements */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse-slow"></div>
                        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
                      </div>
                      
                      <div className="relative p-8 h-full flex flex-col items-center justify-center text-white">
                        {/* Profile Image */}
                        <div className="relative mb-6 group">
                          <div className="absolute -inset-4 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                          <div className="relative w-32 h-32 rounded-2xl border-4 border-white/80 overflow-hidden shadow-2xl">
                            <img 
                              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=160&h=160&fit=crop&crop=face" 
                              alt={cv.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white">
                            <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
                          </div>
                        </div>

                        {/* Name & Title */}
                        <h2 className="text-3xl font-bold text-center mb-2">Muhamad Alfito Ramadhan</h2>
                        <p className="text-white/80 text-center mb-6">Communications Professional</p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 w-full mb-6">
                          <div className="text-center p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                            <div className="text-lg font-bold">3.54</div>
                            <div className="text-xs opacity-80">GPA</div>
                          </div>
                          <div className="text-center p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                            <div className="text-lg font-bold">2+</div>
                            <div className="text-xs opacity-80">Years Exp</div>
                          </div>
                          <div className="text-center p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                            <div className="text-lg font-bold">10+</div>
                            <div className="text-xs opacity-80">Projects</div>
                          </div>
                        </div>

                        {/* Flip Hint */}
                        <div className="flex items-center gap-2 text-white/60 text-sm">
                          <span>Click to view details</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div className="card-face back absolute w-full h-full backface-hidden rotate-y-180 rounded-3xl overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black relative">
                      <div className="relative p-8 h-full flex flex-col">
                        <h3 className="text-2xl font-bold text-white mb-4">Professional Profile</h3>
                        
                        {/* Summary */}
                        <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                          {cv.summary}
                        </p>

                        {/* Quick Info */}
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-3 text-gray-300">
                            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 012 2z" />
                            </svg>
                            <span className="text-sm">{cv.email}</span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-300">
                            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="text-sm">{cv.phone}</span>
                          </div>
                        </div>

                        {/* Skills Preview */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {cv.skills.technical.slice(0, 4).map((skill, idx) => (
                            <span key={idx} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30">
                              {skill.name}
                            </span>
                          ))}
                        </div>

                        {/* Flip Back Button */}
                        <button className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group">
                          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                          </svg>
                          Flip Back
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 section-bg backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold heading-gradient mb-4">
                Professional Journey
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                My path through professional experiences and organizational roles
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
              <div className="space-y-12">
                {cv.experience.map((exp, idx) => (
                  <div
                    key={idx}
                    className={`
                      relative flex flex-col md:flex-row items-start md:items-center
                      ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                    `}
                    data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                    data-aos-delay={100 * idx}
                  >
                    {/* Timeline Dot */}
                    <div className="
                      absolute md:static left-4 md:left-1/2 md:transform md:-translate-x-1/2
                      w-8 h-8 card-bg rounded-full border-4 border-blue-500 z-10 shadow-2xl flex items-center justify-center
                      top-0 md:top-auto
                    ">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    {/* Timeline Line */}
                    <div className="
                      absolute left-7 md:left-1/2 md:transform md:-translate-x-1/2
                      w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full
                      z-0
                      md:block
                      hidden
                    "></div>
                    {/* Card */}
                    <div className={`
                      mt-12 md:mt-0
                      w-full md:w-5/12
                      ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}
                    `}>
                      <article className="group card-bg rounded-3xl p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3"
                        data-aos="zoom-in-up"
                        data-aos-delay={200 + 100 * idx}
                      >
                        <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3">{exp.date}</div>
                        <h3 className="text-xl md:text-2xl font-bold mb-4">{exp.role}</h3>
                        <ul className="space-y-3">
                          {exp.bullets.map((bullet, i) => (
                            <li
                              key={i}
                              className="flex items-start group/item"
                              data-aos="fade-up"
                              data-aos-delay={300 + 100 * i}
                            >
                              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0 group-hover:item:scale-150 transition-transform duration-300"></span>
                              <span className="group-hover:item:translate-x-2 transition-transform duration-300">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </article>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent mb-4">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Creative works and professional case studies
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {cv.projects.map((project, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 dark:border-gray-700 overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={100 * idx}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full transform translate-x-16 -translate-y-16 opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-100 object-cover rounded-2xl mb-6" // ubah dari h-48 ke h-64
                    style={{objectPosition: 'center'}}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">{project.date}</div>
                      {project.role === "Project Leader" && (
                        <span className="inline-block px-3 py-1 bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300 rounded-full text-xs font-bold ml-2">Leader</span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{project.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                        {project.role}
                      </span>
                      <button
                        type="button"
                        onClick={() => { setModalProject(project); setModalType(null); }}
                        className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        View case study
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white dark:bg-gray-800/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                Skills & Expertise
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Technical Skills */}
              <div className="space-y-8" data-aos="fade-right" data-aos-delay="100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/40 rounded-2xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Technical Skills</h3>
                    <p className="text-gray-600 dark:text-gray-300">Software & tools proficiency</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {cv.skills.technical.map((skill, idx) => (
                    <div
                      key={idx}
                      ref={el => skillRefs.current[idx] = el}
                      className={`group skill-technical-${idx}`}
                      data-aos="fade-up"
                      data-aos-delay={150 + idx * 80}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
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

              {/* Soft Skills */}
              <div className="space-y-8" data-aos="fade-left" data-aos-delay="200">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-green-100 dark:bg-green-900/40 rounded-2xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Soft Skills</h3>
                    <p className="text-gray-600 dark:text-gray-300">Personal & professional attributes</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {cv.skills.soft.map((skill, idx) => (
                    <div
                      key={idx}
                      ref={el => skillRefs.current[cv.skills.technical.length + idx] = el}
                      className={`group skill-soft-${idx}`}
                      data-aos="fade-up"
                      data-aos-delay={250 + idx * 80}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
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
        <section id="certificates" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                Certificates & Awards
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Professional certifications and recognition of achievements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cv.certificates.map((cert, idx) => (
                <div 
                  key={cert.id}
                  className="group cursor-pointer bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden"
                  onClick={() => setSelectedCertificate(cert)}
                  data-aos="zoom-in"
                  data-aos-delay={100 * idx}
                >
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">{cert.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{cert.issuer}</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white dark:bg-gray-800/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                Let's Connect
              </h2>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Ready to bring your projects to life? Get in touch!
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700"
              data-aos="zoom-in-up"
              data-aos-delay="200"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div data-aos="fade-right" data-aos-delay="300">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get in touch</h3>
                  <div className="space-y-4">
                    {/* Email */}
                    <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 012 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                        <p className="text-gray-600 dark:text-gray-300">{cv.email}</p>
                      </div>
                    </div>
                    {/* Phone */}
                    <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                        <p className="text-gray-600 dark:text-gray-300">{cv.phone}</p>
                      </div>
                    </div>
                    {/* Location */}
                    <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/40 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                        <p className="text-gray-600 dark:text-gray-300">{cv.location}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div data-aos="fade-left" data-aos-delay="400">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input 
                        name="name"
                        required
                        className="p-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="Your name"
                      />
                      <input 
                        name="email"
                        required
                        type="email"
                        className="p-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="Your email"
                      />
                    </div>
                    <input 
                      name="subject"
                      required
                      className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Subject"
                    />
                    <textarea 
                      name="message"
                      required
                      className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 min-h-[120px]"
                      placeholder="Your message"
                    />
                    <button 
                      type="submit" 
                      className="w-full py-4 px-6 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                    >
                      <span>Send Message via WhatsApp</span>
                      {/* WhatsApp Icon */}
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.52 3.48A12.07 12.07 0 0012 0C5.37 0 0 5.37 0 12c0 2.12.55 4.19 1.6 6.02L0 24l6.26-1.64A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.26-1.44l-.38-.22-3.72.98.99-3.62-.24-.37A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.44.03 1.44 1.02 2.84 1.16 3.04.14.2 2.01 3.07 4.88 4.19.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/>
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Muhamad Alfito Ramadhan
              </div>
              <div className="flex items-center gap-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">GitHub</a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">Twitter</a>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Muhamad Alfito Ramadhan. Built with precision and passion.
            </div>
          </div>
        </footer>
      </div>

      {modalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-2">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-lg sm:max-w-xl md:max-w-2xl p-4 sm:p-6 relative max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl"
              onClick={() => { setModalProject(null); setModalType(null); }}
              aria-label="Close"
            >×</button>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{modalProject.title}</h3>
            {!modalType ? (
              <div className="flex flex-col gap-4">
                <button
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold"
                  onClick={() => setModalType('trailer')}
                >
                  Lihat Trailer
                </button>
                <button
                  className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold"
                  onClick={() => setModalType('docs')}
                >
                  Lihat Dokumentasi
                </button>
              </div>
            ) : (
              <div>
                {modalType === 'trailer' ? (
                  <div className="aspect-w-16 aspect-h-9 mb-4">
                    <iframe
                      src={modalProject.trailer}
                      title="Trailer"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      className="w-full h-64 rounded-xl"
                    ></iframe>
                  </div>
                ) : (
                  <div className="space-y-4 mb-4">
                    {Array.isArray(modalProject.docs) ? (
                      modalProject.docs.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`Dokumentasi ${i + 1}`}
                          className="w-full rounded-xl shadow"
                        />
                      ))
                    ) : (
                      <img
                        src={modalProject.docs}
                        alt="Dokumentasi"
                        className="w-full rounded-xl shadow"
                      />
                    )}
                  </div>
                )}
                <button
                  className="w-full py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl font-semibold mt-2"
                  onClick={() => setModalType(null)}
                >
                  Kembali ke Pilihan
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {selectedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-2">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-md sm:max-w-lg md:max-w-xl p-0 relative max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl z-10"
              onClick={() => setSelectedCertificate(null)}
              aria-label="Close"
            >×</button>
            {/* Certificate Image */}
            <div className="rounded-t-2xl overflow-hidden">
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="w-full h-56 object-cover"
              />
            </div>
            {/* Certificate Details */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedCertificate.title}</h3>
              <p className="text-base text-gray-600 dark:text-gray-300 mb-1">{selectedCertificate.issuer}</p>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-4">{selectedCertificate.date}</p>
              <button
                className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold mt-2 transition-all duration-300"
                onClick={() => setSelectedCertificate(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }

        .card {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-face {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Smooth hover effects */
        .card-container:hover .card:not(.rotate-y-180) {
          transform: translateY(-8px) rotateY(0deg);
        }

        .card-container:hover .card.rotate-y-180 {
          transform: translateY(-8px) rotateY(180deg);
        }
      `}</style>
    </div>
  );
}