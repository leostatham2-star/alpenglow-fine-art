"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SITE } from "@/lib/photos";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const SUBJECTS = [
  "General question",
  "Print inquiry",
  "Free wall mockup",
  "Licensing",
  "Studio visit",
];

export function ContactView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(SUBJECTS[0]);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const touched = useRef(false);

  useEffect(() => {
    const onInquiry = (e: Event) => {
      const detail = (e as CustomEvent).detail as string;
      setSubject("Print inquiry");
      setMessage(
        `Hi Elias, I would like to request ${detail}. Could you confirm availability and current turnaround?`
      );
      touched.current = true;
    };
    window.addEventListener("alpenglow:inquiry", onInquiry);
    return () => window.removeEventListener("alpenglow:inquiry", onInquiry);
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.includes("@") || message.trim().length < 5) {
      toast({ title: "Please fill in your name, a valid email, and a short message." });
      return;
    }
    setBusy(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      if (res.ok) {
        toast({
          title: "Message sent.",
          description: "I read everything myself and usually reply within two working days.",
        });
        setName("");
        setEmail("");
        setSubject(SUBJECTS[0]);
        setMessage("");
      } else {
        toast({ title: "That did not go through. Please try again in a moment." });
      }
    } catch {
      toast({ title: "That did not go through. Please try again in a moment." });
    } finally {
      setBusy(false);
    }
  };

  const inputCls =
    "w-full bg-transparent border border-[#26211a]/15 px-4 py-3.5 text-sm text-[#26211a] placeholder:text-[#4a4234]/50 focus:outline-none focus:border-[#b3812f] transition-colors rounded-sm";

  return (
    <div className="bg-[#f7f2e9]">
      <section className="pt-36 pb-16" aria-label="Contact">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-sans text-[0.7rem] uppercase tracking-[0.34em] text-[#b3812f]"
          >
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 font-serif text-4xl sm:text-5xl text-[#26211a] max-w-3xl leading-tight"
          >
            Write to the studio, it comes straight to me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-[#4a4234] leading-relaxed text-[1.05rem]"
          >
            There is no assistant and no ticket system. Messages land in my inbox and I answer
            them myself, usually within two working days. Print questions, wall sizing, studio
            visits, or just a question about how a particular photograph was made, all welcome.
          </motion.p>
        </div>
      </section>

      <section className="pb-28" aria-label="Contact form and details">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid gap-14 lg:grid-cols-12">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            onSubmit={submit}
            className="lg:col-span-7 space-y-5"
            aria-label="Contact form"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="c-name" className="block mb-2 font-sans text-[0.65rem] uppercase tracking-[0.2em] text-[#4a4234]">
                  Your name
                </label>
                <input
                  id="c-name"
                  className={inputCls}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Fowler"
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="c-email" className="block mb-2 font-sans text-[0.65rem] uppercase tracking-[0.2em] text-[#4a4234]">
                  Email
                </label>
                <input
                  id="c-email"
                  type="email"
                  className={inputCls}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@example.com"
                  autoComplete="email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="c-subject" className="block mb-2 font-sans text-[0.65rem] uppercase tracking-[0.2em] text-[#4a4234]">
                What is this about
              </label>
              <select
                id="c-subject"
                className={`${inputCls} appearance-none bg-[#f7f2e9]`}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              >
                {SUBJECTS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="c-message" className="block mb-2 font-sans text-[0.65rem] uppercase tracking-[0.2em] text-[#4a4234]">
                Message
              </label>
              <textarea
                id="c-message"
                rows={7}
                className={`${inputCls} resize-y`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about the wall, the room, the piece you have in mind, or whatever brought you here."
              />
            </div>
            <button
              type="submit"
              disabled={busy}
              className="px-8 py-4 bg-[#b3812f] text-[#211c14] font-sans text-[0.72rem] uppercase tracking-[0.2em] rounded-sm hover:bg-[#c89440] transition-colors disabled:opacity-60"
            >
              {busy ? "Sending..." : "Send message"}
            </button>
          </motion.form>

          {/* Details */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="lg:col-span-5"
          >
            <div className="bg-[#26211a] p-8 rounded-sm text-[#f7f2e9]">
              <h2 className="font-serif text-2xl">The studio</h2>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-[#e5c584] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    {SITE.studio}
                    <br />
                    <span className="text-[#f7f2e9]/60">
                      Print room open summer Saturdays 10 to 4, by appointment otherwise.
                    </span>
                  </span>
                </li>
                <li>
                  <a href={`mailto:${SITE.email}`} className="flex items-center gap-4 hover:text-[#e5c584] transition-colors">
                    <Mail className="h-5 w-5 text-[#e5c584] shrink-0" aria-hidden="true" />
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${SITE.phone.replace(/[^0-9]/g, "")}`}
                    className="flex items-center gap-4 hover:text-[#e5c584] transition-colors"
                  >
                    <Phone className="h-5 w-5 text-[#e5c584] shrink-0" aria-hidden="true" />
                    {SITE.phone}
                    <span className="text-[#f7f2e9]/50 text-xs">(studio hours, mountain time)</span>
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 hover:text-[#e5c584] transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-[#e5c584] shrink-0" aria-hidden="true" />
                    @alpenglowfineart
                    <span className="text-[#f7f2e9]/50 text-xs">new work posted monthly</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-6 border border-[#26211a]/12 p-7 rounded-sm bg-[#efe7d6]">
              <h3 className="font-serif text-xl text-[#26211a]">Visiting in person</h3>
              <p className="mt-3 text-sm text-[#4a4234] leading-relaxed">
                Ridgway sits between Montrose and Telluride on Highway 550. If you are driving
                through for the day, write the night before and I will make sure the print room is
                open and the coffee is on. Large pieces look completely different in real light and
                there is no substitute for standing in front of one.
              </p>
            </div>
          </motion.aside>
        </div>
      </section>
    </div>
  );
}
