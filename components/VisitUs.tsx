import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import  maps  from "../public/maps.jpg"
export function VisitUs() {
  const companyLocation = 'Medhin Building, Legehar';
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyLocation)}`;

  return (
    <div className="container py-12 md:py-24">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-headline font-bold">Visit Our Showroom</h2>
        <p className="mt-3 text-lg text-muted-foreground max-w-xl mx-auto">
          Experience our products in person. We are located in the heart of the city.
        </p>
      </div>
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <Link href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
            <div className="relative aspect-video md:aspect-[2.4/1] group">
              <Image
                src={maps}
                alt="Map to our office"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint="map location"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-center text-white p-4 bg-black/30 rounded-lg backdrop-blur-sm">
                  <MapPin className="h-10 w-10 mx-auto mb-2 text-primary" />
                  <h3 className="text-xl font-bold font-headline">{companyLocation}</h3>
                  <p className="text-sm mt-1">Click to open in Google Maps</p>
                </div>
              </div>
            </div>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
