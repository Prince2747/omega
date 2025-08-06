'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { db } from './firebase/clientApp';
import { collection, addDoc, doc, updateDoc, deleteDoc, setDoc } from 'firebase/firestore';

const productSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(3, 'Name must be at least 3 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  price: z.coerce.number().positive('Price must be a positive number'),
  category: z.string().min(1, 'Category is required'),
  imageUrl: z.string().url('Must be a valid URL'),
});

export async function saveProduct(prevState: any, formData: FormData) {
  const rawData = Object.fromEntries(formData.entries());
  const validatedFields = productSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { id, ...data } = validatedFields.data;
  
  // Create a dummy specs object for now.
  const productData = {
    ...data,
    specs: {
      Material: 'High-quality material',
      Finish: 'Customizable',
    }
  }

  try {
    if (id) {
      // Edit existing product
      const productRef = doc(db, 'products', id);
      await updateDoc(productRef, productData);
    } else {
      // Add new product
      await addDoc(collection(db, "products"), productData);
    }
  } catch (error) {
    console.error("Error saving product: ", error);
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
        const productRef = doc(db, 'products', id);
        await deleteDoc(productRef);
    } catch (error) {
        return {
            message: 'Database Error: Failed to delete product.',
        };
    }

    revalidatePath('/admin');
    revalidatePath('/');
}
