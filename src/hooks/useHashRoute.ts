"use client";

import { useCallback, useEffect, useState } from "react";

export type Route =
  | { view: "home" }
  | { view: "gallery" }
  | { view: "photo"; slug: string }
  | { view: "about" }
  | { view: "prints" }
  | { view: "contact" }
  | { view: "policies" };

export function parseHash(hash: string): Route {
  const clean = hash.replace(/^#\/?/, "").replace(/\/$/, "");
  if (clean === "") return { view: "home" };
  const parts = clean.split("/");
  switch (parts[0]) {
    case "gallery":
      return { view: "gallery" };
    case "photo":
      return { view: "photo", slug: parts[1] ?? "" };
    case "about":
      return { view: "about" };
    case "prints":
      return { view: "prints" };
    case "contact":
      return { view: "contact" };
    case "policies":
      return { view: "policies" };
    default:
      return { view: "home" };
  }
}

export function routeToHash(route: Route): string {
  switch (route.view) {
    case "home":
      return "#/";
    case "photo":
      return `#/photo/${route.slug}`;
    default:
      return `#/${route.view}`;
  }
}

export function useHashRoute() {
  const [route, setRoute] = useState<Route>(() =>
    typeof window === "undefined" ? { view: "home" } : parseHash(window.location.hash)
  );

  useEffect(() => {
    const onChange = () => {
      setRoute(parseHash(window.location.hash));
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  const navigate = useCallback((r: Route) => {
    const target = routeToHash(r);
    if (window.location.hash === target) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    window.location.hash = target;
  }, []);

  return { route, navigate };
}
