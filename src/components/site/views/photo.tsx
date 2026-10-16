"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { PHOTOS, PRINT_SIZES } from "@/lib/photos";
import { useHashRoute } from "@/hooks/useHashRoute";
import { ArrowLeft, ArrowRight, Check, ChevronLeft, ChevronRight } from "lucide-react";

const FRAMING = [
  { key: "paper", label: "Fine art paper", note: "Rolled in a tube, ready for your own framer", delta: 0 },
  { key: "mat", label: "Matted & framed", note: "Float mounted on cotton mat in natural oak", delta: 0.35 },
  { key: "acrylic", label: "Acrylic face mount", note: "Sealed under optical acrylic, museum style", delta: 0.6 },
];

export function PhotoView({ slug }: { slug: string }) {
  const { navigate } = useHashRoute();
  const [sizeIdx, setSizeIdx] = useState(2);
  const [frameIdx, setFrameIdx] = useState(0);

  const idx = useMemo(() => PHOTOS.findIndex((p) => p.slug === slug), [slug]);
  const photo = PHOTOS[idx];

  if (!photo) {
    return (
      <div className="bg-[#f7f2e9] pt-36 pb-32 min-h-[70vh]">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h1 className="font-serif text-4xl text-[#26211a]">Photograph not found</h1>
          <p className="mt-4 text-[#4a4234]">
            The piece you are looking for may have been retired with its edition.
          </p>
          <button
            onClick={() => navigate({ view: "gallery" })}
            className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-[#b3812f] text-[#211c14] font-sans text-[0.72rem] uppercase tracking-[0.2em] rounded-sm hover:bg-[#c89440] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to the gallery
          </button>
        </div>
      </div>
    );
  }

  const size = PRINT_SIZES[sizeIdx];
  const framing = FRAMING[frameIdx];
  const total = Math.round((size.price * (1 + framing.delta)) / 5) * 5;
  const editionLeft = 100 - ((photo.year * 7 + slug.length * 13) % 37);

  const prevPhoto = PHOTOS[(idx - 1 + PHOTOS.length) % PHOTOS.length];
  const nextPhoto = PHOTOS[(idx + 1) % PHOTOS.length];

  const requestPiece = () => {
    navigate({ view: "contact" });
    setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent("alpenglow:inquiry", {
          detail: `${photo.title} (${size.inches}, ${framing.label})`,
        })
      );
    }, 80);
  };

  return (
    <div className="bg-[#f7f2e9]">
      <section className="pt-32 pb-10" aria-label="Photograph">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <button
            onClick={() => navigate({ view: "gallery" })}
            className="inline-flex items-center gap-2 font-sans text-[0.68rem] uppercase tracking-[0.2em] text-[#4a4234] hover:text-[#b3812f] transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to gallery
          </button>

          <div className="mt-8 grid gap-12 lg:grid-cols-12">
            {/* Image */}
            <motion.div
              key={photo.slug}
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="overflow-hidden rounded-sm shadow-[0_20px_60px_rgba(38,33,26,0.18)]">
                { }
                <img
                  src={photo.src}
                  alt={`${photo.title}, ${photo.location}`}
                  className="w-full object-cover"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="font-sans text-[0.62rem] uppercase tracking-[0.2em] text-[#4a4234]/70">
                  {photo.location} · {photo.year}
                </p>
                <p className="font-sans text-[0.62rem] uppercase tracking-[0.2em] text-[#4a4234]/70">
                  Edition of 100 · {editionLeft} remaining
                </p>
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <h1 className="font-serif text-4xl sm:text-5xl text-[#26211a] leading-tight">
                {photo.title}
              </h1>
              <p className="mt-6 text-[#4a4234] leading-relaxed">{photo.story}</p>

              <div className="mt-8 border-t border-[#26211a]/10 pt-7">
                <h2 className="font-sans text-[0.68rem] uppercase tracking-[0.24em] text-[#b3812f]">
                  Choose a size
                </h2>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5" role="radiogroup" aria-label="Print size">
                  {PRINT_SIZES.map((s, i) => (
                    <button
                      key={s.label}
                      onClick={() => setSizeIdx(i)}
                      role="radio"
                      aria-checked={sizeIdx === i}
                      className={`flex items-center justify-between px-4 py-3 border text-left rounded-sm transition-all ${
                        sizeIdx === i
                          ? "border-[#b3812f] bg-[#b3812f]/8"
                          : "border-[#26211a]/12 hover:border-[#26211a]/30"
                      }`}
                    >
                      <span>
                        <span className="block text-sm text-[#26211a]">{s.inches}</span>
                        <span className="block font-sans text-[0.58rem] uppercase tracking-[0.16em] text-[#4a4234]/70">
                          {s.label}
                        </span>
                      </span>
                      <span className="text-sm text-[#26211a] font-medium">
                        ${s.price}
                        {sizeIdx === i && <Check className="inline h-4 w-4 ml-1.5 text-[#b3812f]" />}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-7">
                <h2 className="font-sans text-[0.68rem] uppercase tracking-[0.24em] text-[#b3812f]">
                  Choose a finish
                </h2>
                <div className="mt-4 space-y-2.5" role="radiogroup" aria-label="Framing option">
                  {FRAMING.map((f, i) => (
                    <button
                      key={f.key}
                      onClick={() => setFrameIdx(i)}
                      role="radio"
                      aria-checked={frameIdx === i}
                      className={`w-full flex items-start gap-3 px-4 py-3.5 border text-left rounded-sm transition-all ${
                        frameIdx === i
                          ? "border-[#b3812f] bg-[#b3812f]/8"
                          : "border-[#26211a]/12 hover:border-[#26211a]/30"
                      }`}
                    >
                      <span
                        className={`mt-1 h-4 w-4 rounded-full border-2 shrink-0 flex items-center justify-center ${
                          frameIdx === i ? "border-[#b3812f]" : "border-[#26211a]/30"
                        }`}
                        aria-hidden="true"
                      >
                        {frameIdx === i && (
                          <span className="h-2 w-2 rounded-full bg-[#b3812f]" />
                        )}
                      </span>
                      <span className="flex-1">
                        <span className="flex items-center justify-between">
                          <span className="text-sm text-[#26211a]">{f.label}</span>
                          <span className="text-sm text-[#26211a]">
                            {f.delta === 0 ? "Included" : `+${Math.round(f.delta * 100)}%`}
                          </span>
                        </span>
                        <span className="block mt-0.5 text-[0.8rem] text-[#4a4234]/80">{f.note}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 bg-[#26211a] p-6 rounded-sm flex items-center justify-between gap-4">
                <div>
                  <p className="font-sans text-[0.6rem] uppercase tracking-[0.22em] text-[#e5c584]">
                    {size.inches} · {framing.label}
                  </p>
                  <p className="mt-1 font-serif text-3xl text-[#f7f2e9]">
                    ${total.toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={requestPiece}
                  className="px-6 py-3.5 bg-[#b3812f] text-[#211c14] font-sans text-[0.7rem] uppercase tracking-[0.18em] rounded-sm hover:bg-[#c89440] transition-colors shrink-0"
                >
                  Request this piece
                </button>
              </div>

              <p className="mt-4 text-[0.8rem] text-[#4a4234]/75 leading-relaxed">
                Prints ship in three weeks, insured, in a custom crate. You have thirty days to live
                with it. If the wall says no, send it back for a full refund.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prev / next */}
      <section className="pb-28" aria-label="More photographs">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 mt-8 grid grid-cols-2 gap-4">
          <button
            onClick={() => navigate({ view: "photo", slug: prevPhoto.slug })}
            className="group flex items-center gap-4 border border-[#26211a]/10 p-4 sm:p-5 rounded-sm hover:border-[#b3812f] transition-colors text-left"
          >
            <ChevronLeft className="h-6 w-6 text-[#b3812f] shrink-0" />
            { }
            <img
              src={prevPhoto.src}
              alt=""
              className="hidden sm:block h-14 w-20 object-cover rounded-sm"
              loading="lazy"
            />
            <span className="min-w-0">
              <span className="block font-sans text-[0.58rem] uppercase tracking-[0.18em] text-[#4a4234]/60">
                Previous
              </span>
              <span className="block font-serif text-lg text-[#26211a] truncate group-hover:text-[#b3812f] transition-colors">
                {prevPhoto.title}
              </span>
            </span>
          </button>
          <button
            onClick={() => navigate({ view: "photo", slug: nextPhoto.slug })}
            className="group flex items-center justify-end gap-4 border border-[#26211a]/10 p-4 sm:p-5 rounded-sm hover:border-[#b3812f] transition-colors text-right"
          >
            <span className="min-w-0">
              <span className="block font-sans text-[0.58rem] uppercase tracking-[0.18em] text-[#4a4234]/60">
                Next
              </span>
              <span className="block font-serif text-lg text-[#26211a] truncate group-hover:text-[#b3812f] transition-colors">
                {nextPhoto.title}
              </span>
            </span>
            { }
            <img
              src={nextPhoto.src}
              alt=""
              className="hidden sm:block h-14 w-20 object-cover rounded-sm"
              loading="lazy"
            />
            <ChevronRight className="h-6 w-6 text-[#b3812f] shrink-0" />
          </button>
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-8 mt-12 text-center">
          <button
            onClick={() => navigate({ view: "gallery" })}
            className="inline-flex items-center gap-2 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-[#26211a] border-b border-[#b3812f] pb-1 hover:text-[#b3812f] transition-colors"
          >
            See all photographs
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
}
