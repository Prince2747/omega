'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { saveProduct } from '@/lib/actions';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import type { Product } from '@/lib/types';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';

interface ProductFormProps {
  product?: Product | null;
}

function SubmitButton({ isEditing }: { isEditing: boolean }) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {isEditing ? 'Save Changes' : 'Create Product'}
    </Button>
  );
}

export function ProductForm({ product }: ProductFormProps) {
  const isEditing = !!product;
  const initialState = { errors: {}, message: null };
  const [state, dispatch] = useFormState(saveProduct, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({
        variant: 'destructive',
        title: 'Error saving product',
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <Card className="max-w-2xl mx-auto">
      <form action={dispatch}>
        <CardHeader>
            <CardTitle className="font-headline text-2xl">{isEditing ? 'Edit Product' : 'Add New Product'}</CardTitle>
            <CardDescription>{isEditing ? 'Update the details of your product.' : 'Fill out the form to add a new product to your catalog.'}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            {isEditing && <input type="hidden" name="id" value={product.id} />}
            <div className="space-y-2">
                <Label htmlFor="name">Product Name</Label>
                <Input id="name" name="name" defaultValue={product?.name} required />
                {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
            </div>
            <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" name="description" defaultValue={product?.description} required />
                {state.errors?.description && <p className="text-sm text-destructive">{state.errors.description[0]}</p>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="price">Price</Label>
                    <Input id="price" name="price" type="number" step="0.01" defaultValue={product?.price} required />
                    {state.errors?.price && <p className="text-sm text-destructive">{state.errors.price[0]}</p>}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Input id="category" name="category" defaultValue={product?.category} required />
                    {state.errors?.category && <p className="text-sm text-destructive">{state.errors.category[0]}</p>}
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="imageUrl">Image URL</Label>
                <Input id="imageUrl" name="imageUrl" type="url" defaultValue={product?.imageUrl} placeholder="https://placehold.co/600x600.png" required />
                {state.errors?.imageUrl && <p className="text-sm text-destructive">{state.errors.imageUrl[0]}</p>}
            </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline" asChild>
              <Link href="/admin">Cancel</Link>
          </Button>
          <SubmitButton isEditing={isEditing} />
        </CardFooter>
      </form>
    </Card>
  );
}
