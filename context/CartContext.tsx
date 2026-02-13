'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '@/lib/products';

export interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    items: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    getCartCount: () => number;
    getCartTotal: () => number;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<CartItem[]>([]);
    const [lastAddedProduct, setLastAddedProduct] = useState<string | null>(null);

    // BUG #8: Add to cart button - clicking twice adds only once
    const addToCart = (product: Product) => {
        // Bug: If the same product is clicked twice in succession, it won't add
        if (lastAddedProduct === product.id) {
            return; // Prevents duplicate rapid clicks
        }

        setLastAddedProduct(product.id);

        setItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });

        // Reset after a delay
        setTimeout(() => setLastAddedProduct(null), 500);
    };

    const removeFromCart = (productId: string) => {
        setItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    // BUG #4: Cart count shows wrong number after adding 2 different products
    const getCartCount = () => {
        if (items.length === 2) {
            // Intentional bug: returns wrong count when exactly 2 different products
            return items.reduce((total, item) => total + item.quantity, 0) + 1;
        }
        return items.reduce((total, item) => total + item.quantity, 0);
    };

    // BUG #5: Price calculation bug - missing one item
    const getCartTotal = () => {
        if (items.length === 0) return 0;

        // Intentional bug: skip the last item in calculation
        let total = 0;
        for (let i = 0; i < items.length - 1; i++) {
            total += items[i].price * items[i].quantity;
        }
        return parseFloat(total.toFixed(2));
    };

    const clearCart = () => {
        setItems([]);
    };

    return (
        <CartContext.Provider
            value={{
                items,
                addToCart,
                removeFromCart,
                updateQuantity,
                getCartCount,
                getCartTotal,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within CartProvider');
    }
    return context;
};
