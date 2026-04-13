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
          className={`${
            pathname === '/'
              ? 'text-text-primary font-bold text-lg'
              : 'text-text-secondary hover:text-text-primary font-normal text-base'
          }  transition-all duration-150 ease-out`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`${
            pathname === '/about'
              ? 'text-text-primary font-bold text-lg'
              : 'text-text-secondary hover:text-text-primary font-normal text-base'
          }  transition-all duration-150 ease-out`}
        >
          About
        </Link>
        <Link
          href="/services"
          className={`${
            pathname === '/services'
              ? 'text-text-primary font-bold text-lg'
              : 'text-text-secondary hover:text-text-primary font-normal text-base'
          }  transition-all duration-150 ease-out`}
        >
          Services
        </Link>
        <Link
          href="/products"
          className={`${
            pathname === '/products'
              ? 'text-text-primary font-bold text-lg'
              : 'text-text-secondary hover:text-text-primary font-normal text-base'
          }  transition-all duration-150 ease-out`}
        >
          Products
        </Link>
        <Link
          href="/gallery"
          className={`${
            pathname === '/gallery'
              ? 'text-text-primary font-bold text-lg'
              : 'text-text-secondary hover:text-text-primary font-normal text-base'
          }  transition-all duration-150 ease-out`}
        >
          Gallery
        </Link>
        <Link
          href="/contact"
          className={`${
            pathname === '/contact'
              ? 'text-text-primary font-bold text-lg'
              : 'text-text-secondary hover:text-text-primary font-normal text-base'
          }  transition-all duration-150 ease-out`}
        >
          Contact
        </Link>
        <RegularButton
          title="Request a Quote"
          onClick={() => {
            window.location.href = '/contact';
          }}
          hasIcon={true}
          className="bg-accent border-2 border-none text-center mt-4"
        />
      </ul>
    </div>
  );
}
