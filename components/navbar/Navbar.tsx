'use client';

import Image from 'next/image';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

import HamburgerNav from './HamburgerNav';
import { useEffect, useRef, useState } from 'react';

import { Twirl as Hamburger } from 'hamburger-react';
import { AnimatePresence, motion } from 'motion/react';

export default function Navbar() {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) setHeight(ref.current.scrollHeight);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 ${!isOpen ? 'bg-app-background/20' : 'bg-app-background/80'} border-b border-border-secondary backdrop-blur-md transition-colors ease-in-out duration-500`}
    >
      <div className="flex items-center gap-4 justify-between px-8 py-6">
        <Link href="/" className="text-xl font-bold text-primary">
          <Image
            src="/svgs/jmk-white.svg"
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
          {/* <Link
            href="/products"
            className={
              pathname === '/products'
                ? 'text-text-primary font-medium text-sm'
                : 'text-text-secondary hover:text-text-primary font-normal text-sm'
            }
          >
            Products
          </Link> */}
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
        <div className="relative md:hidden">
          <Hamburger size={24} toggled={isOpen} toggle={setIsOpen} />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="overflow-hidden"
          >
            <HamburgerNav pathname={pathname} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
