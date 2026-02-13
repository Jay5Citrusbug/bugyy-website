'use client';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">BuggyShop</h3>
                        <p className="text-gray-400">Your one-stop shop for Electronics, Fashion, and Books.</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
                            <li><a href="/products" className="text-gray-400 hover:text-white transition">Products</a></li>
                            <li><a href="/cart" className="text-gray-400 hover:text-white transition">Cart</a></li>
                            <li><a href="/checkout" className="text-gray-400 hover:text-white transition">Checkout</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact</h3>
                        <p className="text-gray-400">Email: support@buggyshop.com</p>
                        <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
                    </div>
                </div>

                {/* BUG #7b: Footer text breaks into 1 character per line on mobile */}
                {/* Using word-break-all will cause text to break character by character */}
                <div className="mt-8 pt-8 border-t border-gray-800 text-center mobile-footer-bug">
                    <p className="text-gray-400 break-all sm:break-normal">
                        © 2026 BuggyShop. All rights reserved. This is a QA practice website with intentional bugs.
                    </p>
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 640px) {
          .mobile-footer-bug p {
            word-break: break-all;
            max-width: 100px;
            margin: 0 auto;
          }
        }
      `}</style>
        </footer>
    );
}
