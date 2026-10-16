"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PHOTOS } from "@/lib/photos";
import { useHashRoute } from "@/hooks/useHashRoute";
import { ChevronLeft, ChevronRight, X, Play, Pause } from "lucide-react";

export function GalleryView() {
  const { navigate } = useHashRoute();
  const [slideshow, setSlideshow] = useState(false);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);

  const close = useCallback(() => setSlideshow(false), []);
  const next = useCallback(
    () => setIndex((i) => (i + 1) % PHOTOS.length),
    []
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + PHOTOS.length) % PHOTOS.length),
    []
  );

  useEffect(() => {
    if (!slideshow) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [slideshow, close, next, prev]);

  useEffect(() => {
    if (!slideshow || !playing) return;
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [slideshow, playing, next]);

  const current = PHOTOS[index];

  return (
    <div className="bg-[#f7f2e9]">
      {/* Header */}
      <section className="pt-36 pb-14" aria-label="Gallery introduction">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-sans text-[0.7rem] uppercase tracking-[0.34em] text-[#b3812f]"
          >
            The Gallery
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 font-serif text-4xl sm:text-5xl text-[#26211a]"
          >
            Mountains & Meadows
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-[#4a4234] leading-relaxed text-[1.05rem]"
          >
            Twenty large format photographs from a decade of early mornings above the treeline.
            Wildflower basins in July, gold on the aspen ridges in late September, and the odd
            perfect stillness of an alpine lake at dawn. Every piece is available as a hand printed
            archival print in five sizes, and every edition is capped at one hundred.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            onClick={() => {
              setIndex(0);
              setPlaying(true);
              setSlideshow(true);
            }}
            className="mt-8 inline-flex items-center gap-3 font-sans text-[0.72rem] uppercase tracking-[0.2em] text-[#26211a] border-b-2 border-[#b3812f] pb-1.5 hover:text-[#b3812f] transition-colors"
          >
            <Play className="h-4 w-4 text-[#b3812f]" />
            View as fullscreen slideshow
          </motion.button>
        </div>
      </section>

      {/* Masonry grid */}
      <section className="pb-28" aria-label="Photograph grid">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
            {PHOTOS.map((photo, i) => {
              const aspect =
                photo.ratio === "portrait"
                  ? "aspect-[2/3]"
                  : photo.ratio === "square"
                    ? "aspect-square"
                    : photo.ratio === "pano"
                      ? "aspect-[2/1]"
                      : "aspect-[4/3]";
              return (
                <motion.button
                  key={photo.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: (i % 3) * 0.07 }}
                  onClick={() => navigate({ view: "photo", slug: photo.slug })}
                  className="group block w-full text-left break-inside-avoid focus-visible:ring-2 focus-visible:ring-[#b3812f] rounded-sm"
                  aria-label={`Open ${photo.title}`}
                >
                  <div className="relative overflow-hidden rounded-sm">
                    { }
                    <img
                      src={photo.src}
                      alt={`${photo.title}, ${photo.location}`}
                      className={`w-full ${aspect} object-cover transition-transform duration-700 group-hover:scale-[1.045]`}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#211c14]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="pt-3.5 pb-1">
                    <p className="font-serif text-lg text-[#26211a] group-hover:text-[#b3812f] transition-colors">
                      {photo.title}
                    </p>
                    <p className="mt-0.5 font-sans text-[0.62rem] uppercase tracking-[0.2em] text-[#4a4234]/70">
                      {photo.location} · {photo.year}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Slideshow overlay */}
      <AnimatePresence>
        {slideshow && current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#211c14]/97 flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Fullscreen slideshow"
          >
            <div className="flex items-center justify-between px-5 sm:px-8 h-16 shrink-0">
              <p className="font-sans text-[0.65rem] uppercase tracking-[0.24em] text-[#f7f2e9]/60">
                {index + 1} / {PHOTOS.length}
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPlaying((p) => !p)}
                  className="p-2.5 text-[#f7f2e9]/80 hover:text-[#e5c584] transition-colors"
                  aria-label={playing ? "Pause slideshow" : "Play slideshow"}
                >
                  {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </button>
                <button
                  onClick={close}
                  className="p-2.5 text-[#f7f2e9]/80 hover:text-[#e5c584] transition-colors"
                  aria-label="Close slideshow"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="relative flex-1 min-h-0 flex items-center justify-center px-4 sm:px-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.slug}
                  initial={{ opacity: 0, scale: 0.985 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-full max-h-full flex flex-col items-center"
                >
                  { }
                  <img
                    src={current.src}
                    alt={`${current.title}, ${current.location}`}
                    className="max-h-[68vh] max-w-full object-contain rounded-sm shadow-2xl"
                  />
                  <div className="mt-5 text-center">
                    <p className="font-serif text-2xl text-[#f7f2e9]">{current.title}</p>
                    <p className="mt-1 font-sans text-[0.62rem] uppercase tracking-[0.22em] text-[#e5c584]">
                      {current.location} · {current.year}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <button
                onClick={prev}
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 text-[#f7f2e9]/70 hover:text-[#e5c584] transition-colors"
                aria-label="Previous photograph"
              >
                <ChevronLeft className="h-9 w-9" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 text-[#f7f2e9]/70 hover:text-[#e5c584] transition-colors"
                aria-label="Next photograph"
              >
                <ChevronRight className="h-9 w-9" />
              </button>
            </div>

            <div className="h-16 shrink-0 flex items-center justify-center">
              <button
                onClick={() => {
                  close();
                  navigate({ view: "photo", slug: current.slug });
                }}
                className="font-sans text-[0.65rem] uppercase tracking-[0.22em] text-[#f7f2e9]/60 hover:text-[#e5c584] transition-colors border-b border-[#f7f2e9]/25 pb-0.5"
              >
                View details & pricing for this piece
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
