import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Saurine Dot Club | Mr Saurine is everywhere',
  description:
    'The unofficial Mr Saurine noticeboard, with an unreasonable number of stickers.',
  openGraph: {
    title: 'Saurine Dot Club | Mr Saurine is everywhere',
    description:
      'The unofficial Mr Saurine noticeboard, with an unreasonable number of stickers.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saurine Dot Club | Mr Saurine is everywhere',
    description:
      'The unofficial Mr Saurine noticeboard, with an unreasonable number of stickers.',
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
