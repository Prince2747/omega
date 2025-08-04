import { getProductById } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { SocialShareButtons } from '@/components/SocialShareButtons';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container py-8 md:py-16">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
        <div className="aspect-square relative rounded-lg overflow-hidden border shadow-sm">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
            data-ai-hint={`${product.category.toLowerCase()} product`}
          />
        </div>
        <div className="flex flex-col h-full">
          <Badge variant="secondary" className="w-fit mb-2">{product.category}</Badge>
          <h1 className="text-3xl md:text-4xl font-headline font-bold mb-4">{product.name}</h1>
          <p className="text-muted-foreground mb-6 text-lg">{product.description}</p>
          
          <div className="mt-auto">
            <Separator className="my-6" />

            <div className="mb-6">
              <h3 className="text-lg font-semibold font-headline mb-4">Specifications</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {Object.entries(product.specs).map(([key, value]) => (
                  <li key={key} className="flex justify-between">
                    <span className="font-medium text-foreground">{key}:</span>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator className="my-6" />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-4">
              <Button size="lg" className="w-full sm:w-auto">
                <ShoppingCart className="mr-2" /> Add to Cart
              </Button>
            </div>
            
            <div className="mt-8 text-center">
              <SocialShareButtons product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
