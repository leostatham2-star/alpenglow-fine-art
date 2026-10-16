"use client";

import { motion } from "framer-motion";
import { useHashRoute } from "@/hooks/useHashRoute";
import { ArrowLeft } from "lucide-react";

const SECTIONS = [
  {
    title: "Shipping",
    body: [
      "Paper prints ship rolled in a rigid tube. Framed pieces and acrylic face mounts ship in custom crates built for each order. Everything leaves the studio fully insured, and someone has to sign for it on arrival.",
      "Standard turnaround is three weeks from order to doorstep for the United States. International shipments run four to six weeks depending on customs, and any duties on the receiving end are the buyer's responsibility.",
      "You get tracking the day it ships, and I personally email you when the piece leaves the studio.",
    ],
  },
  {
    title: "Returns",
    body: [
      "You have thirty days from delivery to live with the piece. If it does not feel right on the wall, write to the studio and we will arrange the return. As long as the print comes back in its original condition and packaging, you receive a full refund of the purchase price. Return freight is not covered for change of mind.",
      "If a piece arrives damaged, photograph the crate and the damage before opening anything, then write the same day. A replacement goes into production immediately at no cost to you.",
      "Custom framing orders and pieces at forty by sixty inches and larger are made to order and cannot be canceled once printing starts, though the thirty day live with it rule still applies.",
    ],
  },
  {
    title: "Privacy",
    body: [
      "The only information the studio keeps is what you hand over in a message or at checkout: your name, email, shipping address, and the details of your order. Nothing is sold, rented, or shared with anyone beyond the carrier moving your package and the payment processor handling the transaction.",
      "Newsletter subscribers can leave the list at any time with the link at the bottom of every letter. Leaving the list does not affect any purchase history or edition reservations.",
    ],
  },
  {
    title: "Terms",
    body: [
      "Every photograph on this site is the property of Alpenglow Fine Art and Elias Ward. Buying a print buys the physical piece. It does not transfer the copyright, and reproducing, scanning, or licensing the image without written permission is not allowed.",
      "Edition counts include every size and finish of a photograph combined. When an edition reaches one hundred, the file is retired permanently. Certificates of edition are numbered, signed, and shipped with each piece.",
      "Screen colors vary. The studio describes every photograph honestly, but if exact tone matters for your space, request the free wall mockup before ordering.",
    ],
  },
];

export function PoliciesView() {
  const { navigate } = useHashRoute();

  return (
    <div className="bg-[#f7f2e9]">
      <section className="pt-36 pb-14" aria-label="Studio policies">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <button
            onClick={() => navigate({ view: "home" })}
            className="inline-flex items-center gap-2 font-sans text-[0.68rem] uppercase tracking-[0.2em] text-[#4a4234] hover:text-[#b3812f] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Home
          </button>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6 font-serif text-4xl sm:text-5xl text-[#26211a]"
          >
            Studio Policies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-[#4a4234] leading-relaxed"
          >
            Everything below is written in plain language on purpose. If anything here is unclear,
            write to the studio and you will get a straight answer from a person.
          </motion.p>
        </div>
      </section>

      <section className="pb-28" aria-label="Policy details">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 space-y-10">
          {SECTIONS.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="bg-[#efe7d6] border border-[#26211a]/10 p-8 rounded-sm"
            >
              <h2 className="font-serif text-2xl text-[#26211a]">{s.title}</h2>
              <div className="mt-4 space-y-4">
                {s.body.map((p, j) => (
                  <p key={j} className="text-sm text-[#4a4234] leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
