"use client";

import { motion } from "framer-motion";
import { ARTIST_IMAGE, ARTIST_FIELD_IMAGE } from "@/lib/photos";
import { useHashRoute } from "@/hooks/useHashRoute";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-70px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export function AboutView() {
  const { navigate } = useHashRoute();

  return (
    <div className="bg-[#f7f2e9]">
      <section className="pt-36 pb-16" aria-label="About the artist">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-sans text-[0.7rem] uppercase tracking-[0.34em] text-[#b3812f]"
          >
            About the Artist
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 font-serif text-4xl sm:text-5xl text-[#26211a] max-w-3xl leading-tight"
          >
            Elias Ward, photographing the San Juans and wherever else the light sends him
          </motion.h1>
        </div>
      </section>

      <section className="pb-20" aria-label="Portrait and introduction">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="overflow-hidden rounded-sm"
          >
            { }
            <img
              src={ARTIST_FIELD_IMAGE}
              alt="A camera on a tripod set up above a mountain valley at dawn"
              className="w-full object-cover aspect-[21/9]"
            />
          </motion.div>
        </div>
      </section>

      <section className="pb-20" aria-label="Biography">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="space-y-6 text-[#3d3629] text-[1.05rem] leading-relaxed">
            <motion.p {...fadeUp}>
              I grew up in Montrose, Colorado, in the kind of town where the mountains are not a
              destination, they are just the view from the school parking lot. My grandfather ran a
              lumber yard and photographed elk on weekends with a camera heavy enough to qualify as
              a weapon. When he passed, the camera sat in a closet for years until I pulled it out
              at twenty three, loaded film into it wrongly, and drove up Mill Creek Road in the dark
              to see what I could do.
            </motion.p>
            <motion.p {...fadeUp}>
              The pictures from that first year are terrible, and I still keep two of them on the
              studio wall. Not because they are good. Because they remember what it felt like to
              stand somewhere high and cold before sunrise and realize I wanted to spend a large
              part of my life doing exactly that.
            </motion.p>
            <motion.p {...fadeUp}>
              The working method has not really changed since. I pick a drainage and get to know it
              the slow way, on foot, in every season, until I know where the sun will come up in
              October and where the runoff pools in June. The camera on this site now is a 50
              megapixel medium format body, but the approach is the same one I learned with
              grandfather's film back. Be there early. Let the place do the work. Take the picture
              when the land and the light agree, or take nothing home.
            </motion.p>
            <motion.p {...fadeUp}>
              In 2019 my wife and I moved to Ridgway, which put me twenty minutes from some of the
              ridgelines in the gallery. The downstairs of our house is the print room. It is open
              on summer Saturdays, by appointment the rest of the year, and if you write ahead
              there will be coffee on. People are sometimes surprised that the prints look different
              in person. They are supposed to. A photograph this size, under good light, from three
              feet away, is an experience a screen cannot get close to.
            </motion.p>
            <motion.p {...fadeUp}>
              When I am not in the field or at the printer I am usually on a local trail with my
              two kids, who have strong opinions about sunrises, mostly that there should be
              pancakes after.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="pb-24" aria-label="Artist at work">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid gap-14 lg:grid-cols-2 items-center">
          <motion.div {...fadeUp} className="overflow-hidden rounded-sm">
            { }
            <img
              src={ARTIST_IMAGE}
              alt="Elias Ward photographing wildflowers at sunset on a high ridge"
              className="w-full object-cover aspect-[4/3] hover:scale-[1.02] transition-transform duration-700"
              loading="lazy"
            />
          </motion.div>
          <motion.div {...fadeUp}>
            <h2 className="font-serif text-3xl text-[#26211a] leading-snug">
              A few honest answers
            </h2>
            <div className="mt-7 space-y-6">
              <div>
                <h3 className="font-sans text-[0.68rem] uppercase tracking-[0.22em] text-[#b3812f]">
                  Favorite location in the gallery
                </h3>
                <p className="mt-2 text-[#4a4234] leading-relaxed">
                  The San Juan basin in The Golden Basin. I have camped at its edge eleven times
                  across four years and it has given me two usable frames. Worth every trip.
                </p>
              </div>
              <div>
                <h3 className="font-sans text-[0.68rem] uppercase tracking-[0.22em] text-[#b3812f]">
                  Hardest morning
                </h3>
                <p className="mt-2 text-[#4a4234] leading-relaxed">
                  Moraine Morning, no contest. Three days of wind, a 2:40 alarm, and a frozen
                  tripod head. The lake went still for about four minutes on the last morning.
                </p>
              </div>
              <div>
                <h3 className="font-sans text-[0.68rem] uppercase tracking-[0.22em] text-[#b3812f]">
                  What I will not do
                </h3>
                <p className="mt-2 text-[#4a4234] leading-relaxed">
                  Swap skies, add birds, paint in light that was not there, or pile on saturation
                  until a print glows in the dark. If the morning did not deliver, the picture does
                  not happen.
                </p>
              </div>
            </div>
            <button
              onClick={() => navigate({ view: "gallery" })}
              className="mt-9 inline-flex items-center gap-3 px-7 py-4 bg-[#b3812f] text-[#211c14] font-sans text-[0.72rem] uppercase tracking-[0.2em] hover:bg-[#c89440] transition-colors rounded-sm"
            >
              See the photographs
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
