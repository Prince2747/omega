import type { Product } from './types';
import { db } from './firebase/clientApp';
import { collection, getDocs, doc, getDoc, query } from 'firebase/firestore';

// The functions now interact with Firestore instead of an in-memory array.

export async function getProducts(): Promise<Product[]> {
    const productsCol = collection(db, 'products');
    const productsSnapshot = await getDocs(productsCol);
    const productList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
    return productList;
}

export async function getProductById(id: string): Promise<Product | undefined> {
    const productRef = doc(db, 'products', id);
    const productSnap = await getDoc(productRef);

    if (productSnap.exists()) {
        return { id: productSnap.id, ...productSnap.data() } as Product;
    } else {
        return undefined;
    }
}
