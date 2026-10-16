"use client";

import { motion } from "framer-motion";
import { INTERIOR_ONE, INTERIOR_TWO, PRINT_SIZES } from "@/lib/photos";
import { useHashRoute } from "@/hooks/useHashRoute";
import { ArrowRight, PackageCheck, Ruler, ShieldCheck, Truck } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-70px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const STEPS = [
  {
    n: "01",
    title: "The file",
    text: "Everything starts with the original capture from a 50 megapixel medium format sensor. That is roughly three times the resolution of a full frame camera, which is what makes a six foot print hold together from two feet away.",
  },
  {
    n: "02",
    title: "The paper",
    text: "I print on a heavyweight cotton rag paper with a matte, slightly textured surface. It has the feel of a drawing sheet rather than a glossy poster, and it holds detail without throwing glare across the room.",
  },
  {
    n: "03",
    title: "The inks",
    text: "Eleven pigment inks, not dyes. Independent testing puts these at well past one hundred years of display life without visible shift. Your grandchildren will see the same morning you bought.",
  },
  {
    n: "04",
    title: "The finish",
    text: "Three ways to finish a piece. Rolled paper for your own framer. Float mounted in natural oak with a cotton mat. Or face mounted under optical acrylic for the deepest color and the most modern look.",
  },
  {
    n: "05",
    title: "The hand check",
    text: "Every print passes under raking light on the inspection table before it gets a signature. Dust, banding, a hairline scratch, anything questionable and the print dies right there. Around one in eight never leaves the studio.",
  },
];

