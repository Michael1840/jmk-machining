import Navbar from '@/components/navbar/Navbar';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer/Footer';
import HamburgerNav from '@/components/navbar/HamburgerNav';
import ScrollToTop from '@/components/animator/ScrollToTop';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'JMK | Industrial Machining',
  description:
    'JMK Machining handles heavy industrial machinery repairs and precision-machined parts. Gears, final drives, splined shafts, keyways, hydraulic cylinders — repaired or made to spec. We also take on welding, fabrication, and design work for a range of industrial applications. Small operation, honest work, fast turnaround.',
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
