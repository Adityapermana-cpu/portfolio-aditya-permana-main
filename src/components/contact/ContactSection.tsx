import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Copy,
  Check,
  Mail,
  MapPin,
  MessageSquare,
  Clock,
  Send,
  Sparkles,
  ArrowUp,
  RotateCw,
  Heart
} from 'lucide-react';
import { useClipboard } from '../../hooks/useClipboard';
import { profileData } from '../../data/portfolioData';
import { ContactFarmCanvas } from './ContactFarmCanvas';

const inquiryTopics = [
  {
    id: 'website',
    label: 'Website',
    subject: 'Inquiry: Website Development'
  },
  {
    id: 'application',
    label: 'Aplikasi',
    subject: 'Inquiry: Application Development'
  },
  {
    id: 'system',
    label: 'Sistem Digital',
    subject: 'Inquiry: Digital System Development'
  }
];

export const ContactSection: React.FC = () => {
  const { copied, copy } = useClipboard();
  const [selectedTopic, setSelectedTopic] = useState(inquiryTopics[0]);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [tractorClicks, setTractorClicks] = useState<number>(0);
  const [showHeart, setShowHeart] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setCurrentTime(new Intl.DateTimeFormat('id-ID', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTractorClick = () => {
    setTractorClicks((prev) => prev + 1);
    setShowHeart(true);
    setTimeout(() => setShowHeart(false), 1200);
  };

  


  return (
    <section
      id="contact"
      className="relative z-20 -mt-1 w-full bg-[#14532d] select-none py-24 overflow-hidden text-[#1c1917]"
    >
      <ContactFarmCanvas />

      {/* Floating Interactive Green Tractor */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
        className="absolute top-12 sm:top-20 right-4 sm:right-24 z-30 cursor-pointer group scale-75 sm:scale-100 origin-top-right"
        onClick={handleTractorClick}
        title="Klik traktor peternakan!"
      >
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [-2, 2, -2]
          }}
          transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
        >
          <motion.div
            animate={{ rotateY: tractorClicks * 360, scale: showHeart ? 1.2 : 1 }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 200 }}
            className="relative"
          >
            {/* Cute Farm Tractor SVG */}
            <svg width="74" height="64" viewBox="0 0 74 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xl">
              {/* Exhaust Smoke Pipe */}
              <rect x="52" y="10" width="4" height="18" fill="#1C1917" />
              <path d="M52 10 L58 6 L60 8 L54 12 Z" fill="#1C1917" />
              {/* Tractor Cabin */}
              <rect x="14" y="18" width="26" height="26" rx="4" fill="#22C55E" stroke="#1C1917" strokeWidth="2.5" />
              <rect x="18" y="22" width="18" height="12" rx="2" fill="#BAE6FD" stroke="#1C1917" strokeWidth="1.8" />
              {/* Tractor Hood */}
              <path d="M40 28 L64 28 L64 44 L40 44 Z" fill="#16A34A" stroke="#1C1917" strokeWidth="2.5" />
              {/* Big Rear Wheel */}
              <circle cx="26" cy="46" r="14" fill="#44403C" stroke="#1C1917" strokeWidth="3" />
              <circle cx="26" cy="46" r="6" fill="#FACC15" stroke="#1C1917" strokeWidth="2" />
              {/* Small Front Wheel */}
              <circle cx="56" cy="48" r="9" fill="#44403C" stroke="#1C1917" strokeWidth="2.5" />
              <circle cx="56" cy="48" r="4" fill="#FACC15" stroke="#1C1917" strokeWidth="1.8" />
            </svg>

            <AnimatePresence>
              {showHeart && (
                <motion.div
                  initial={{ opacity: 0, y: 0, scale: 0.5 }}
                  animate={{ opacity: 1, y: -28, scale: 1.2 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-rose-400 pointer-events-none"
                >
                  <Heart className="w-5 h-5 fill-rose-400 stroke-rose-600" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-12 space-y-6 sm:space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{
            duration: 0.55,
            type: 'spring',
            stiffness: 220,
            damping: 24
          }}
          className="p-5 sm:p-12 rounded-[24px] sm:rounded-[36px] bg-[#fffdf5] border-2 sm:border-3 border-[#1c1917] shadow-[6px_6px_0px_#1c1917] sm:shadow-[10px_10px_0px_#1c1917] space-y-5 sm:space-y-8"
        >
          {/* header */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3">
              <div className="flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-[#fde047] text-[#1c1917] text-xs font-mono font-black border-2 border-[#1c1917] shadow-[2px_2px_0px_#1c1917] sm:shadow-[3px_3px_0px_#1c1917] w-fit">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>05 // HUBUNGI SAYA</span>
              </div>

              <div className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-lg sm:rounded-xl bg-[#dcfce7] border-2 border-[#1c1917] text-[10px] sm:text-xs font-mono font-black text-[#15803d] shadow-[2px_2px_0px_#1c1917]">
                STATUS: TERSEDIA
              </div>
            </div>

            <div className="space-y-1 sm:space-y-2">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1c1917] tracking-tight leading-[1.08]">
                Mari Berdiskusi &amp; Berkolaborasi
              </h2>
              <p className="text-xs sm:text-base text-[#44403c] font-medium leading-relaxed max-w-2xl">
                Butuh konsultasi kepatuhan pajak, audit rekonsiliasi fiskal, penyusunan laporan keuangan PSAK, atau pendampingan SPT? Hubungi saya langsung melalui email di bawah.
              </p>
            </div>

          </div>

          {/* bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 items-stretch">
            {/* email and topic station */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="md:col-span-7 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#fefae0] border-2 border-[#1c1917] shadow-[3px_3px_0px_#1c1917] sm:shadow-[4px_4px_0px_#1c1917] flex flex-col justify-between space-y-4 sm:space-y-5"
            >
              <div className="space-y-2.5 sm:space-y-3">
                <div className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#78350f]">
                  Pilih Topik Diskusi
                </div>

                {/* topic buttons */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {inquiryTopics.map((topic) => {
                    const isSelected = selectedTopic.id === topic.id;
                    return (
                      <button
                        key={topic.id}
                        type="button"
                        onClick={() => setSelectedTopic(topic)}
                        className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-mono font-black border-2 transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#15803d] text-white border-[#1c1917] shadow-[2px_2px_0px_#1c1917]'
                            : 'bg-[#fffdf5] text-[#1c1917] border-[#1c1917] shadow-[1.5px_1.5px_0px_#1c1917] hover:bg-[#fde047]'
                        }`}
                      >
                        {topic.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* send email and copy button group */}
              <div className="space-y-2 pt-2 border-t-2 border-[#1c1917]/10">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-2.5 w-full">
                  <a
                   
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl bg-[#fde047] hover:bg-[#facc15] text-[#1c1917] font-mono font-black text-xs sm:text-sm transition-all cursor-pointer border-2 border-[#1c1917] shadow-[2.5px_2.5px_0px_#1c1917] sm:shadow-[3px_3px_0px_#1c1917] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#1c1917] w-full sm:w-auto shrink-0 whitespace-nowrap"
                  >
                    <Send className="w-4 h-4 shrink-0" />
                    <span>No 089660542400</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => copy(profileData.contact.email)}
                    className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl bg-[#fffdf5] hover:bg-[#fde047] text-[#1c1917] font-mono font-bold text-xs sm:text-sm transition-all cursor-pointer border-2 border-[#1c1917] shadow-[2px_2px_0px_#1c1917] w-full sm:w-auto shrink-0 whitespace-nowrap"
                    title="Salin alamat email"
                  >
                    <Mail className="w-4 h-4 text-[#15803d] shrink-0" />
                    <span>{profileData.contact.email}</span>
                    {copied ? (
                      <Check className="w-4 h-4 text-[#16a34a] ml-1 shrink-0" />
                    ) : (
                      <Copy className="w-4 h-4 text-[#78350f] ml-1 shrink-0" />
                    )}
                  </button>
                </div>

                {copied && (
                  <div className="text-xs font-mono font-bold text-[#16a34a] flex items-center gap-1.5 animate-fadeIn">
                    <Check className="w-3.5 h-3.5" />
                    <span>Email berhasil disalin ke clipboard!</span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* flip card tile for status and secret note */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.22 }}
              style={{ perspective: '800px' }}
              className="md:col-span-5 min-h-[220px]"
            >
              <motion.div
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 180, damping: 20 }}
                className="relative w-full h-full"
              >
                {/* status, clock and socials */}
                <div
                  style={{ backfaceVisibility: 'hidden' }}
                  className="w-full h-full p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#fefae0] border-2 border-[#1c1917] shadow-[3px_3px_0px_#1c1917] sm:shadow-[4px_4px_0px_#1c1917] flex flex-col justify-between space-y-3.5 sm:space-y-4"
                >
                  <div className="space-y-2.5 sm:space-y-3">
                    <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-[#fffdf5] border-2 border-[#1c1917]">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#44403c]">
                        <Clock className="w-4 h-4 text-[#15803d]" />
                        <span>Waktu Lokal (WIB)</span>
                      </div>
                      <span className="text-sm font-mono font-black text-[#1c1917] tabular-nums">
                        {currentTime || '16:00:00'}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-[#44403c] px-1 font-medium">
                      <MapPin className="w-4 h-4 text-[#dc2626] shrink-0" />
                      <span>Cirebon • Remote &amp; Hybrid Ready</span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t-2 border-[#1c1917]/10">
                    <div className="flex items-center justify-between">
                      
                      <button
                        type="button"
                        onClick={() => setIsFlipped(true)}
                        className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono font-bold text-[#15803d] hover:text-[#1c1917] cursor-pointer"
                      >
                        <span>Pesan Rahasia</span>
                        <RotateCw className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                      <a
                        href={profileData.contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-[#fffdf5] hover:bg-[#fde047] text-[#1c1917] font-mono font-bold text-[11px] sm:text-xs transition-all border-2 border-[#1c1917] shadow-[2px_2px_0px_#1c1917] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#1c1917] flex items-center justify-between group"
                      >
                      
                        
                      </a>

                      <a
                        href={profileData.contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-[#fffdf5] hover:bg-[#fde047] text-[#1c1917] font-mono font-bold text-[11px] sm:text-xs transition-all border-2 border-[#1c1917] shadow-[2px_2px_0px_#1c1917] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#1c1917] flex items-center justify-between group"
                      >
                      
                      </a>
                    </div>
                  </div>
                </div>

                {/* secret developer note */}
                <div
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                  className="absolute inset-0 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#fde047] border-2 border-[#1c1917] shadow-[3px_3px_0px_#1c1917] sm:shadow-[4px_4px_0px_#1c1917] flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-black text-[#1c1917] uppercase flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#15803d]" />
                        <span>Catatan Profesional Fiskal</span>
                      </span>
                    </div>
                    <p className="text-xs font-medium text-[#1c1917] leading-relaxed">
                      Terima kasih telah meninjau portofolio akuntansi perpajakan ini! Selalu terbuka untuk konsultasi seputar rekonsiliasi fiskal, kepatuhan pajak berkala, penyusunan laporan keuangan, atau kolaborasi audit.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsFlipped(false)}
                    className="w-full py-2 px-3 rounded-xl bg-[#fffdf5] hover:bg-[#fefae0] text-[#1c1917] text-xs font-mono font-black border-2 border-[#1c1917] shadow-[2px_2px_0px_#1c1917] transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <RotateCw className="w-3 h-3" />
                    <span>Kembali ke Profil</span>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* footer dock */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="p-4 sm:p-6 rounded-2xl sm:rounded-[28px] bg-[#fffdf5] border-2 sm:border-3 border-[#1c1917] shadow-[4px_4px_0px_#1c1917] sm:shadow-[6px_6px_0px_#1c1917] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] sm:text-xs font-mono font-bold text-[#44403c]"
        >
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-[#1c1917] text-center sm:text-left">
            <div className="flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f59e0b] shrink-0" />
              <span>&copy; {new Date().getFullYear()} {profileData.name}</span>
              <span className="hidden sm:inline text-[#78350f]">•</span>
            </div>
            
          </div>

          <div className="flex items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
           
            <button
              type="button"
              onClick={scrollToTop}
              className="px-4 py-1.5 sm:px-3.5 sm:py-1.5 rounded-xl bg-[#fefae0] hover:bg-[#fde047] text-[#1c1917] border-2 border-[#1c1917] shadow-[2px_2px_0px_#1c1917] transition-all cursor-pointer flex items-center justify-center gap-1.5 font-mono font-bold text-xs"
            >
              <span>Ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