export function PrintsView() {
  const { navigate } = useHashRoute();

  return (
    <div className="bg-[#f7f2e9]">
      <section className="pt-36 pb-16" aria-label="About prints">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-sans text-[0.7rem] uppercase tracking-[0.34em] text-[#b3812f]"
          >
            About Prints
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 font-serif text-4xl sm:text-5xl text-[#26211a] max-w-3xl leading-tight"
          >
            How a morning in the mountains becomes something on your wall
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-[#4a4234] leading-relaxed text-[1.05rem]"
          >
            A photograph is only half the work. The print is where it becomes an object worth
            living with, and I take that half seriously. Here is exactly what you get, and what it
            costs, with nothing hidden in the fine print.
          </motion.p>
        </div>
      </section>

      {/* Steps */}
      <section className="pb-20" aria-label="The print process">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: (i % 3) * 0.08 }}
              className="bg-[#efe7d6] border border-[#26211a]/10 p-8 rounded-sm"
            >
              <p className="font-serif text-4xl text-[#b3812f]">{s.n}</p>
              <h2 className="mt-4 font-serif text-2xl text-[#26211a]">{s.title}</h2>
              <p className="mt-3 text-sm text-[#4a4234] leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
          <motion.div
            {...fadeUp}
            className="bg-[#26211a] p-8 rounded-sm flex flex-col justify-between"
          >
            <div>
              <h2 className="font-serif text-2xl text-[#f7f2e9]">The edition rule</h2>
              <p className="mt-3 text-sm text-[#f7f2e9]/70 leading-relaxed">
                Each photograph is capped at one hundred prints, counting every size and finish
                together. When number one hundred sells, the file is retired and never printed
                again. Older pieces on this page already have fewer than that remaining.
              </p>
            </div>
            <p className="mt-6 font-sans text-[0.62rem] uppercase tracking-[0.22em] text-[#e5c584]">
              Certificate of edition ships with every piece
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interiors */}
      <section className="pb-20" aria-label="Prints in interiors">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid gap-5 md:grid-cols-2">
          <motion.div {...fadeUp} className="overflow-hidden rounded-sm relative">
            { }
            <img
              src={INTERIOR_ONE}
              alt="An Alpenglow mountain meadow print framed above a reading shelf"
              className="w-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </motion.div>
          <motion.div {...fadeUp} className="overflow-hidden rounded-sm relative">
            { }
            <img
              src={INTERIOR_TWO}
              alt="A framed wildflower meadow print on a living room wall in warm light"
              className="w-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </motion.div>
        </div>
        <div className="mx-auto max-w-3xl px-5 sm:px-8 mt-10 text-center">
          <motion.h2 {...fadeUp} className="font-serif text-3xl text-[#26211a] leading-snug">
            Not sure what fits your wall?
          </motion.h2>
          <motion.p {...fadeUp} className="mt-4 text-[#4a4234] leading-relaxed">
            Send me a photo of the wall with something in it for scale, a door frame or a sofa
            works well, and I will drop any piece you are considering into the photo at true
            dimensions. No charge, no obligation, usually back to you within two days.
          </motion.p>
          <motion.button
            {...fadeUp}
            onClick={() => navigate({ view: "contact" })}
            className="mt-7 inline-flex items-center gap-3 px-7 py-4 border border-[#b3812f] text-[#b3812f] font-sans text-[0.72rem] uppercase tracking-[0.2em] hover:bg-[#b3812f] hover:text-[#f7f2e9] transition-colors rounded-sm"
          >
            Request a free mockup
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </div>
      </section>

      {/* Size & price table */}
      <section className="pb-20" aria-label="Sizes and prices">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <motion.h2 {...fadeUp} className="font-serif text-3xl text-[#26211a] text-center">
            Sizes & prices
          </motion.h2>
          <motion.p {...fadeUp} className="mt-3 text-center text-[#4a4234]">
            Paper print pricing. Framing and acrylic finishes are quoted as a simple percentage on
            top, shown on each photograph page.
          </motion.p>
          <motion.div {...fadeUp} className="mt-10 overflow-hidden border border-[#26211a]/12 rounded-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#26211a] text-[#f7f2e9]">
                  <th className="px-5 py-4 font-sans text-[0.62rem] uppercase tracking-[0.2em] font-medium">
                    Size
                  </th>
                  <th className="px-5 py-4 font-sans text-[0.62rem] uppercase tracking-[0.2em] font-medium">
                    Name
                  </th>
                  <th className="px-5 py-4 font-sans text-[0.62rem] uppercase tracking-[0.2em] font-medium">
                    Best for
                  </th>
                  <th className="px-5 py-4 font-sans text-[0.62rem] uppercase tracking-[0.2em] font-medium text-right">
                    Paper print
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#26211a]/10">
                {[
                  { inches: "12 x 18 in", name: "Petite", best: "Shelves, desks, gallery walls", price: 245 },
                  { inches: "16 x 24 in", name: "Classic", best: "Hallways, home offices", price: 395 },
                  { inches: "24 x 36 in", name: "Gallery", best: "Living rooms, bedrooms", price: 645 },
                  { inches: "30 x 45 in", name: "Statement", best: "Above a sofa or sideboard", price: 945 },
                  { inches: "40 x 60 in", name: "Oversize", best: "Feature walls, stairwells, lodges", price: 1545 },
                ].map((row) => (
                  <tr key={row.inches} className="bg-[#f7f2e9] hover:bg-[#efe7d6] transition-colors">
                    <td className="px-5 py-4 text-sm text-[#26211a] font-medium">{row.inches}</td>
                    <td className="px-5 py-4 text-sm text-[#4a4234]">{row.name}</td>
                    <td className="px-5 py-4 text-sm text-[#4a4234]">{row.best}</td>
                    <td className="px-5 py-4 text-sm text-[#26211a] text-right font-medium">
                      ${row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
          <motion.p {...fadeUp} className="mt-4 text-center text-[0.8rem] text-[#4a4234]/75">
            Pano and square formats are cropped from the same edition and priced by their longest
            edge. Panoramic sizes are available on request.
          </motion.p>
        </div>
      </section>

      {/* Shipping & guarantees */}
      <section className="pb-28" aria-label="Shipping and guarantees">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Ruler,
              title: "Sizing help",
              text: "Free true scale mockups in a photo of your own wall before you commit to a size.",
            },
            {
              icon: Truck,
              title: "Insured shipping",
              text: "Custom crates for large acrylics, tubes for paper. Three weeks door to door, fully insured, worldwide.",
            },
            {
              icon: PackageCheck,
              title: "30 days to decide",
              text: "Live with the piece for a month. If the wall says no, return it in original condition for a full refund.",
            },
            {
              icon: ShieldCheck,
              title: "Lifetime archival",
              text: "If a print ever shows fading under normal display, send it back and I will replace it free.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: (i % 4) * 0.08 }}
              className="border-t-2 border-[#b3812f] bg-[#efe7d6] p-7 rounded-b-sm"
            >
              <item.icon className="h-6 w-6 text-[#b3812f]" aria-hidden="true" />
              <h3 className="mt-4 font-serif text-xl text-[#26211a]">{item.title}</h3>
              <p className="mt-2.5 text-sm text-[#4a4234] leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
        <div className="mx-auto max-w-3xl px-5 sm:px-8 mt-14 text-center">
          <motion.p {...fadeUp} className="font-serif text-2xl sm:text-3xl text-[#26211a] leading-snug">
            Ready to find the piece?
          </motion.p>
          <motion.button
            {...fadeUp}
            onClick={() => navigate({ view: "gallery" })}
            className="mt-7 inline-flex items-center gap-3 px-8 py-4 bg-[#b3812f] text-[#211c14] font-sans text-[0.72rem] uppercase tracking-[0.2em] hover:bg-[#c89440] transition-colors rounded-sm"
          >
            Browse the gallery
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </div>
      </section>
    </div>
  );
}
