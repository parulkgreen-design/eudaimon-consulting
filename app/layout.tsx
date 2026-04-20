import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.eudaimonconsulting.com"),
  title: {
    default: "Eudaimon Consulting | AI Strategy & Digital Transformation for Financial Services",
    template: "%s | Eudaimon Consulting",
  },
  description:
    "Boutique strategic advisory for insurers, investment managers and financial services firms. Specialising in AI strategy, digital transformation, M&A advisory and Lloyd's market consulting. Founded by Parul Kaul-Green.",
  keywords: [
    "insurance consulting",
    "AI strategy financial services",
    "digital transformation insurance",
    "Lloyd's market consulting",
    "insurtech advisory",
    "M&A insurance",
    "Parul Kaul-Green",
    "Eudaimon Consulting",
    "AI underwriting",
    "insurance AI strategy",
    "specialty reinsurance",
    "financial services consulting London",
  ],
  authors: [{ name: "Parul Kaul-Green", url: "https://www.eudaimonconsulting.com/founder" }],
  creator: "Eudaimon Consulting",
  publisher: "Eudaimon Consulting",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.eudaimonconsulting.com",
    siteName: "Eudaimon Consulting",
    title: "Eudaimon Consulting | AI Strategy & Digital Transformation for Financial Services",
    description:
      "Boutique strategic advisory for insurers and financial services firms. AI strategy, digital transformation, M&A advisory and Lloyd's market consulting.",
    images: [
      {
        url: "/assets/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Eudaimon Consulting — Strategic Advisory for Financial Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eudaimon Consulting | AI Strategy & Digital Transformation for Financial Services",
    description:
      "Boutique strategic advisory for insurers and financial services firms. AI strategy, digital transformation, M&A advisory.",
    images: ["/assets/logo.jpg"],
  },
  alternates: {
    canonical: "https://www.eudaimonconsulting.com",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Eudaimon Consulting",
  url: "https://www.eudaimonconsulting.com",
  logo: "https://www.eudaimonconsulting.com/assets/logo.jpg",
  description:
    "Boutique strategic advisory for financial services companies navigating digital transformation, AI strategy, and M&A.",
  founder: {
    "@type": "Person",
    name: "Parul Kaul-Green",
    jobTitle: "Founder & Chief Strategist",
    url: "https://www.eudaimonconsulting.com/founder",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "GB",
    addressLocality: "London",
  },
  areaServed: ["GB", "US", "EU"],
  serviceType: [
    "AI Strategy Consulting",
    "Digital Transformation",
    "M&A Advisory",
    "Insurance Consulting",
    "Financial Services Strategy",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="bg-[#0a0a0a] text-white overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
