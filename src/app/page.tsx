"use client";

import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { HomeView } from "@/components/site/views/home";
import { GalleryView } from "@/components/site/views/gallery";
import { PhotoView } from "@/components/site/views/photo";
import { AboutView } from "@/components/site/views/about";
import { PrintsView } from "@/components/site/views/prints";
import { ContactView } from "@/components/site/views/contact";
import { PoliciesView } from "@/components/site/views/policies";
import { useHashRoute } from "@/hooks/useHashRoute";

export default function Page() {
  const { route } = useHashRoute();

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f2e9] text-[#26211a]">
      <Header />
      <main className="flex-1">
        {route.view === "home" && <HomeView />}
        {route.view === "gallery" && <GalleryView />}
        {route.view === "photo" && (
          <PhotoView key={"slug" in route ? route.slug : ""} slug={"slug" in route ? route.slug : ""} />
        )}
        {route.view === "about" && <AboutView />}
        {route.view === "prints" && <PrintsView />}
        {route.view === "contact" && <ContactView />}
        {route.view === "policies" && <PoliciesView />}
      </main>
      <Footer />
    </div>
  );
}
