import { Button } from '@/components/ui/button';
import { VisitUs } from '@/components/VisitUs';
import { HowItWorks } from '@/components/HowItWorks';
import { FuturisticSlideshow } from '@/components/FuturisticSlideshow';
import Image from 'next/image';
import Link from 'next/link';
import homep from "../public/photo_2025-08-04_10-42-56.jpg"

export default function LandingPage() {
  return (
    <>
      <section className="container grid lg:grid-cols-2 gap-8 items-center py-12 md:py-24">
        <div className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold">
            Exquisite Shelving &amp; Shutters
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover bespoke, high-quality solutions to elevate your space. Crafted with precision, designed for life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
            <Button size="lg" asChild>
              <Link href="/products">Explore Our Products</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
        <div className="aspect-square relative rounded-lg overflow-hidden border shadow-lg">
            <Image 
                src={homep}
                alt="Stylish living room with modern shelving"
                fill
                className="object-cover"
                data-ai-hint="living room shelving"
            />
        </div>
      </section>
      <FuturisticSlideshow />
      <HowItWorks />
      <VisitUs />
    </>
  );
}
