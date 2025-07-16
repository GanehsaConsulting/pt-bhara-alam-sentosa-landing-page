import { Nunito } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/ui/footer";
import { NavigationBar } from "@/components/navigation-bar";
import { FloatingButton } from "@/components/floating-button";
import { CustomScrollbar } from "@/components/custom-scrollbar";
import Script from "next/script";
import { Viewport } from "next";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  display: "swap", // Improved font loading performance
  variable: "--font-nunito"
});

// Enhanced Metadata untuk SEO
export const metadata = {
  metadataBase: new URL('https://bharatafreshbali.com'),
  title: {
    default: "PT. Bharata Alam Sentosa - Eksportir Alpukat Hass & Madu Bunga Kopi Premium Indonesia",
    template: "%s | PT. Bharata Alam Sentosa"
  },
  description: "PT. Bharata Alam Sentosa adalah eksportir terpercaya alpukat Hass dan madu bunga kopi premium dari dataran tinggi Bali. Rasa Alam Indonesia, Kualitas Dunia. Ekspor ke Asia Tenggara, Timur Tengah, dan pasar global.",
  applicationName: "PT. Bharata Alam Sentosa",
  referrer: "origin-when-cross-origin",
  keywords: [
    "eksportir alpukat hass indonesia",
    "madu bunga kopi premium",
    "coffee blossom honey export",
    "hass avocado bali",
    "organic honey indonesia",
    "agricultural export bali",
    "PT Bharata Alam Sentosa",
    "ekspor buah indonesia",
    "premium avocado export",
    "sustainable farming bali",
    "indonesia superfood export",
    "dataran tinggi bali",
    "kualitas ekspor internasional",
    "horeca distributor bali",
    "bharata fresh bali"
  ],
  authors: [
    { name: "PT. Bharata Alam Sentosa", url: "https://bharatafreshbali.com" }
  ],
  creator: "PT. Bharata Alam Sentosa",
  publisher: "PT. Bharata Alam Sentosa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Agriculture Export",
  classification: "Business",
  
  // Open Graph Enhanced
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: ["en_US", "zh_CN", "ar_SA"],
    url: "https://bharatafreshbali.com",
    siteName: "PT. Bharata Alam Sentosa",
    title: "PT. Bharata Alam Sentosa - Eksportir Alpukat Hass & Madu Bunga Kopi Premium",
    description: "Eksportir terpercaya alpukat Hass dan madu bunga kopi premium dari dataran tinggi Bali. Menghubungkan potensi agrikultur Indonesia dengan standar pasar global. Rasa Alam Indonesia, Kualitas Dunia.",
    images: [
      {
        url: "/images/og-image-main.jpg",
        width: 1200,
        height: 630,
        alt: "PT. Bharata Alam Sentosa - Alpukat Hass dan Madu Bunga Kopi Premium dari Bali",
        type: "image/jpeg",
      },
      {
        url: "/images/og-image-products.jpg",
        width: 1200,
        height: 630,
        alt: "Produk Premium PT. Bharata Alam Sentosa - Alpukat Hass Grade A dan Coffee Blossom Honey",
        type: "image/jpeg",
      }
    ],
  },

  // Twitter Card Enhanced
  twitter: {
    card: "summary_large_image",
    site: "@bharatafresh",
    creator: "@bharatafresh",
    title: "PT. Bharata Alam Sentosa - Eksportir Alpukat Hass & Madu Bunga Kopi Premium",
    description: "Eksportir terpercaya dari Bali. Alpukat Hass Grade A dan Coffee Blossom Honey premium untuk pasar global. 🥑🍯 #IndonesiaExport #OrganicProduce",
    images: ["/images/twitter-card.jpg"],
  },

  // Enhanced Robots Configuration
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons Enhanced
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon-152x152.png", sizes: "152x152", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#4ade80" },
    ],
  },

  // Web App Manifest
  manifest: "/site.webmanifest",

  // Verification Codes
  verification: {
    google: "your-google-site-verification",
    yandex: "your-yandex-verification",
    yahoo: "your-yahoo-verification",
    other: {
      "msvalidate.01": "your-bing-verification",
      "facebook-domain-verification": "your-facebook-verification",
      "p:domain_verify": "your-pinterest-verification",
    },
  },

  // Alternative Languages
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/",
      "en-US": "/en",
      "zh-CN": "/zh",
      "ar-SA": "/ar",
    },
  },

  // Additional Meta Tags
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Bharata Alam Sentosa",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#4ade80",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#ffffff",
    
    // Business Information
    "geo.region": "ID-BA",
    "geo.placename": "Bali, Indonesia",
    "geo.position": "-8.5069;115.2625",
    "ICBM": "-8.5069, 115.2625",
    "geo.country": "Indonesia",
    
    // Industry Classification
    "classification": "Agriculture, Export, Organic Food",
    "subject": "Agricultural Export, Organic Products, Indonesian Superfood",
    "coverage": "Indonesia, Asia, Middle East, Global",
    "distribution": "Global",
    "rating": "General",
    
    // Copyright and Ownership
    "copyright": "© 2024 PT. Bharata Alam Sentosa. All rights reserved.",
    "author": "PT. Bharata Alam Sentosa",
    "owner": "PT. Bharata Alam Sentosa",
    
    // Cache Control
    "cache-control": "public, max-age=31536000",
    
    // Security Headers
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    
    // Performance Hints
    "dns-prefetch": "//www.google-analytics.com",
    "preconnect": "//fonts.googleapis.com",
  },
};

