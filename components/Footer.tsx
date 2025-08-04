import Link from 'next/link';
import { MapPin, Phone, Twitter, Facebook, Instagram, LogIn } from 'lucide-react';

export function Footer() {
  const companyLocation = 'TK building, wello sefer';
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyLocation)}`;

  return (
    <footer className="bg-secondary/50 text-secondary-foreground mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4">Omega Shelf &amp; Shutter</h3>
            <p className="text-sm text-muted-foreground">Your one-stop shop for quality products, curated with care and precision.</p>
          </div>
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 shrink-0" />
                <span>+251911208396</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 shrink-0" />
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  {companyLocation}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors"><Twitter /></Link>
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors"><Facebook /></Link>
              <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors"><Instagram /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground flex items-center justify-center relative">
          <p>&copy; {new Date().getFullYear()} Omega Shelf &amp; Shutter. All rights reserved.</p>
           <Link href="/admin/login" aria-label="Admin Login" className="absolute right-0 text-muted-foreground hover:text-primary transition-colors">
            <LogIn className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
