import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { TreatmentsSection } from "@/components/sections/treatments-section";
import { DoctorsSection } from "@/components/sections/doctors-section";
import { EnvironmentSection } from "@/components/sections/environment-section";
import { LocationSection } from "@/components/sections/location-section";
import { FaqPreviewSection } from "@/components/sections/faq-preview-section";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <HeroSection />
        <PhilosophySection />
        <TreatmentsSection />
        <DoctorsSection />
        <EnvironmentSection />
        <LocationSection />
        <FaqPreviewSection />
      </main>
      <SiteFooter />
    </>
  );
}