// Viewport Configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Organization Structured Data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://bharatafreshbali.com/#organization",
    "name": "PT. Bharata Alam Sentosa",
    "alternateName": "Bharata Alam Sentosa",
    "url": "https://bharatafreshbali.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://bharatafreshbali.com/images/logo.png",
      "width": "300",
      "height": "100"
    },
    "image": "https://bharatafreshbali.com/images/company-image.jpg",
    "description": "PT. Bharata Alam Sentosa adalah perusahaan perdagangan ekspor yang fokus pada komoditas pertanian unggulan Indonesia, khususnya alpukat Hass dan madu bunga kopi premium dari dataran tinggi Bali.",
    "slogan": "Rasa Alam Indonesia, Kualitas Dunia",
    "foundingDate": "2023",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Sapuh Jagat Br Pegambangan Batubulan",
      "addressLocality": "Sukawati",
      "addressRegion": "Gianyar",
      "addressCountry": "ID",
      "postalCode": "80582"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-8.5069",
      "longitude": "115.2625"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+62-851-4313-6590",
        "contactType": "customer service",
        "availableLanguage": ["Indonesian", "English"],
        "areaServed": ["ID", "SG", "MY", "TH", "VN", "AE", "SA"]
      }
    ],
    "sameAs": [
      "https://www.instagram.com/bharatafresh.bali"
    ],
    "employee": [
      {
        "@type": "Person",
        "name": "Putri Rinjani",
        "jobTitle": "Komisaris Utama"
      },
      {
        "@type": "Person",
        "name": "Annisa Az Zahra",
        "jobTitle": "Direktur Utama"
      }
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Alpukat Hass Premium",
          "category": "Agricultural Products"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Madu Bunga Kopi",
          "category": "Agricultural Products"
        }
      }
    ],
    "areaServed": {
      "@type": "Place",
      "name": "Global"
    },
    "knowsAbout": [
      "Agricultural Export",
      "Organic Farming",
      "Sustainable Agriculture",
      "International Trade",
      "Food Safety Standards"
    ]
  };

  // Website Structured Data
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://bharatafreshbali.com/#website",
    "url": "https://bharatafreshbali.com",
    "name": "PT. Bharata Alam Sentosa",
    "description": "Official website of PT. Bharata Alam Sentosa - Eksportir terpercaya alpukat Hass dan madu bunga kopi premium dari Indonesia",
    "publisher": {
      "@id": "https://bharatafreshbali.com/#organization"
    },
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://bharatafreshbali.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    ],
    "inLanguage": "id-ID"
  };

  return (
    <html 
      className="scroll-smooth" 
      lang="id"
      dir="ltr"
      prefix="og: https://ogp.me/ns#"
    >
      <head>
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//www.instagram.com" />
        <link rel="dns-prefetch" href="//maps.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        
        {/* Resource Hints */}
        <link rel="preload" href="/fonts/nunito-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/images/hero-bg.webp" as="image" type="image/webp" />
        
        {/* Alternative Languages */}
        <link rel="alternate" href="https://bharatafreshbali.com/" hrefLang="id" />
        <link rel="alternate" href="https://bharatafreshbali.com/en" hrefLang="en" />
        <link rel="alternate" href="https://bharatafreshbali.com/zh" hrefLang="zh" />
        <link rel="alternate" href="https://bharatafreshbali.com/ar" hrefLang="ar" />
        <link rel="alternate" href="https://bharatafreshbali.com/" hrefLang="x-default" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        
        {/* Additional Meta Tags */}
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="date=no" />
        <meta name="format-detection" content="address=no" />
        <meta name="format-detection" content="email=no" />
        
        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        
        {/* Performance Optimization */}
        <meta httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width" />
        <meta name="optimize-mobile" content="yes" />
        
        {/* Business Specific */}
        <meta name="business-type" content="Agricultural Export Company" />
        <meta name="target-country" content="Indonesia, Singapore, Malaysia, Thailand, Vietnam, UAE, Saudi Arabia" />
        <meta name="products" content="Hass Avocado, Coffee Blossom Honey, Agricultural Exports" />
        <meta name="service-area" content="Global Export, HORECA Distribution, Agricultural Consulting" />
      </head>
      
      <body
        className={`${nunito.className} antialiased`}
        itemScope
        itemType="https://schema.org/WebPage"
      >
        {/* Skip to Main Content for Accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50"
          aria-label="Skip to main content"
        >
          Skip to main content
        </a>
        
        {/* Header */}
        <header role="banner" aria-label="Main navigation">
          <Navbar>
            {children}
          </Navbar>
        </header>
        
        {/* Additional Components */}
        <CustomScrollbar />
        <FloatingButton />
        <NavigationBar />
        
        {/* Footer */}
        <Footer />
        
        {/* Google Analytics - Replace with your GA4 tracking ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_TRACKING_ID', {
              page_title: 'PT. Bharata Alam Sentosa',
              custom_map: {
                'custom_parameter_1': 'agricultural_export',
                'custom_parameter_2': 'indonesia_organic'
              }
            });
          `}
        </Script>
        
        {/* Facebook Pixel - Replace with your Pixel ID */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_PIXEL_ID');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* WhatsApp Business API Integration */}
        <Script id="whatsapp-business" strategy="lazyOnload">
          {`
            // WhatsApp Business API integration
            window.WhatsAppWidget = {
              phone: '+6285143136590',
              message: 'Halo PT. Bharata Alam Sentosa, saya tertarik dengan produk ekspor Anda.',
              position: 'right'
            };
          `}
        </Script>
      </body>
    </html>
  );
}