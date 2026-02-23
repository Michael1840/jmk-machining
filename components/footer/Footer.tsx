import { Phone, Mail } from 'lucide-react';

import { siFacebook, siGoogle, siInstagram } from 'simple-icons';

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row px-4 py-16 md:p-20 bg-app-container justify-around gap-16 md:gap-4">
      <div className="flex flex-col  items-center md:items-start gap-8">
        <h3 className="font-medium text-sm text-accent text-left">
          CHAT WITH US
        </h3>
        <span className="flex gap-4 items-center">
          <Phone size={16} /> <p className="text-m">(021) 3456 789</p>
        </span>
        <span className="flex gap-4 items-center">
          <Mail size={16} /> <p className="text-m">jmkmachining@gmail.com</p>
        </span>
      </div>
      <div className="flex flex-col gap-8 items-center md:items-start">
        <h3 className="font-medium text-sm text-accent text-left">
          SITE LINKS
        </h3>

        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
          <p className="text-m">Home</p>
          <p className="text-m">Products</p>
          <p className="text-m">About</p>
          <p className="text-m">Services</p>
          <p className="text-m">Gallery</p>
          <p className="text-m">Contact</p>
        </div>
      </div>
      <div className="flex flex-row md:flex-col gap-8 self-center">
        <svg
          role="img"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          fill="currentColor"
          dangerouslySetInnerHTML={{ __html: siFacebook.svg }}
        />
        <svg
          role="img"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          fill="currentColor"
          dangerouslySetInnerHTML={{ __html: siGoogle.svg }}
        />
        <svg
          role="img"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          fill="currentColor"
          dangerouslySetInnerHTML={{ __html: siInstagram.svg }}
        />
      </div>
    </footer>
  );
}
