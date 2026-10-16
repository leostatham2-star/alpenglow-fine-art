"use client";

import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { useHashRoute, type Route } from "@/hooks/useHashRoute";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const NAV: { label: string; route: Route }[] = [
  { label: "Gallery", route: { view: "gallery" } },
  { label: "About the Artist", route: { view: "about" } },
  { label: "About Prints", route: { view: "prints" } },
  { label: "Contact", route: { view: "contact" } },
];

export function Header() {
  const { route, navigate } = useHashRoute();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const overHero = route.view === "home" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (r: Route) => {
    setOpen(false);
    navigate(r);
  };

  const isActive = (r: Route) => {
    if (r.view === "gallery" && route.view === "photo") return true;
    return route.view === r.view;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        overHero
          ? "bg-transparent"
          : "bg-[#f7f2e9]/95 backdrop-blur border-b border-[#26211a]/10 shadow-[0_1px_12px_rgba(38,33,26,0.06)]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-[72px] flex items-center justify-between">
        <button
          onClick={() => go({ view: "home" })}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b3812f] rounded-sm"
          aria-label="Alpenglow Fine Art home"
        >
          <Logo light={overHero} />
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {NAV.map((item) => (
            <button
              key={item.label}
              onClick={() => go(item.route)}
              className={`font-sans text-[0.72rem] uppercase tracking-[0.18em] transition-colors duration-300 hover:text-[#b3812f] focus-visible:ring-2 focus-visible:ring-[#b3812f] rounded-sm ${
                overHero
                  ? isActive(item.route)
                    ? "text-[#e5c584]"
                    : "text-[#f7f2e9]/90"
                  : isActive(item.route)
                    ? "text-[#b3812f]"
                    : "text-[#26211a]/80"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => go({ view: "contact" })}
            className="font-sans text-[0.72rem] uppercase tracking-[0.18em] px-5 py-2.5 border transition-all duration-300 rounded-sm hover:bg-[#b3812f] hover:border-[#b3812f] hover:text-[#f7f2e9] focus-visible:ring-2 focus-visible:ring-[#b3812f]"
            style={{
              borderColor: "#b3812f",
              color: overHero && !isActive({ view: "contact" }) ? "#f7f2e9" : "#b3812f",
            }}
          >
            Request a Piece
          </button>
        </nav>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className="md:hidden p-2 rounded-sm focus-visible:ring-2 focus-visible:ring-[#b3812f]"
              aria-label="Open menu"
              style={{ color: overHero ? "#f7f2e9" : "#26211a" }}
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#f7f2e9] border-l border-[#26211a]/10 w-[300px]">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <div className="mt-10 flex flex-col gap-1">
              {NAV.map((item) => (
                <button
                  key={item.label}
                  onClick={() => go(item.route)}
                  className={`text-left font-sans text-sm uppercase tracking-[0.18em] py-4 border-b border-[#26211a]/8 transition-colors hover:text-[#b3812f] ${
                    isActive(item.route) ? "text-[#b3812f]" : "text-[#26211a]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => go({ view: "contact" })}
                className="mt-6 font-sans text-[0.72rem] uppercase tracking-[0.18em] px-5 py-3.5 bg-[#b3812f] text-[#f7f2e9] rounded-sm"
              >
                Request a Piece
              </button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
