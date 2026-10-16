"use client";

import { useState } from "react";
import { SITE } from "@/lib/photos";
import { useHashRoute, type Route } from "@/hooks/useHashRoute";
import { Logo } from "./logo";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const FOOTER_NAV: { label: string; route: Route }[] = [
  { label: "Gallery", route: { view: "gallery" } },
  { label: "About the Artist", route: { view: "about" } },
  { label: "About Prints", route: { view: "prints" } },
  { label: "Contact", route: { view: "contact" } },
  { label: "Shipping & Returns", route: { view: "policies" } },
  { label: "Privacy & Terms", route: { view: "policies" } },
];

export function Footer() {
  const { navigate } = useHashRoute();
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast({ title: "Please enter a valid email address." });
      return;
    }
    setBusy(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        toast({
          title: "You are on the list.",
          description: "One short letter a month when new work is released. Nothing else.",
        });
        setEmail("");
      } else {
        toast({ title: "Something went wrong. Please try again." });
      }
    } catch {
      toast({ title: "Something went wrong. Please try again." });
    } finally {
      setBusy(false);
    }
  };

  return (
    <footer className="mt-auto bg-[#211c14] text-[#f7f2e9]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 grid gap-12 md:grid-cols-12">
        {/* Brand + newsletter */}
        <div className="md:col-span-5">
          <Logo light />
          <p className="mt-6 text-sm leading-relaxed text-[#f7f2e9]/60 max-w-sm">
            Large format landscape photographs of the American mountain west, printed by hand and
            built to outlive all of us.
          </p>

          <h3 className="mt-8 font-serif text-xl text-[#f7f2e9]">First Light, First Look</h3>
          <p className="mt-2 text-sm text-[#f7f2e9]/60">
            One short letter a month. New photographs, open editions, and the occasional story from
            the trail. No noise, ever.
          </p>
          <form onSubmit={subscribe} className="mt-4 flex max-w-sm" aria-label="Newsletter signup">
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-[#f7f2e9]/25 px-4 py-3 text-sm placeholder:text-[#f7f2e9]/40 focus:outline-none focus:border-[#b3812f] rounded-l-sm"
            />
            <button
              type="submit"
              disabled={busy}
              className="px-5 py-3 bg-[#b3812f] text-[#211c14] font-sans text-[0.7rem] uppercase tracking-[0.18em] hover:bg-[#c89440] transition-colors rounded-r-sm disabled:opacity-60"
            >
              {busy ? "..." : "Join"}
            </button>
          </form>
        </div>

        {/* Explore */}
        <div className="md:col-span-2">
          <h3 className="font-sans text-[0.7rem] uppercase tracking-[0.24em] text-[#b3812f]">
            Explore
          </h3>
          <ul className="mt-5 space-y-3">
            {FOOTER_NAV.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => navigate(item.route)}
                  className="text-sm text-[#f7f2e9]/70 hover:text-[#e5c584] transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-2">
          <h3 className="font-sans text-[0.7rem] uppercase tracking-[0.24em] text-[#b3812f]">
            Studio
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-[#f7f2e9]/70">
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-[#b3812f] shrink-0" aria-hidden="true" />
              <span>
                {SITE.studio}
                <br />
                By appointment only
              </span>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 hover:text-[#e5c584] transition-colors"
              >
                <Mail className="h-4 w-4 text-[#b3812f] shrink-0" aria-hidden="true" />
                {SITE.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${SITE.phone.replace(/[^0-9]/g, "")}`}
                className="flex items-center gap-3 hover:text-[#e5c584] transition-colors"
              >
                <Phone className="h-4 w-4 text-[#b3812f] shrink-0" aria-hidden="true" />
                {SITE.phone}
              </a>
            </li>
            <li>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#e5c584] transition-colors"
              >
                <Instagram className="h-4 w-4 text-[#b3812f] shrink-0" aria-hidden="true" />
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Hours / visit */}
        <div className="md:col-span-3">
          <h3 className="font-sans text-[0.7rem] uppercase tracking-[0.24em] text-[#b3812f]">
            Print Room
          </h3>
          <p className="mt-5 text-sm leading-relaxed text-[#f7f2e9]/70">
            The print room in Ridgway keeps regular hours on summer weekends and opens by
            appointment the rest of the year. If you are driving through town, write ahead and I
            will be there. Seeing a large print in good light, from a few feet back, is a very
            different thing from seeing it on a screen, and you are welcome to come do exactly that.
          </p>
        </div>
      </div>

      <div className="border-t border-[#f7f2e9]/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#f7f2e9]/45 order-2 sm:order-1">
            All material © 2026 Alpenglow Fine Art, {SITE.artist}. All rights reserved.
          </p>
          <a
            href={SITE.designer.url}
            target="_blank"
            rel="noopener noreferrer"
            className="order-1 sm:order-2 text-xs text-[#f7f2e9]/60 hover:text-[#e5c584] transition-colors"
            aria-label="Designed By M-Webcraft Studio"
          >
            Designed By M-Webcraft Studio
          </a>
        </div>
      </div>
    </footer>
  );
}
