import type { Product } from './types';

const products: Product[] = [
    {
        id: '1',
        name: 'Dixon Shelf',
        description: 'A sleek, durable shelf combining raw metal with finished wood for a stunning industrial look. Perfect for books, decor, and more.',
        price: 189.99,
        imageUrl: '/slideshow/slide1.jpg',
        category: 'Shelving',
        specs: {
            Material: 'Pine Wood & Steel',
            Dimensions: '36" W x 12" D x 72" H',
            Finish: 'Matte Black Steel, Stained Pine',
            'Load Capacity': '50 lbs per shelf'
        }
    },
    {
        id: '2',
        name: 'Minimalist Floating Shelf',
        description: 'Create a clean, contemporary look with these easy-to-install floating shelves. The hidden bracket system makes them appear to float on your wall.',
        price: 79.99,
        imageUrl: '/slideshow/slide4.jpg',
        category: 'Shelving',
        specs: {
            Material: 'MDF with Veneer',
            Dimensions: '24" W x 8" D x 2" H',
            Finish: 'Oak Veneer',
            'Load Capacity': '15 lbs'
        }
    },
    {
        id: '3',
        name: 'Classic Plantation Shutters',
        description: 'Timeless elegance meets modern functionality. These shutters offer excellent light control and privacy for any room.',
        price: 349.99,
        imageUrl: '/slideshow/slide3.jpg',
        category: 'Shutters',
        specs: {
            Material: 'Basswood',
            'Louver Size': '3.5 inches',
            Finish: 'Bright White Paint',
            'Custom Sizes': 'Available'
        }
    },
    {
        id: '4',
        name: 'Heavy-Duty Security Shutter',
        description: 'Protect your property with our robust, roll-down security shutters. Made from high-grade aluminum for maximum strength.',
        price: 899.99,
        imageUrl: '/slideshow/slide2.jpg',
        category: 'Shutters',
        specs: {
            Material: 'Extruded Aluminum',
            Operation: 'Motorized with Remote',
            Finish: 'Powder-coated Gray',
            Rating: 'Security Grade 3'
        }
    },
    {
        id: '5',
        name: 'Custom Corner Shelving System',
        description: 'Maximize your space with a shelving system designed to fit perfectly into any corner. Fully customizable to your specifications.',
        price: 499.99,
        imageUrl: '/slideshow/slide5.jpg',
        category: 'Shelving',
        specs: {
            Material: 'Plywood',
            Dimensions: 'Custom',
            Finish: 'Client\'s Choice',
            'Lead Time': '4-6 Weeks'
        }
    },
    {
        id: '6',
        name: 'Rustic Reclaimed Wood Shelf',
        description: 'Each shelf is unique, crafted from reclaimed barn wood, bringing a piece of history and character to your home.',
        price: 129.99,
        imageUrl: '/slideshow/photo_4_2025-08-05_10-46-32.jpg',
        category: 'Shelving',
        specs: {
            Material: 'Reclaimed Oak',
            Dimensions: '30" W x 10" D x 1.5" H',
            Finish: 'Natural, Clear Coat',
            'Mounting': 'Iron Brackets Included'
        }
    },
    {
        id: '7',
        name: 'Accordion Security Grille',
        description: 'A stylish and retractable security solution for storefronts and patios. Folds away neatly when not in use.',
        price: 1250.00,
        imageUrl: '/slideshow/photo_5_2025-08-05_10-46-32.jpg',
        category: 'Shutters',
        specs: {
            Material: 'Galvanized Steel',
            Operation: 'Manual Pull/Push',
            Finish: 'White Powder Coat',
            Locking: 'Dual-point Key Lock'
        }
    },
    {
        id: '8',
        name: 'Modern Glass Display Shelf',
        description: 'Showcase your collectibles or fine china on these elegant tempered glass shelves with polished chrome hardware.',
        price: 220.50,
        imageUrl: '/slideshow/photo_6_2025-08-05_10-46-32.jpg',
        category: 'Shelving',
        specs: {
            Material: 'Tempered Glass & Chrome',
            Dimensions: '32" W x 9" D x 48" H',
            'Glass Thickness': '8mm',
            'Weight Limit': '20 lbs per shelf'
        }
    },
    {
        id: '9',
        name: 'Heavy Duty Shelf',
        description: 'A statement piece built from industrial-grade pipes and solid wood planks. Perfect for an urban or steampunk aesthetic.',
        price: 650.00,
        imageUrl: '/slideshow/photo_7_2025-08-05_10-46-32.jpg',
        category: 'Shelving',
        specs: {
            Material: 'Solid Fir & Iron Pipe',
            Dimensions: '48" W x 14" D x 80" H',
            Finish: 'Dark Walnut Stain',
            'Assembly': 'Required'
        }
    }
];

// The functions now interact with an in-memory array.

export async function getProducts(): Promise<Product[]> {
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 100));
    return products;
}

export async function getProductById(id: string): Promise<Product | undefined> {
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 100));
    return products.find(p => p.id === id);
}
