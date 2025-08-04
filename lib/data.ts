import type { Product } from './types';

// In a real application, this would be a database.
// For this demo, we're using a mutable in-memory array.
// This data will reset every time the server restarts.
export let products: Product[] = [
  {
    id: '1',
    name: 'Industrial Wall Shelf',
    description: 'A sturdy and stylish wall shelf, combining rustic wood with a strong metal frame. Perfect for books, plants, or decor in any room.',
    price: 129.99,
    imageUrl: '/items/photo_2025-08-04_12-09-29.jpg',
    category: 'Shelving',
    specs: {
      'Material': 'Reclaimed Wood, Steel',
      'Dimensions': '36" W x 10" D x 12" H',
      'Finish': 'Matte Black Metal, Natural Wood',
      'Installation': 'Wall-mounted',
    },
  },
  {
    id: '2',
    name: 'Modern Floating Shelves',
    description: 'Create a clean, contemporary look with these minimalist floating shelves. Their hidden bracket system makes them appear to float on the wall.',
    price: 89.00,
    imageUrl: '/items/photo_2025-08-04_12-09-40.jpg',
    category: 'Shelving',
    specs: {
      'Material': 'MDF with Veneer',
      'Dimensions': '24" W x 8" D x 2" H',
      'Capacity': '15 lbs per shelf',
      'Color': 'White Oak',
    },
  },
  {
    id: '3',
    name: 'Classic Plantation Shutters',
    description: 'Add timeless elegance and control light with these high-quality plantation shutters. Custom-fit for your windows.',
    price: 350.00,
    imageUrl: '/items/photo_2025-08-04_12-09-52.jpg',
    category: 'Shutters',
    specs: {
      'Material': 'Solid Basswood',
      'Louver Size': '3.5 inches',
      'Finish': 'Satin White',
      'Feature': 'UV Resistant',
    },
  },
  {
    id: '4',
    name: 'Rolling Security Shutters',
    description: 'Protect your storefront or home with these heavy-duty rolling security shutters. Provides excellent security and weather protection.',
    price: 550.00,
    imageUrl: '/items/photo_2025-08-04_12-10-01.jpg',
    category: 'Shutters',
    specs: {
      'Material': 'Extruded Aluminum',
      'Operation': 'Motorized with Remote',
      'Security': 'High-impact resistant',
      'Finish': 'Powder-coated Gray',
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
