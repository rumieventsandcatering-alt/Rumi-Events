import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery & Portfolio',
  description: 'Explore the stunning events we\'ve crafted at Rumi Events. View our gallery showcasing weddings, decor, catering, and corporate events.',
  alternates: {
    canonical: 'https://rumievents.com/gallery',
  },
  openGraph: {
    title: 'Gallery & Portfolio | Rumi Events',
    description: 'Explore the stunning events we\'ve crafted at Rumi Events. View our gallery showcasing weddings, decor, catering, and corporate events.',
    url: 'https://rumievents.com/gallery',
    siteName: 'Rumi Events',
    images: [
      {
        url: '/og-image.jpeg',
        width: 1200,
        height: 630,
        alt: 'Rumi Events Gallery',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery & Portfolio | Rumi Events',
    description: 'Explore the stunning events we\'ve crafted at Rumi Events. View our gallery showcasing weddings, decor, catering, and corporate events.',
    images: ['/og-image.jpeg'],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
