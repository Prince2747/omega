import type { Product } from './types';

// In a real application, this would be a database.
// For this demo, we're using a mutable in-memory array.
// This data will reset every time the server restarts.
export let products: Product[] = [
  {
    id: '1',
    name: 'Classic Leather Watch',
    description: 'A timeless piece that blends classic design with modern mechanics. Perfect for any occasion.',
    price: 249.99,
    imageUrl: 'https://placehold.co/600x600.png',
    category: 'Watch',
    specs: {
      'Case Material': 'Stainless Steel',
      'Strap Material': 'Genuine Leather',
      'Movement': 'Automatic',
      'Water Resistance': '5 ATM',
    },
  },
  {
    id: '2',
    name: 'Wireless Noise-Cancelling Headphones',
    description: 'Immerse yourself in sound. These headphones offer superior noise-cancellation and audio quality.',
    price: 349.00,
    imageUrl: 'https://placehold.co/600x600.png',
    category: 'Headphones',
    specs: {
      'Connectivity': 'Bluetooth 5.0',
      'Battery Life': '30 Hours',
      'Special Feature': 'Active Noise Cancellation',
      'Color': 'Matte Black',
    },
  },
  {
    id: '3',
    name: 'Artisan Ceramic Mug',
    description: 'Handcrafted ceramic mug, perfect for your morning coffee or tea. Each piece is unique.',
    price: 25.50,
    imageUrl: 'https://placehold.co/600x600.png',
    category: 'Mug',
    specs: {
      'Material': 'Ceramic',
      'Capacity': '12 oz',
      'Care': 'Dishwasher & Microwave Safe',
      'Origin': 'Handmade',
    },
  },
  {
    id: '4',
    name: 'Minimalist Desk Lamp',
    description: 'A sleek and modern desk lamp that provides warm, adjustable light for your workspace.',
    price: 79.00,
    imageUrl: 'https://placehold.co/600x600.png',
    category: 'Lamp',
    specs: {
      'Material': 'Aluminum, ABS',
      'Light Source': 'LED',
      'Power': '7W',
      'Color Temperature': '3000K-6000K',
    },
  },
];

export async function getProducts(): Promise<Product[]> {
    // Simulate network latency
    await new Promise(resolve => setTimeout(resolve, 100));
    return products;
}

export async function getProductById(id: string): Promise<Product | undefined> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return products.find(p => p.id === id);
}
