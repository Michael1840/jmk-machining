'use client';

import Image from 'next/image';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

import { Menu } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center gap-4 justify-between px-8 py-6 backdrop-blur-md bg-app-background/20 border-b border-border-secondary">
      <Link href="/" className="text-xl font-bold text-primary self-start">
        <Image
          src="/jmk-white.svg"
          alt="Logo"
          width={40}
          height={10}
          className="fill-white"
          color="white"
        />
      </Link>
      <div className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">
        <Link
          href="/"
          className={
            pathname === '/'
              ? 'text-text-primary font-medium text-sm'
              : 'text-text-secondary hover:text-text-primary font-normal text-sm'
          }
        >
          Home
        </Link>
        <Link
          href="/about"
          className={
            pathname === '/about'
              ? 'text-text-primary font-medium text-sm'
              : 'text-text-secondary hover:text-text-primary font-normal text-sm'
          }
        >
          About
        </Link>
        <Link
          href="/services"
          className={
            pathname === '/services'
              ? 'text-text-primary font-medium text-sm'
              : 'text-text-secondary hover:text-text-primary font-normal text-sm'
          }
        >
          Services
        </Link>
        <Link
          href="/products"
          className={
            pathname === '/products'
              ? 'text-text-primary font-medium text-sm'
              : 'text-text-secondary hover:text-text-primary font-normal text-sm'
          }
        >
          Products
        </Link>
        <Link
          href="/gallery"
          className={
            pathname === '/gallery'
              ? 'text-text-primary font-medium text-sm'
              : 'text-text-secondary hover:text-text-primary font-normal text-sm'
          }
        >
          Gallery
        </Link>
        <Link
          href="/contact"
          className={
            pathname === '/contact'
              ? 'text-text-primary font-medium text-sm'
              : 'text-text-secondary hover:text-text-primary font-normal text-sm'
          }
        >
          Contact
        </Link>
      </div>
      <Menu className=" md:hidden" />
    </div>
  );
}
