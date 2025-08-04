import { getProductById } from '@/lib/data';
import { notFound } from 'next/navigation';
import { ProductForm } from '@/components/admin/ProductForm';

export default async function EditProductPage({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  return <ProductForm product={product} />;
}
