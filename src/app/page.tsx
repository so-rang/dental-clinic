import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { TreatmentsSection } from "@/components/sections/treatments-section";
import { DoctorsSection } from "@/components/sections/doctors-section";
import { EnvironmentSection } from "@/components/sections/environment-section";
import { LocationSection } from "@/components/sections/location-section";
import { FaqSection } from "@/components/sections/faq-section";
import { ReservationSection } from "@/components/sections/reservation-section";
import { JsonLd } from "@/components/json-ld";
import {
  clinicSchema,
  doctorsSchema,
  websiteSchema,
  faqSchema,
} from "@/lib/json-ld";
import { SITE_URL } from "@/lib/site-url";
import { TREATMENTS } from "@/data/treatments";

const proceduresSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: TREATMENTS.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "MedicalProcedure",
      name: t.name,
      alternateName: t.english,
      description: t.description,
      url: `${SITE_URL}/#${t.slug}`,
      procedureType: "Therapeutic",
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <JsonLd id="ld-clinic" data={clinicSchema()} />
      <JsonLd id="ld-website" data={websiteSchema()} />
      <JsonLd id="ld-faq" data={faqSchema()} />
      <JsonLd id="ld-procedures" data={proceduresSchema} />
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
        <FaqSection />
        <ReservationSection />
      </main>
      <SiteFooter />
    </>
  );
}
