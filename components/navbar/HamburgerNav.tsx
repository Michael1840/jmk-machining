import Link from 'next/link';
import RegularButton from '../buttons/RegularButton';

export default function HamburgerNav({
  className,
  pathname,
}: {
  className?: string;
  pathname: string;
}) {
  return (
    <div className={className}>
      <ul className="flex flex-col px-8 pb-8 gap-4">
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
        <RegularButton
          title="Request a Quote"
          onClick={() => {}}
          hasIcon={true}
          className="bg-accent border-2 border-none text-center mt-4"
        />
      </ul>
    </div>
  );
}
