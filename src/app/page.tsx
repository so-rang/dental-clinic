import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { TreatmentsSection } from "@/components/sections/treatments-section";
import { DoctorsSection } from "@/components/sections/doctors-section";
import { EnvironmentSection } from "@/components/sections/environment-section";
import { LocationSection } from "@/components/sections/location-section";
import { FaqPreviewSection } from "@/components/sections/faq-preview-section";
import { JsonLd } from "@/components/json-ld";
import {
  clinicSchema,
  doctorsSchema,
  websiteSchema,
  faqSchema,
} from "@/lib/json-ld";

export default function HomePage() {
  return (
    <>
      <JsonLd id="ld-clinic" data={clinicSchema()} />
      <JsonLd id="ld-website" data={websiteSchema()} />
      <JsonLd id="ld-faq-preview" data={faqSchema()} />
      {doctorsSchema().map((d, i) => (
        <JsonLd key={i} id={`ld-doctor-${i}`} data={d} />
      ))}

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
