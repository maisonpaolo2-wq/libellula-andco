import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { site } from '@/content/data'
import ScrollTop from '@/components/ScrollTop'

export const metadata: Metadata = {
  title: `${site.name} · Decoración y alquiler de mobiliario en Tenerife`,
  description: site.description,
  metadataBase: new URL(site.url),
  alternates: { canonical: site.url },
  openGraph: {
    type: 'website',
    url: site.url,
    title: `${site.name} · Decoración y alquiler de mobiliario en Tenerife`,
    description: site.description,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }],
    locale: 'es_ES',
    siteName: site.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} · Decoración y alquiler de mobiliario en Tenerife`,
    description: site.description,
    images: [site.ogImage],
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
  telephone: `+${site.whatsapp}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tenerife',
    addressRegion: 'Canarias',
    addressCountry: 'ES',
  },
  sameAs: [`https://instagram.com/${site.instagram}`],
  priceRange: '€€',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '3',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ScrollTop />
        <Nav />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
