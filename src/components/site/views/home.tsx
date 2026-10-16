"use client";

import { motion } from "framer-motion";
import {
  PHOTOS,
  HERO_IMAGE,
  ARTIST_IMAGE,
  INTERIOR_TWO,
  PRINT_SIZES,
} from "@/lib/photos";
import { useHashRoute } from "@/hooks/useHashRoute";
import { ArrowRight, Camera, Globe2, HandHeart } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export function HomeView() {
  const { navigate } = useHashRoute();
  const featured = PHOTOS.filter((p) => p.featured).slice(0, 6);

  return (
    <div>
      {/* ============ HERO ============ */}
      <section className="relative h-[92vh] min-h-[560px] flex items-end" aria-label="Introduction">
        <div className="absolute inset-0 overflow-hidden">
          { }
          <img
            src={HERO_IMAGE}
            alt="Sunrise burning gold over a still mountain lake below high peaks"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#211c14]/85 via-[#211c14]/25 to-[#211c14]/40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pb-20 w-full">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-[0.7rem] uppercase tracking-[0.4em] text-[#e5c584]"
          >
            Fine Art Landscape Photography
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="mt-5 font-serif text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl text-[#f7f2e9] max-w-3xl"
          >
            The light comes up for a few minutes. A print makes it stay.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-[#f7f2e9]/85 leading-relaxed"
          >
            Large format photographs of mountains, meadows, and first light across the American
            west. Each piece is printed by hand on archival cotton paper and signed in the studio
            at Ridgway, Colorado.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <button
              onClick={() => navigate({ view: "gallery" })}
              className="group inline-flex items-center gap-3 px-7 py-4 bg-[#b3812f] text-[#211c14] font-sans text-[0.72rem] uppercase tracking-[0.2em] hover:bg-[#c89440] transition-colors rounded-sm"
            >
              View the Gallery
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => navigate({ view: "prints" })}
              className="inline-flex items-center px-7 py-4 border border-[#f7f2e9]/50 text-[#f7f2e9] font-sans text-[0.72rem] uppercase tracking-[0.2em] hover:bg-[#f7f2e9] hover:text-[#211c14] transition-colors rounded-sm"
            >
              About the Prints
            </button>
          </motion.div>
        </div>
      </section>

      {/* ============ INTRO ============ */}
      <section className="bg-[#f7f2e9] py-24" aria-label="About the work">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <motion.p {...fadeUp} className="font-sans text-[0.7rem] uppercase tracking-[0.34em] text-[#b3812f]">
            The Work
          </motion.p>
          <motion.h2 {...fadeUp} className="mt-5 font-serif text-3xl sm:text-4xl text-[#26211a] leading-snug">
            No filters. No stock skies. Just weather, altitude, and patience.
          </motion.h2>
          <motion.p {...fadeUp} className="mt-7 text-[#4a4234] leading-relaxed text-[1.05rem]">
            Every photograph on this site was made in the field, usually before sunrise, usually
            alone. I go back to the same drainages and ridgelines season after season until the
            light and the land finally agree with each other. What you see is what the camera
            recorded that morning. The colors are not pushed in software and nothing has been
            added to a frame that was not there when the shutter opened.
          </motion.p>
          <motion.p {...fadeUp} className="mt-5 text-[#4a4234] leading-relaxed text-[1.05rem]">
            If one of these pictures stays in your head after you close the tab, that is the one to
            live with.
          </motion.p>
        </div>
      </section>

      {/* ============ FEATURED ============ */}
      <section className="bg-[#f7f2e9] pb-24" aria-label="Featured photographs">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div {...fadeUp} className="flex items-end justify-between gap-6 mb-12">
            <div>
              <p className="font-sans text-[0.7rem] uppercase tracking-[0.34em] text-[#b3812f]">
                Selected Work
              </p>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-[#26211a]">
                Recent favorites from the archive
              </h2>
            </div>
            <button
              onClick={() => navigate({ view: "gallery" })}
              className="hidden sm:inline-flex items-center gap-2 font-sans text-[0.72rem] uppercase tracking-[0.18em] text-[#26211a] border-b border-[#b3812f] pb-1 hover:text-[#b3812f] transition-colors shrink-0"
            >
              All 20 photographs
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((photo, i) => (
              <motion.button
                key={photo.slug}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                onClick={() => navigate({ view: "photo", slug: photo.slug })}
                className="group relative overflow-hidden rounded-sm focus-visible:ring-2 focus-visible:ring-[#b3812f]"
                aria-label={`View ${photo.title}`}
              >
                { }
                <img
                  src={photo.src}
                  alt={`${photo.title}, ${photo.location}`}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#211c14]/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-left">
                  <p className="font-serif text-xl text-[#f7f2e9]">{photo.title}</p>
                  <p className="mt-1 font-sans text-[0.65rem] uppercase tracking-[0.2em] text-[#e5c584]">
                    {photo.location}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="mt-10 text-center sm:hidden">
            <button
              onClick={() => navigate({ view: "gallery" })}
              className="inline-flex items-center gap-2 font-sans text-[0.72rem] uppercase tracking-[0.18em] text-[#26211a] border-b border-[#b3812f] pb-1"
            >
              View all 20 photographs
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ============ IN YOUR SPACE ============ */}
      <section className="bg-[#26211a] py-24" aria-label="Prints in real interiors">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid gap-14 lg:grid-cols-2 items-center">
          <motion.div {...fadeUp} className="relative">
            <div className="overflow-hidden rounded-sm">
              { }
              <img
                src={INTERIOR_TWO}
                alt="A framed Alpenglow meadow print hanging in a bright living room"
                className="w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#b3812f] text-[#211c14] px-6 py-4 rounded-sm shadow-xl">
              <p className="font-serif text-2xl leading-none">40 x 60 in</p>
              <p className="mt-1 font-sans text-[0.6rem] uppercase tracking-[0.22em]">
                Largest size available
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeUp}>
            <p className="font-sans text-[0.7rem] uppercase tracking-[0.34em] text-[#e5c584]">
              In Your Space
            </p>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-[#f7f2e9] leading-snug">
              A photograph should hold a wall, not decorate it
            </h2>
            <p className="mt-6 text-[#f7f2e9]/70 leading-relaxed">
              These pieces are made large on purpose. Printed at gallery scale on heavy cotton
              paper, or face mounted under acrylic, one photograph can carry an entire room. Most
              people who buy from me start with a wall they have been staring at for years, and a
              rough idea of the size. From there we figure out the rest together.
            </p>
            <p className="mt-4 text-[#f7f2e9]/70 leading-relaxed">
              Not sure what size fits? Send me a photo of your wall and I will mock the piece into
              it at true scale, free, before you spend anything.
            </p>
            <button
              onClick={() => navigate({ view: "prints" })}
              className="mt-8 inline-flex items-center gap-3 px-7 py-4 border border-[#b3812f] text-[#e5c584] font-sans text-[0.72rem] uppercase tracking-[0.2em] hover:bg-[#b3812f] hover:text-[#211c14] transition-colors rounded-sm"
            >
              How the prints are made
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ============ ARTIST TEASER ============ */}
      <section className="bg-[#f7f2e9] py-24" aria-label="About the artist">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid gap-14 lg:grid-cols-2 items-center">
          <motion.div {...fadeUp} className="order-2 lg:order-1">
            <p className="font-sans text-[0.7rem] uppercase tracking-[0.34em] text-[#b3812f]">
              The Artist
            </p>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-[#26211a] leading-snug">
              Elias Ward photographs the mountains he grew up under
            </h2>
            <p className="mt-6 text-[#4a4234] leading-relaxed">
              I did not come to photography through art school. I came to it through a decade of
              seasonal work in mountain towns, a used view camera bought off a retiring portrait
              photographer, and a habit of being outside at hours most people sensibly avoid. The
              equipment got better over the years. The habits never changed.
            </p>
            <p className="mt-4 text-[#4a4234] leading-relaxed">
              I live in Ridgway, Colorado, at the foot of the San Juans, which means most of the
              pictures on this site were made within a morning drive of my front door.
            </p>
            <button
              onClick={() => navigate({ view: "about" })}
              className="mt-8 inline-flex items-center gap-3 font-sans text-[0.72rem] uppercase tracking-[0.18em] text-[#26211a] border-b border-[#b3812f] pb-1 hover:text-[#b3812f] transition-colors"
            >
              Read the full story
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </motion.div>

          <motion.div {...fadeUp} className="order-1 lg:order-2 overflow-hidden rounded-sm">
            { }
            <img
              src={ARTIST_IMAGE}
              alt="Elias Ward working at sunset on a high mountain meadow ridge"
              className="w-full object-cover aspect-[4/3] hover:scale-[1.02] transition-transform duration-700"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* ============ VALUES STRIP ============ */}
      <section className="bg-[#f7f2e9] pb-24" aria-label="Studio guarantees">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: Camera,
              title: "Printed in house",
              text: "Every piece is printed, inspected, signed, and numbered in my own studio. Nothing is outsourced, and nothing ships until it passes a raking light inspection.",
            },
            {
              icon: Globe2,
              title: "Archival for life",
              text: "Museum grade cotton paper and pigment inks rated past one hundred years of display. If a piece ever fades under normal display, I replace it. Simple as that.",
            },
            {
              icon: HandHeart,
              title: "Live with it first",
              text: "Take thirty days with your print at home. If it does not feel right on the wall, send it back in original condition for a full refund, less return freight.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="border border-[#26211a]/10 bg-[#efe7d6] p-8 rounded-sm"
            >
              <item.icon className="h-7 w-7 text-[#b3812f]" aria-hidden="true" />
              <h3 className="mt-5 font-serif text-2xl text-[#26211a]">{item.title}</h3>
              <p className="mt-3 text-sm text-[#4a4234] leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============ CLOSING CTA ============ */}
      <section className="relative py-28" aria-label="Call to action">
        <div className="absolute inset-0 overflow-hidden">
          { }
          <img
            src={PHOTOS[3].src}
            alt="A golden mountain valley under early season snow"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#211c14]/70" />
        </div>
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <motion.h2
            {...fadeUp}
            className="font-serif text-3xl sm:text-5xl text-[#f7f2e9] leading-tight"
          >
            Find the piece your wall has been waiting for
          </motion.h2>
          <motion.p {...fadeUp} className="mt-5 text-[#f7f2e9]/80 text-lg">
            Editions are capped at one hundred prints per photograph across all sizes. When an
            edition closes, the file is retired for good.
          </motion.p>
          <motion.div {...fadeUp} className="mt-9 flex flex-wrap justify-center gap-4">
            {PRINT_SIZES.slice(0, 3).map((s) => (
              <span
                key={s.label}
                className="px-4 py-2 border border-[#f7f2e9]/30 rounded-sm font-sans text-[0.65rem] uppercase tracking-[0.18em] text-[#f7f2e9]/80"
              >
                {s.inches} · from ${s.price}
              </span>
            ))}
          </motion.div>
          <motion.button
            {...fadeUp}
            onClick={() => navigate({ view: "gallery" })}
            className="mt-9 inline-flex items-center gap-3 px-8 py-4 bg-[#b3812f] text-[#211c14] font-sans text-[0.72rem] uppercase tracking-[0.2em] hover:bg-[#c89440] transition-colors rounded-sm"
          >
            Browse the full gallery
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </div>
      </section>
    </div>
  );
}
