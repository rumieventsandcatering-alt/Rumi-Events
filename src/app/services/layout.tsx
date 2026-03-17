import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Discover the expert event management services by Rumi Events. From weddings and catering to decor and photography, we handle it all.',
  alternates: {
    canonical: 'https://rumievents.com/services',
  },
  openGraph: {
    title: 'Our Services | Rumi Events',
    description: 'Discover the expert event management services by Rumi Events. From weddings and catering to decor and photography, we handle it all.',
    url: 'https://rumievents.com/services',
    siteName: 'Rumi Events',
    images: [
      {
        url: '/og-image.jpeg',
        width: 1200,
        height: 630,
        alt: 'Rumi Events Services',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services | Rumi Events',
    description: 'Discover the expert event management services by Rumi Events. From weddings and catering to decor and photography, we handle it all.',
    images: ['/og-image.jpeg'],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
