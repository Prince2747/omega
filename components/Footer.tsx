
import Link from 'next/link';
import { MapPin, Phone, Twitter, Facebook, Instagram, LogIn } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  const companyLocation = 'TK building, wello sefer';
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyLocation)}`;

  return (
    <footer className="bg-secondary/50 text-secondary-foreground mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
             <div className="flex items-center space-x-2 mb-4">
              <Logo className="h-6 w-6" />
              <h3 className="text-lg font-headline font-semibold">Alfa Storage Solution</h3>
            </div>
            <p className="text-sm text-muted-foreground">Fix the mess. Innovative solutions for modern living.</p>
          </div>
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4">Quick Links</h3>
             <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
                <li><Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">Products</Link></li>
                <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 shrink-0" />
                <span>0984000000 / 0911646645</span>
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
          <p>&copy; {new Date().getFullYear()} Alfa Storage Solution. All rights reserved.</p>
           <Link href="/admin/login" aria-label="Admin Login" className="absolute right-0 text-muted-foreground hover:text-primary transition-colors">
            <LogIn className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
