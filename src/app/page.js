"use client"
import { AboutUs } from "@/components/about-us";
import { Banner } from "@/components/banner";
import { Services } from "@/components/services";
import { Products } from "@/components/products";
import { VisionMission } from "@/components/vision-mission";
import { WhyUs } from "@/components/why-us";
import { Contact } from "@/components/contact";
import AnimateOnScroll from "@/components/animate-on-scroll";
import { CompanyVideos } from "@/components/company-videos";
import Head from "next/head";

// Metadata untuk SEO
export const metadata = {
  title: "PT. Bharata Alam Sentosa - Eksportir Alpukat Hass & Madu Bunga Kopi Premium Indonesia",
  description: "PT. Bharata Alam Sentosa adalah eksportir terpercaya alpukat Hass dan madu bunga kopi premium dari dataran tinggi Bali. Rasa Alam Indonesia, Kualitas Dunia. Hubungi kami untuk ekspor ke Asia Tenggara dan pasar global.",
  keywords: [
    "eksportir alpukat hass",
    "madu bunga kopi indonesia",
    "ekspor buah indonesia",
    "alpukat hass bali",
    "coffee blossom honey",
    "eksportir bali",
    "PT Bharata Alam Sentosa",
    "premium avocado indonesia",
    "organic honey export",
    "indonesia agricultural export",
    "hass avocado grade A",
    "sustainable farming bali"
  ],
  authors: [{ name: "PT. Bharata Alam Sentosa" }],
  creator: "PT. Bharata Alam Sentosa",
  publisher: "PT. Bharata Alam Sentosa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bharatafreshbali.com'),
  alternates: {
    canonical: '/',
    languages: {
      'id-ID': '/id',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: "PT. Bharata Alam Sentosa - Eksportir Alpukat Hass & Madu Bunga Kopi Premium",
    description: "Eksportir terpercaya alpukat Hass dan madu bunga kopi premium dari dataran tinggi Bali. Menghubungkan potensi agrikultur Indonesia dengan standar pasar global.",
    url: 'https://bharatafreshbali.com',
    siteName: 'PT. Bharata Alam Sentosa',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PT. Bharata Alam Sentosa - Alpukat Hass dan Madu Bunga Kopi Premium',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "PT. Bharata Alam Sentosa - Eksportir Alpukat Hass & Madu Bunga Kopi Premium",
    description: "Eksportir terpercaya alpukat Hass dan madu bunga kopi premium dari dataran tinggi Bali. Rasa Alam Indonesia, Kualitas Dunia.",
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    other: {
      'facebook-domain-verification': 'your-facebook-verification-code',
    },
  },
};

export default function Home() {
  // Structured Data JSON-LD
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://bharatafreshbali.com/#organization",
        "name": "PT. Bharata Alam Sentosa",
        "url": "https://bharatafreshbali.com",
        "sameAs": [
          "https://www.instagram.com/bharatafresh.bali"
        ],
        "logo": {
          "@type": "ImageObject",
          "url": "https://bharatafreshbali.com/images/logo.png",
          "width": "300",
          "height": "100"
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://bharatafreshbali.com/images/company-image.jpg"
        },
        "description": "PT. Bharata Alam Sentosa adalah perusahaan perdagangan ekspor yang fokus pada komoditas pertanian unggulan Indonesia, khususnya alpukat Hass dan madu bunga kopi premium dari dataran tinggi Bali.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jl. Sapuh Jagat Br Pegambangan Batubulan",
          "addressLocality": "Sukawati",
          "addressRegion": "Gianyar",
          "addressCountry": "ID",
          "postalCode": "80582"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+62-851-4313-6590",
          "contactType": "customer service",
          "availableLanguage": ["Indonesian", "English"]
        },
        "foundingDate": "2023",
        "slogan": "Rasa Alam Indonesia, Kualitas Dunia"
      },
      {
        "@type": "WebSite",
        "@id": "https://bharatafreshbali.com/#website",
        "url": "https://bharatafreshbali.com",
        "name": "PT. Bharata Alam Sentosa",
        "description": "Eksportir terpercaya alpukat Hass dan madu bunga kopi premium dari Indonesia",
        "publisher": {
          "@id": "https://bharatafreshbali.com/#organization"
        },
        "inLanguage": "id-ID"
      },
      {
        "@type": "WebPage",
        "@id": "https://bharatafreshbali.com/#webpage",
        "url": "https://bharatafreshbali.com",
        "name": "PT. Bharata Alam Sentosa - Eksportir Alpukat Hass & Madu Bunga Kopi Premium",
        "isPartOf": {
          "@id": "https://bharatafreshbali.com/#website"
        },
        "about": {
          "@id": "https://bharatafreshbali.com/#organization"
        },
        "description": "PT. Bharata Alam Sentosa adalah eksportir terpercaya alpukat Hass dan madu bunga kopi premium dari dataran tinggi Bali. Menghubungkan potensi agrikultur Indonesia dengan standar pasar global.",
        "breadcrumb": {
          "@id": "https://bharatafreshbali.com/#breadcrumb"
        },
        "inLanguage": "id-ID"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://bharatafreshbali.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://bharatafreshbali.com"
          }
        ]
      },
      {
        "@type": "Product",
        "name": "Alpukat Hass Premium",
        "description": "Alpukat Hass Grade A, B, C berkualitas ekspor dari dataran tinggi Bali",
        "brand": {
          "@type": "Brand",
          "name": "PT. Bharata Alam Sentosa"
        },
        "manufacturer": {
          "@id": "https://bharatafreshbali.com/#organization"
        },
        "category": "Agricultural Products",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Product",
        "name": "Madu Bunga Kopi",
        "description": "Coffee Blossom Honey premium dari ekosistem ramah lingkungan dataran tinggi Bali",
        "brand": {
          "@type": "Brand",
          "name": "PT. Bharata Alam Sentosa"
        },
        "manufacturer": {
          "@id": "https://bharatafreshbali.com/#organization"
        },
        "category": "Agricultural Products",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD"
        }
      }
    ]
  };

  return (
    <>
      <Head>
        {/* Additional Meta Tags */}
        <meta name="geo.region" content="ID-BA" />
        <meta name="geo.placename" content="Bali" />
        <meta name="geo.position" content="-8.5069;115.2625" />
        <meta name="ICBM" content="-8.5069, 115.2625" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Hreflang for International SEO */}
        <link rel="alternate" href="https://bharatafreshbali.com/id" hrefLang="id" />
        <link rel="alternate" href="https://bharatafreshbali.com/en" hrefLang="en" />
        <link rel="alternate" href="https://bharatafreshbali.com" hrefLang="x-default" />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//www.instagram.com" />
        <link rel="dns-prefetch" href="//maps.googleapis.com" />
      </Head>

      {/* Main Content with Semantic HTML5 Structure */}
      <main role="main" id="main-content">
        {/* Hero Section */}
        <section aria-label="Hero Banner">
          <AnimateOnScroll once={false} animation="blurInUp" duration={0.5} delay={0}>
            <Banner />
          </AnimateOnScroll>
        </section>

        {/* Company Videos Section */}
        <section aria-label="Company Videos">
          <CompanyVideos />
        </section>

        {/* About Us Section */}
        <section aria-label="About PT. Bharata Alam Sentosa">
          <AnimateOnScroll once={false} animation="blurInUp" duration={0.5} delay={0}>
            <AboutUs />
          </AnimateOnScroll>
        </section>

        {/* Why Choose Us Section */}
        <section aria-label="Why Choose PT. Bharata Alam Sentosa">
          <AnimateOnScroll once={false} animation="blurInUp" duration={0.5} delay={0}>
            <WhyUs />
          </AnimateOnScroll>
        </section>

        {/* Vision and Mission Section */}
        <section aria-label="Company Vision and Mission">
          <AnimateOnScroll once={false} animation="blurInUp" duration={0.5} delay={0}>
            <VisionMission />
          </AnimateOnScroll>
        </section>

        {/* Products Section */}
        <section aria-label="Our Products - Alpukat Hass and Coffee Blossom Honey">
          <AnimateOnScroll once={false} animation="blurInUp" duration={0.5} delay={0}>
            <Products />
          </AnimateOnScroll>
        </section>

        {/* Services Section */}
        <section aria-label="Our Export and Distribution Services">
          <AnimateOnScroll once={false} animation="blurInUp" duration={0.5} delay={0}>
            <Services />
          </AnimateOnScroll>
        </section>

        {/* Contact Section */}
        <section aria-label="Contact Information">
          <AnimateOnScroll once={false} animation="blurInUp" duration={0.5} delay={0}>
            <Contact />
          </AnimateOnScroll>
        </section>
      </main>
    </>
  );
}