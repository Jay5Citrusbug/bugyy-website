'use client';

import { Product } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
            {/* BUG #1: Image will appear blurry/stretched due to wrong aspect ratio in URLs */}
            <div className="relative h-64 bg-gray-100 overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            <div className="p-4">
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 text-xs font-semibold rounded-full mb-2">
                    {product.category}
                </span>

                <h3 className="text-lg font-bold text-gray-800 mb-2 truncate">
                    {product.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                </p>

                <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-purple-600">
                        ${product.price.toFixed(2)}
                    </span>

                    <button
                        onClick={handleAddToCart}
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 active:scale-95 font-medium"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
