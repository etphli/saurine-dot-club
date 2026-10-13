import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://saurine.vercel.app'),
  title: 'The Saurine Chronicle | 500 unofficial sightings',
  description:
    'An unofficial, affectionate field guide to Mr Saurine: 500 portraits, sightings, and school-day side quests.',
  openGraph: {
    title: 'The Saurine Chronicle | 500 unofficial sightings',
    description:
      'An unofficial, affectionate field guide to Mr Saurine: 500 portraits, sightings, and school-day side quests.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Saurine Chronicle | 500 unofficial sightings',
    description:
      'An unofficial, affectionate field guide to Mr Saurine: 500 portraits, sightings, and school-day side quests.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
