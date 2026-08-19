// app/layout.tsx
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Questrial } from 'next/font/google';
import StatCounter from '@/components/StatCounter';
import { COMPANY, META } from './constants';

// Primary font - Questrial (clean, modern sans-serif)
const questrialFont = Questrial({
  variable: '--font-questrial',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
});

// ✅ COMPLETE SEO METADATA
export const metadata: Metadata = {
  metadataBase: new URL(`https://${COMPANY.domain}`),
  
  title: {
    default: `${COMPANY.name} | Flights, Hotels & Holiday Packages to Oceania`,
    template: `%s | ${COMPANY.name}`,
  },
  
  description: 'Book cheap flights, luxury hotels, and customized holiday packages to Oceania. Best deals on Sydney, Melbourne, Auckland, Queenstown & more. 24/7 customer support.',
  
  keywords: [
    COMPANY.name,
    'cheap flights to Oceania',
    'Oceania holiday packages',
    'Sydney package',
    'Melbourne package',
    'Auckland package',
    'Queenstown package',
    'Brisbane package',
    'Perth package',
    'Fiji package',
    'book flights online',
    'luxury travel agency',
    'holiday deals',
    'Australia travel',
    'New Zealand travel',
  ],
  
  authors: [{ name: COMPANY.name }],
  
  openGraph: {
    title: `${COMPANY.name} | Flights, Hotels & Holiday Packages to Oceania`,
    description: 'Book cheap flights, luxury hotels, and customized holiday packages to Oceania. Best deals on Sydney, Melbourne, Auckland, Queenstown & more.',
    url: `https://${COMPANY.domain}`,
    siteName: COMPANY.name,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${COMPANY.name} - Travel to Oceania`,
      },
    ],
    locale: 'en_US',
    type: 'website',
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
  
  alternates: {
    canonical: `https://${COMPANY.domain}`,
  },
  
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${questrialFont.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-gray-900 flex flex-col font-questrial">
        <StatCounter />
        {children}
      </body>
    </html>
  );
}