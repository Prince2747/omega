import { getProducts } from '@/lib/data';
import { ProductGrid } from '@/components/ProductGrid';
import { VisitUs } from '@/components/VisitUs';

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <div className="container py-8 md:py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Product Catalog</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collection of fine products, designed with quality and style in mind.
          </p>
        </div>
        
        <ProductGrid products={products} />
      </div>
      <VisitUs />
    </>
  );
}
