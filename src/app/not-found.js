"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-4">
            <div className="max-w-2xl mx-auto text-center">
                {/* 404 Image */}
                <div className="relative w-full h-48 md:h-64 mb-4">
                    <Image
                        src="/404.svg"
                        alt="404 Illustration"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Content */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    Page Not Found
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                {/* Back to Home Button */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#AD9052] text-white 
                     rounded-lg hover:bg-[#8E7544] transition-colors duration-300 
                     shadow-lg hover:shadow-xl"
                >
                    <ArrowLeft size={20} />
                    Back to Home
                </Link>
            </div>
        </div>
    );
}