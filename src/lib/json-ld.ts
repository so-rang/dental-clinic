import { CLINIC } from "@/data/clinic";
import { DOCTORS } from "@/data/doctors";
import { FAQ } from "@/data/faq";
import { TREATMENTS } from "@/data/treatments";
import { SITE_URL } from "@/lib/site-url";

export function clinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
    "@id": `${SITE_URL}/#clinic`,
    name: CLINIC.name.ko,
    alternateName: CLINIC.name.en,
    url: SITE_URL,
    logo: `${SITE_URL}/og-image`,
    image: `${SITE_URL}/og-image`,
    description: CLINIC.description,
    slogan: CLINIC.tagline,
    telephone: CLINIC.contact.phone,
    email: CLINIC.contact.email,
    priceRange: "₩₩₩",
    paymentAccepted: "Cash, Credit Card",
    currenciesAccepted: "KRW",
    address: {
      "@type": "PostalAddress",
      streetAddress: CLINIC.address.road,
      addressLocality: "강남구",
      addressRegion: "서울특별시",
      postalCode: CLINIC.address.postalCode,
      addressCountry: "KR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CLINIC.address.latitude,
      longitude: CLINIC.address.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Wednesday",
        opens: "12:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
    medicalSpecialty: [
      "Dentistry",
      "Endodontics",
      "Prosthodontics",
      "Orthodontics",
      "CosmeticDentistry",
    ],
    availableService: TREATMENTS.map((t) => ({
      "@type": "MedicalProcedure",
      name: t.name,
      alternateName: t.english,
      description: t.description,
      url: `${SITE_URL}/treatments#${t.slug}`,
    })),
    employee: DOCTORS.map((d) => ({ "@id": `${SITE_URL}/about#${d.slug}` })),
    areaServed: [
      { "@type": "City", name: "서울특별시" },
      { "@type": "AdministrativeArea", name: "강남구" },
    ],
    sameAs: [CLINIC.contact.kakaoHref],
  };
}

export function doctorsSchema() {
  return DOCTORS.map((d) => ({
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${SITE_URL}/about#${d.slug}`,
    name: d.name.ko,
    alternateName: d.name.en,
    jobTitle: d.title,
    description: d.bio,
    medicalSpecialty: d.slug.includes("park")
      ? "Endodontics"
      : "Prosthodontics",
    worksFor: { "@id": `${SITE_URL}/#clinic` },
    knowsLanguage: ["ko", "en"],
    image: `${SITE_URL}${d.image}`,
    alumniOf: d.credentials
      .filter((c) => c.includes("대학") || c.includes("University"))
      .map((c) => ({
        "@type": "EducationalOrganization",
        name: c.split(/[ ,]/)[0],
      })),
  }));
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; href: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: CLINIC.name.ko,
    alternateName: CLINIC.name.enFull,
    inLanguage: "ko-KR",
    publisher: { "@id": `${SITE_URL}/#clinic` },
  };
}
