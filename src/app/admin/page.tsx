import { getProducts } from '@/lib/data';
import { ProductsDataTable } from '@/components/admin/ProductsDataTable';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default async function AdminProductsPage() {
  const products = await getProducts();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold font-headline tracking-tight">Products</h2>
          <p className="text-muted-foreground">Manage your product catalog.</p>
        </div>
        <Button asChild>
          <Link href="/admin/add">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Product
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Product List</CardTitle>
          <CardDescription>View, edit, or delete products from your store.</CardDescription>
        </CardHeader>
        <CardContent>
          <ProductsDataTable data={products} />
        </CardContent>
      </Card>
    </div>
  );
}
