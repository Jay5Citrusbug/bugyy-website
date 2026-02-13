export interface Product {
    id: string;
    name: string;
    price: number;
    category: 'Electronics' | 'Fashion' | 'Books';
    description: string;
    image: string;
}

export const products: Product[] = [
    {
        id: '1',
        name: 'Wireless Headphones',
        price: 79.99,
        category: 'Electronics',
        description: 'High-quality wireless headphones with noise cancellation',
        // BUG #1: Image with wrong aspect ratio - will appear stretched/blurry
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=500&fit=crop'
    },
    {
        id: '2',
        name: 'Smart Watch',
        price: 199.99,
        category: 'Electronics',
        description: 'Feature-rich smartwatch with health tracking',
        // BUG #1: Another stretched image
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=600&fit=crop'
    },
    {
        id: '3',
        name: 'Designer T-Shirt',
        price: 29.99,
        category: 'Fashion',
        description: 'Premium cotton t-shirt with modern design',
        // BUG #1: Stretched image
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=250&h=550&fit=crop'
    },
    {
        id: '4',
        name: 'Running Shoes',
        price: 89.99,
        category: 'Fashion',
        description: 'Comfortable running shoes for daily workouts',
        // BUG #1: Stretched image
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=280&h=520&fit=crop'
    },
    {
        id: '5',
        name: 'JavaScript Guide',
        price: 39.99,
        category: 'Books',
        description: 'Complete guide to modern JavaScript development',
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop'
    },
    {
        id: '6',
        name: 'Python Mastery',
        price: 44.99,
        category: 'Books',
        description: 'Master Python programming from basics to advanced',
        image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=400&fit=crop'
    },
    {
        id: '7',
        name: 'Bluetooth Speaker',
        price: 59.99,
        category: 'Electronics',
        description: 'Portable speaker with amazing sound quality',
        // BUG #1: Stretched image
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=550&fit=crop'
    },
    {
        id: '8',
        name: 'Leather Jacket',
        price: 149.99,
        category: 'Fashion',
        description: 'Premium leather jacket for all seasons',
        // BUG #1: Stretched image
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=270&h=580&fit=crop'
    }
];
