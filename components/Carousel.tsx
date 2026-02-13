'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const carouselImages = [
    {
        url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=400&fit=crop',
        title: 'Find Hidden Bugs',
        subtitle: 'Discover critical and UI bugs across the application just like real-world projects.'
    },
    {
        url: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=1200&h=400&fit=crop',
        title: 'Test Responsive Design',
        subtitle: 'Check how the website behaves on mobile, tablet, and desktop devices.'
    },
    {
        url: 'https://images.unsplash.com/photo-1454165833767-027508992bdb?w=1200&h=400&fit=crop',
        title: 'Think Like a Product owner',
        subtitle: 'Improve logical thinking by exploring real-life broken features and edge cases.'
    }
];

export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoScrollStopped, setAutoScrollStopped] = useState(false);

    useEffect(() => {
        // BUG #10: Auto-scroll stops after 1 slide
        if (autoScrollStopped) return;

        const interval = setInterval(() => {
            setCurrentSlide(prev => {
                const next = (prev + 1) % carouselImages.length;
                // Bug: After moving from slide 0 to slide 1, stop auto-scrolling
                if (prev === 0 && next === 1) {
                    setAutoScrollStopped(true);
                }
                return next;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [autoScrollStopped]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    };

    return (
        <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-2xl">
            {/* Slides */}
            {carouselImages.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <Image
                        src={image.url}
                        alt={image.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
                        <h2 className="text-4xl md:text-6xl font-bold mb-4">{image.title}</h2>
                        <p className="text-xl md:text-2xl">{image.subtitle}</p>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition"
                aria-label="Previous slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition"
                aria-label="Next slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carouselImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition ${index === currentSlide
                            ? 'bg-white scale-125'
                            : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
