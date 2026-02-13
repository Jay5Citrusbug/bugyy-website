'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

export default function Navbar() {
    const { getCartCount } = useCart();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            {/* BUG #7a: High z-index that will overlap banner on mobile */}
            <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg fixed w-full z-[9999]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link href="/" className="text-2xl font-bold hover:text-purple-200 transition flex items-center gap-2">
                            <img src="/broken-logo.png" alt="Logo" className="w-8 h-8" />
                            BuggyShop
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-8">
                            <Link href="/" className="hover:text-purple-200 transition font-medium">
                                Hoem
                            </Link>
                            <Link href="/products" className="hover:text-purple-200 transition font-medium">
                                Products
                            </Link>
                            <Link href="/cart" className="hover:text-purple-200 transition font-medium">
                                Cart
                            </Link>
                            <Link href="/checkout" className="hover:text-purple-200 transition font-medium">
                                Checkout
                            </Link>
                        </div>

                        {/* Cart Icon */}
                        <Link href="/cart" className="relative hover:scale-110 transition-transform">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            {getCartCount() > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                                    {getCartCount()}
                                </span>
                            )}
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-purple-700">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link href="/" className="block px-3 py-2 rounded-md hover:bg-purple-600">
                                Hoem
                            </Link>
                            <Link href="/products" className="block px-3 py-2 rounded-md hover:bg-purple-600">
                                Products
                            </Link>
                            <Link href="/cart" className="block px-3 py-2 rounded-md hover:bg-purple-600">
                                Cart
                            </Link>
                            <Link href="/checkout" className="block px-3 py-2 rounded-md hover:bg-purple-600">
                                Checkout
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
            {/* Spacer to prevent content from hiding under fixed navbar */}
            <div className="h-16"></div>
        </>
    );
}
