'use client';

import { useState } from 'react';
import Carousel from '@/components/Carousel';
import ProductCard from '@/components/ProductCard';
import { products, Product } from '@/lib/products';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Electronics', 'Fashion', 'Books'];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Carousel */}
      <section className="mb-12">
        <Carousel />
      </section>

      {/* Category Filter */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Shop by Category</h2>
        <div className="flex flex-wrap gap-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 ${selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          {selectedCategory === 'All' ? 'All Products' : selectedCategory}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found in this category.</p>
        </div>
      )}
    </div>
  );
}
