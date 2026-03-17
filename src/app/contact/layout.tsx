import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Rumi Events. Reach out for consultations, inquiries, and bookings for your premium events in Calicut.',
  alternates: {
    canonical: 'https://rumievents.com/contact',
  },
  openGraph: {
    title: 'Contact Us | Rumi Events',
    description: 'Get in touch with Rumi Events. Reach out for consultations, inquiries, and bookings for your premium events in Calicut.',
    url: 'https://rumievents.com/contact',
    siteName: 'Rumi Events',
    images: [
      {
        url: '/og-image.jpeg',
        width: 1200,
        height: 630,
        alt: 'Contact Rumi Events',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Rumi Events',
    description: 'Get in touch with Rumi Events. Reach out for consultations, inquiries, and bookings for your premium events in Calicut.',
    images: ['/og-image.jpeg'],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
