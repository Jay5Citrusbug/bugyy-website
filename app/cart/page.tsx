'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CartPage() {
    const { items, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();
    const router = useRouter();

    if (items.length === 0) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center">
                    <svg className="mx-auto h-24 w-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <h2 className="mt-4 text-3xl font-bold text-gray-800">Your cart is empty</h2>
                    <p className="mt-2 text-gray-600">Add some products to get started!</p>
                    <Link href="/products">
                        <button className="mt-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-105 font-medium">
                            Browse Products
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Shopping Cart</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        {items.map((item, index) => (
                            <div key={item.id} className={`p-6 ${index !== 0 ? 'border-t border-gray-200' : ''}`}>
                                <div className="flex gap-4">
                                    {/* Product Image */}
                                    <div className="relative w-24 h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                            sizes="96px"
                                        />
                                    </div>

                                    {/* Product Details */}
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                                        <p className="text-sm text-gray-600 mt-1">{item.category}</p>
                                        <p className="text-xl font-bold text-purple-600 mt-2">${item.price.toFixed(2)}</p>
                                    </div>

                                    {/* Quantity Controls */}
                                    <div className="flex flex-col items-end justify-between">
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-red-500 hover:text-red-700 transition"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>

                                        <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="px-3 py-1 hover:bg-gray-200 rounded transition"
                                            >
                                                -
                                            </button>
                                            <span className="px-4 font-medium">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="px-3 py-1 hover:bg-gray-200 rounded transition"
                                            >
                                                +
                                            </button>
                                        </div>

                                        <p className="text-lg font-bold text-gray-800 mt-2">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Summary</h2>

                        <div className="space-y-3 mb-4">
                            <div className="flex justify-between text-gray-600">
                                <span>Items ({getCartCount()})</span>
                                <span>
                                    ${items.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
                                </span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Shipping</span>
                                <span className="text-green-600">FREE</span>
                            </div>
                            <div className="border-t border-gray-200 pt-3">
                                <div className="flex justify-between text-xl font-bold text-gray-800">
                                    <span>Total</span>
                                    {/* BUG #5: This shows incorrect total (missing last item) */}
                                    <span className="text-purple-600">${getCartTotal().toFixed(2)}</span>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => router.push('/checkout')}
                            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-105 font-medium text-lg"
                        >
                            Proceed to Checkout
                        </button>

                        <Link href="/products">
                            <button className="w-full mt-3 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition font-medium">
                                Continue Shopping
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
