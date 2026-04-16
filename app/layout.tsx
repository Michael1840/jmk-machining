import Navbar from '@/components/navbar/Navbar';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'JMK Machining - Heavy Industrial Machining, Welding & Fabrication',
  icons: {
    icon: '/favicon.ico',
  },
  description:
    'Heavy industrial machinery repairs and precision-machined parts — milling, turning, hydraulics, gears, final drives, splined shafts, keyways, and cylinders. TIG, MIG, and arc welding, fabrication, and CAD design also available. Fast turnaround.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {/* <ScrollToTop /> */}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
