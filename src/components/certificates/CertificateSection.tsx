
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  ExternalLink,
  FileBadge,
  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { certificatesData } from '../../data/portfolioData';

type CertificateWithImages = (typeof certificatesData)[number] & {
  imageUrls?: string[];
};

export const CertificateSection: React.FC = () => {
  const [selectedCertificateIndex, setSelectedCertificateIndex] =
    useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const selectedCertificate =
    selectedCertificateIndex !== null
      ? (certificatesData[selectedCertificateIndex] as CertificateWithImages)
      : null;

  const selectedImages = selectedCertificate
    ? selectedCertificate.imageUrls?.length
      ? selectedCertificate.imageUrls
      : [selectedCertificate.imageUrl]
    : [];

  const closePreview = () => {
    setSelectedCertificateIndex(null);
    setSelectedImageIndex(0);
  };

  const openPreview = (index: number) => {
    setSelectedCertificateIndex(index);
    setSelectedImageIndex(0);
  };

  const showPrevious = () => {
    setSelectedImageIndex((current) =>
      selectedImages.length > 0
        ? (current - 1 + selectedImages.length) % selectedImages.length
        : 0
    );
  };

  const showNext = () => {
    setSelectedImageIndex((current) =>
      selectedImages.length > 0
        ? (current + 1) % selectedImages.length
        : 0
    );
  };

  useEffect(() => {
    if (selectedCertificateIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closePreview();
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();
    };

    const previousOverflow = document.body.style.overflow;

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedCertificateIndex, selectedImages.length]);

  return (
    <section
      id="certificates"
      className="relative w-full bg-[#fefae0] py-20 sm:py-28 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#fde047] text-[#1c1917] text-xs font-mono font-black border-2 border-[#1c1917] shadow-[2px_2px_0px_#1c1917] mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>06 // SERTIFIKAT &amp; PENCAPAIAN</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#1c1917] tracking-tight leading-tight">
            Sertifikat &amp; Pencapaian
          </h2>

          <p className="mt-3 max-w-2xl text-sm sm:text-base font-medium text-[#44403c] leading-relaxed">
            Dokumentasi sertifikat, kompetensi, dan pencapaian yang mendukung
            pengalaman pendidikan, teknologi, administrasi, serta pengembangan
            kemampuan profesional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {certificatesData.map((certificate, index) => (
            <motion.article
              key={certificate.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08
              }}
              className="group overflow-hidden rounded-2xl sm:rounded-[28px] bg-[#fffdf5] border-2 border-[#1c1917] shadow-[4px_4px_0px_#1c1917] sm:shadow-[6px_6px_0px_#1c1917] hover:-translate-y-1 hover:shadow-[3px_3px_0px_#1c1917] transition-all"
            >
              <button
                type="button"
                onClick={() => openPreview(index)}
                aria-label={`Lihat sertifikat ${certificate.title}`}
                className="relative block w-full aspect-[4/3] bg-[#dcfce7] border-b-2 border-[#1c1917] overflow-hidden cursor-zoom-in focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#15803d]"
              >
                <img
                  src={certificate.imageUrl}
                  alt={certificate.title}
                  loading="lazy"
                  className="w-full h-full object-contain p-2 sm:p-3 transition-transform duration-500 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-[#1c1917]/0 group-hover:bg-[#1c1917]/25 transition-colors duration-300">
                  <span className="inline-flex items-center gap-2 rounded-xl border-2 border-[#1c1917] bg-[#fffdf5] px-3 py-2 text-xs font-black text-[#1c1917] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-[3px_3px_0px_#1c1917]">
                    <ZoomIn className="w-4 h-4" />
                    {certificate.id === 'sertifikat-ukk'
                      ? 'Lihat 2 Halaman Sertifikat'
                      : 'Perbesar Sertifikat'}
                  </span>
                </div>

                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#fffdf5]/95 border-2 border-[#1c1917] text-[10px] sm:text-xs font-mono font-black shadow-[2px_2px_0px_#1c1917] pointer-events-none">
                  <FileBadge className="w-3.5 h-3.5 text-[#15803d]" />
                  {certificate.year}
                </div>
              </button>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-black text-[#1c1917] leading-tight">
                  {certificate.title}
                </h3>

                <p className="mt-1 text-xs sm:text-sm font-bold text-[#15803d]">
                  {certificate.issuer}
                </p>

                <p className="mt-3 text-xs sm:text-sm font-medium text-[#44403c] leading-relaxed">
                  {certificate.description}
                </p>

                {certificate.credentialUrl && (
                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#15803d] text-[#fefae0] border-2 border-[#1c1917] shadow-[2px_2px_0px_#1c1917] text-xs font-black hover:bg-[#166534] transition-all"
                  >
                    Lihat Sertifikat
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {selectedCertificate && selectedImages.length > 0 && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1c1917]/90 p-3 sm:p-6"
          onClick={closePreview}
          role="dialog"
          aria-modal="true"
          aria-label={`Pratinjau ${selectedCertificate.title}`}
        >
          <button
            type="button"
            onClick={closePreview}
            aria-label="Tutup pratinjau"
            className="absolute right-3 top-3 sm:right-6 sm:top-6 z-30 flex h-11 w-11 items-center justify-center rounded-xl border-2 border-[#1c1917] bg-[#fde047] text-[#1c1917] shadow-[3px_3px_0px_#1c1917] hover:bg-[#facc15] transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          {selectedImages.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                aria-label="Halaman sertifikat sebelumnya"
                className="absolute left-2 sm:left-6 top-1/2 z-30 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl border-2 border-[#1c1917] bg-[#fffdf5] text-[#1c1917] shadow-[3px_3px_0px_#1c1917] hover:bg-[#fde047] transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                aria-label="Halaman sertifikat berikutnya"
                className="absolute right-2 sm:right-6 top-1/2 z-30 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl border-2 border-[#1c1917] bg-[#fffdf5] text-[#1c1917] shadow-[3px_3px_0px_#1c1917] hover:bg-[#fde047] transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <div
            className="flex max-h-[92vh] w-full max-w-6xl flex-col items-center gap-3"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex max-w-[75%] flex-col items-center text-center">
              <h3 className="text-sm sm:text-lg font-black text-[#fefae0]">
                {selectedCertificate.title}
              </h3>

              <p className="mt-1 text-xs sm:text-sm font-medium text-[#fde047]">
                {selectedCertificate.issuer} · {selectedCertificate.year}
              </p>

              {selectedImages.length > 1 && (
                <p className="mt-1 text-xs font-medium text-[#fefae0]/80">
                  Halaman {selectedImageIndex + 1} dari {selectedImages.length}
                </p>
              )}
            </div>

            <div className="flex min-h-0 w-full flex-1 items-center justify-center overflow-hidden">
              <img
                key={selectedImages[selectedImageIndex]}
                src={selectedImages[selectedImageIndex]}
                alt={`${selectedCertificate.title} — halaman ${selectedImageIndex + 1}`}
                className="block max-h-[76vh] max-w-full rounded-lg bg-[#fffdf5] object-contain shadow-2xl"
              />
            </div>

            <p className="text-center text-[11px] sm:text-xs font-medium text-[#fefae0]/80">
              {selectedImages.length > 1
                ? 'Gunakan tombol panah untuk melihat halaman sertifikat lainnya.'
                : 'Klik area luar foto atau tombol X untuk menutup.'}
              {' '}Tekan Escape untuk menutup.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};