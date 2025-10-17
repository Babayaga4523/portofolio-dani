import React, { useState, useRef, useEffect } from "react";

export default function App() {
  const [dark, setDark] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [lanyardPosition, setLanyardPosition] = useState({ x: 0, y: 0 });
  const lanyardRef = useRef(null);

  const cv = {
    name: "Muhamad Alfito Ramadhan",
    email: "Muhamadalfito12@gmail.com",
    phone: "+6288211762079",
    location: "North Bekasi",
    summary:
      "Lulusan Ilmu Komunikasi yang berpengalaman di industri pelayaran. Terampil menyusun dokumen administratif, memantau kegiatan sandar dan lepas kapal, serta mahir menggunakan Google Workspace dan Microsoft Office.",
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
    ],
    projects: [
      {
        title: "Produksi Film Semi Dokumenter: Menyusuri Jejak Rotan",
        role: "Director, Kameramen & Editor",
        date: "Juli 2024",
        desc: "Konsep, pengambilan video, dan penyuntingan menjadi karya semi dokumenter.",
      },
      {
        title: "Workshop Glo Radio: How To Be A Good Announcer",
        role: "Ketua Pelaksana",
        date: "Februari 2023",
        desc: "Memimpin pelaksanaan, proposal, timeline, dan kebutuhan teknis workshop.",
      },
    ],
    skills: {
      technical: ["Google Workspace", "Microsoft Office", "Canva", "CapCut", "VN"],
      soft: ["Effective Communication", "Team Collaboration", "Time Management", "Creativity", "Responsibility"],
    },
    certificates: [
      { id: 1, title: "Digital Marketing Certification", issuer: "Google Digital Garage", date: "2023", image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=400" },
      { id: 2, title: "Public Relations Strategy", issuer: "PR Indonesia", date: "2022", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400" },
      { id: 3, title: "Media Production Workshop", issuer: "Akmrtv Jakarta", date: "2023", image: "https://images.unsplash.com/photo-1554260570-9140fd3b7614?w=400" },
      { id: 4, title: "Leadership Training", issuer: "BEM University", date: "2023", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400" },
    ]
  };

  // Lanyard drag functionality
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      
      const container = document.querySelector('.lanyard-container');
      if (!container) return;
      
      const containerRect = container.getBoundingClientRect();
      const x = e.clientX - containerRect.left - 60;
      const y = e.clientY - containerRect.top - 80;
      
      setLanyardPosition({
        x: Math.max(0, Math.min(containerRect.width - 120, x)),
        y: Math.max(0, Math.min(containerRect.height - 160, y))
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  return (
    <div className={`${dark ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-50 dark:bg-[#0b0b0b] text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {/* Navigation */}
        <header className="fixed top-0 left-0 right-0 backdrop-blur bg-white/80 dark:bg-black/60 z-50 border-b border-gray-200/50 dark:border-gray-800/50">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="font-bold text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{cv.name}</div>
              <div className="hidden md:block text-sm text-gray-600 dark:text-gray-400 border-l border-gray-300 dark:border-gray-700 pl-3">
                Communications & Operations
              </div>
            </div>
            <nav className="flex items-center gap-6">
              <a href="#experience" className="text-sm font-medium hover:text-indigo-600 transition-colors">Experience</a>
              <a href="#projects" className="text-sm font-medium hover:text-indigo-600 transition-colors">Projects</a>
              <a href="#skills" className="text-sm font-medium hover:text-indigo-600 transition-colors">Skills</a>
              <a href="#certificates" className="text-sm font-medium hover:text-indigo-600 transition-colors">Certificates</a>
              <a href="#contact" className="text-sm font-medium hover:text-indigo-600 transition-colors">Contact</a>
              <button 
                onClick={() => setDark(!dark)} 
                aria-label="toggle dark" 
                className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-indigo-400 transition-colors"
              >
                {dark ? "☀️" : "🌙"}
              </button>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold">Hello — I'm</p>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  {cv.name.split(' ')[0]}
                  <br />
                  <span className="text-4xl lg:text-5xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {cv.name.split(' ').slice(1).join(' ')}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
                  Communications Strategist · Operational Excellence
                </p>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed">{cv.summary}</p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                  <span>Contact Me</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a href="/CV_Dani_Perkapalan.docx" download className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 font-semibold hover:border-indigo-400 transition-all duration-300">
                  <span>Download CV</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
              </div>

              <div className="pt-6">
                <div className="flex flex-wrap gap-3">
                  {['Administrative Support', 'Operational Coordination', 'Media Production'].map((skill) => (
                    <div key={skill} className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Lanyard */}
            <div className="lanyard-container relative h-96 flex items-center justify-center">
              <div 
                ref={lanyardRef}
                className={`lanyard absolute cursor-grab active:cursor-grabbing transition-transform ${isDragging ? 'scale-105' : 'hover:scale-105'}`}
                style={{
                  transform: `translate(${lanyardPosition.x}px, ${lanyardPosition.y}px)`,
                }}
                onMouseDown={handleMouseDown}
              >
                <div className="lanyard-strap absolute -top-20 left-1/2 transform -translate-x-1/2 w-2 h-20 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-t-lg shadow-lg"></div>
                <div className="lanyard-card w-48 h-64 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border-8 border-white dark:border-gray-700 overflow-hidden transform rotate-3 transition-all duration-300 hover:rotate-0">
                  <div className="w-full h-32 bg-gradient-to-br from-indigo-500 to-purple-600"></div>
                  <div className="p-4 text-center">
                    <div className="w-16 h-16 mx-auto -mt-12 bg-white dark:bg-gray-800 rounded-full border-4 border-white dark:border-gray-800 shadow-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=128&h=128&fit=crop&crop=face" 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="mt-3 font-bold text-gray-900 dark:text-white">{cv.name.split(' ')[0]}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Communications</p>
                    <div className="mt-3 flex justify-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-xs text-gray-500">Available for work</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                Professional Journey
              </h2>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Timeline of my professional experience and organizational roles
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></div>
              
              <div className="space-y-12">
                {cv.experience.map((exp, idx) => (
                  <div key={idx} className={`relative flex items-center ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white dark:border-gray-900 z-10 shadow-lg"></div>
                    
                    {/* Content */}
                    <div className={`w-5/12 ${idx % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                      <article className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                        <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-2">{exp.date}</div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{exp.role}</h3>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                          {exp.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start">
                              <span className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span>{bullet}</span>
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
        <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Creative works and professional case studies
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {cv.projects.map((project, idx) => (
                <div key={idx} className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 dark:border-gray-700 overflow-hidden">
                  {/* Background gradient */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full transform translate-x-16 -translate-y-16 opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-3">{project.date}</div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{project.desc}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">
                        {project.role}
                      </span>
                      <button className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
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
        <section id="skills" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                Skills & Expertise
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Technical Skills */}
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Technical Skills</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {cv.skills.technical.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span className="font-medium text-gray-700 dark:text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Soft Skills</h3>
                </div>
                <div className="space-y-4">
                  {cv.skills.soft.map((skill, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{skill}</span>
                      <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full"
                          style={{ width: `${85 - (idx * 10)}%` }}
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
        <section id="certificates" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                Certificates & Awards
              </h2>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Professional certifications and recognition of achievements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cv.certificates.map((cert) => (
                <div 
                  key={cert.id}
                  className="group cursor-pointer bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden"
                  onClick={() => setSelectedCertificate(cert)}
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
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{cert.issuer}</p>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                Let's Connect
              </h2>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Ready to bring your projects to life? Get in touch!
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get in touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                      <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                        <p className="text-gray-600 dark:text-gray-400">{cv.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                        <p className="text-gray-600 dark:text-gray-400">{cv.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                        <p className="text-gray-600 dark:text-gray-400">{cv.location}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input 
                        className="p-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                      <input 
                        className="p-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        placeholder="Your email"
                        type="email"
                      />
                    </div>
                    <input 
                      className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      placeholder="Subject"
                    />
                    <textarea 
                      className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all min-h-[120px]"
                      placeholder="Your message"
                    />
                    <button 
                      type="button" 
                      className="w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {cv.name}
              </div>
              <div className="flex items-center gap-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-colors">GitHub</a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-colors">Instagram</a>
              </div>
            </div>
            <div className="mt-6 text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} {cv.name}. Crafted with passion and precision.
            </div>
          </div>
        </footer>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white dark:bg-gray-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
            <div className="relative">
              <img 
                src={selectedCertificate.image} 
                alt={selectedCertificate.title}
                className="w-full h-64 object-cover"
              />
              <button 
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedCertificate.title}</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-1">Issued by {selectedCertificate.issuer}</p>
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold">{selectedCertificate.date}</p>
              <div className="mt-6 flex gap-3">
                <button className="flex-1 py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors">
                  Download Certificate
                </button>
                <button 
                  onClick={() => setSelectedCertificate(null)}
                  className="flex-1 py-3 px-6 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-gray-400 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .lanyard-container {
          min-height: 400px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 2rem;
          position: relative;
          overflow: hidden;
        }
        
        .lanyard-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}