import type { Metadata } from 'next';
import './globals.css';
import { Questrial } from 'next/font/google';

// Primary font - Questrial (clean, modern sans-serif)
const questrialFont = Questrial({
  variable: '--font-questrial',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'TicketToOceania | Luxury Travel & Holiday Packages',
  description:
    'Book luxury holiday packages, flights, hotels and customized trips with TicketToOceania.',
  keywords: [
    'Skyluxe Journey',
    'ticket to oceania',
    'travel agency',
    'holiday packages',
    'flights',
    'hotels',
    'Dubai package',
    'Bali package',
    'Maldives package',
  ],
  icons: {
    icon: '/favicon.ico',
  },
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
        {children}
      </body>
    </html>
  );
}