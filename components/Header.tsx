
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Logo } from '@/components/Logo';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import React from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex-1 flex items-center justify-start">
          <Link href="/" className="flex items-center space-x-2">
            <Logo className="h-8 w-8" />
            <span className="font-bold font-headline text-lg">Alfa Storage Solution</span>
          </Link>
        </div>
        <nav className="hidden items-center justify-center space-x-6 text-sm font-medium md:flex">
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
              href="/about"
              className="relative text-foreground/60 transition-colors hover:text-foreground/80 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="relative text-foreground/60 transition-colors hover:text-foreground/80 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              Contact Us
            </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
            <div className="md:hidden">
                <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Open Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <SheetHeader>
                            <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                        </SheetHeader>
                        <nav className="flex flex-col gap-6 text-lg font-medium mt-8">
                            <SheetClose asChild>
                                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link href="/products" className="hover:text-primary transition-colors">Our Products</Link>
                            </SheetClose>
                             <SheetClose asChild>
                                <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
                            </SheetClose>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
            <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
