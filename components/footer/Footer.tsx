import { Phone, Mail } from 'lucide-react';
import Link from 'next/link';

import { siFacebook, siGoogle, siInstagram } from 'simple-icons';

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col md:flex-row px-4 py-16 md:p-20 bg-app-container justify-around gap-16 md:gap-4">
        <div className="flex flex-col  items-center md:items-start gap-8">
          <h3 className="font-medium text-sm text-accent text-left">
            CHAT WITH US
          </h3>
          <a
            href="tel:+27605245324"
            className="flex gap-4 items-center hover:text-accent transition-colors"
          >
            <Phone size={16} /> <p className="text-m">+27 60 524 5324</p>
          </a>

          <a
            href="mailto:jmkmachining@gmail.com"
            className="flex gap-4 items-center hover:text-accent transition-colors"
          >
            <Mail size={16} /> <p className="text-m">jmkmachining@gmail.com</p>
          </a>
        </div>
        <div className="flex flex-col gap-8 items-center md:items-start">
          <h3 className="font-medium text-sm text-accent text-left">
            SITE LINKS
          </h3>

          <div className="grid grid-cols-2 gap-y-4 gap-x-8">
            <a href="/" className="text-m hover:text-accent transition-colors">
              Home
            </a>
            <a
              href="/about"
              className="text-m hover:text-accent transition-colors"
            >
              About
            </a>
            <a
              href="/services"
              className="text-m hover:text-accent transition-colors"
            >
              Services
            </a>
            <a
              href="/gallery"
              className="text-m hover:text-accent transition-colors"
            >
              Gallery
            </a>
            <a
              href="/contact"
              className="text-m hover:text-accent transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="flex flex-row md:flex-col gap-8 self-center">
          <a
            href="https://www.facebook.com/jmkmachining"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              fill="currentColor"
              dangerouslySetInnerHTML={{ __html: siFacebook.svg }}
            />
          </a>

          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              fill="currentColor"
              dangerouslySetInnerHTML={{ __html: siGoogle.svg }}
            />
          </a>

          <a
            href="https://www.instagram.com/jmk_machining/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              fill="currentColor"
              dangerouslySetInnerHTML={{ __html: siInstagram.svg }}
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row bg-app-container border-t border-border-primary p-8 gap-4 items-center sm:justify-between ">
        <p className="text-sm">
          © {new Date().getFullYear()} JMK Machining. All rights reserved.
        </p>
        <Link className="text-sm text-accent" href="/privacy-policy">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
