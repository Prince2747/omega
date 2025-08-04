'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { products } from './data';
import type { Product } from './types';

const productSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(3, 'Name must be at least 3 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  price: z.coerce.number().positive('Price must be a positive number'),
  category: z.string().min(1, 'Category is required'),
  imageUrl: z.string().url('Must be a valid URL'),
});

export async function saveProduct(formData: FormData) {
  const rawData = Object.fromEntries(formData.entries());
  const validatedFields = productSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { id, ...data } = validatedFields.data;

  try {
    if (id) {
      // Edit existing product
      const index = products.findIndex((p) => p.id === id);
      if (index !== -1) {
        products[index] = { ...products[index], ...data };
      }
    } else {
      // Add new product
      const newProduct: Product = {
        ...data,
        id: (products.length + 1).toString(),
        specs: { // Dummy specs for new products
          'New Feature': 'Customizable'
        }
      };
      products.push(newProduct);
    }
  } catch (error) {
    return {
      message: 'Database Error: Failed to save product.',
    };
  }
  
  revalidatePath('/admin');
  revalidatePath('/');
  if (id) {
    revalidatePath(`/products/${id}`);
  }
  redirect('/admin');
}

export async function deleteProduct(id: string) {
    try {
        const index = products.findIndex((p) => p.id === id);
        if (index !== -1) {
            products.splice(index, 1);
        }
    } catch (error) {
        return {
            message: 'Database Error: Failed to delete product.',
        };
    }

    revalidatePath('/admin');
    revalidatePath('/');
}
