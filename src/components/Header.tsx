import Link from 'next/link';
import { Package2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex-1 flex items-center justify-start">
          <Link href="/" className="flex items-center space-x-2">
            <Package2 className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">Omega Shelf & Shutter</span>
          </Link>
        </div>
        <nav className="hidden items-center justify-center space-x-6 text-sm font-medium md:flex flex-1">
            <Link
              href="/"
              className="relative text-foreground/60 transition-colors hover:text-foreground/80 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="relative text-foreground/60 transition-colors hover:text-foreground/80 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              Our Products
            </Link>
            <Link
              href="/contact"
              className="relative text-foreground/60 transition-colors hover:text-foreground/80 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              Contact Us
            </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
            <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
