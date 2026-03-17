import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Rumi Events, our story, mission, and the passionate team behind Calicut\'s premium event management services.',
  alternates: {
    canonical: 'https://rumievents.com/about',
  },
  openGraph: {
    title: 'About Us | Rumi Events',
    description: 'Learn about Rumi Events, our story, mission, and the passionate team behind Calicut\'s premium event management services.',
    url: 'https://rumievents.com/about',
    siteName: 'Rumi Events',
    images: [
      {
        url: '/og-image.jpeg',
        width: 1200,
        height: 630,
        alt: 'About Rumi Events',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Rumi Events',
    description: 'Learn about Rumi Events, our story, mission, and the passionate team behind Calicut\'s premium event management services.',
    images: ['/og-image.jpeg'],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
