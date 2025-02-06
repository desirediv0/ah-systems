"use client";
import React from 'react';
import { FaCartPlus, FaMobile, FaMicrochip, FaShoppingBag, FaTshirt, FaBook } from 'react-icons/fa';
import Marquee from 'react-fast-marquee';
import Link from 'next/link';

const Industries = () => {
    const industries = [
        {
            icon: <FaCartPlus className="w-12 h-12 text-[#AD9052]" />,
            title: "E-Commerce",
            description: "Comprehensive logistics solutions for online businesses, ensuring fast and reliable delivery worldwide."
        },
        {
            icon: <FaMobile className="w-12 h-12 text-[#AD9052]" />,
            title: "Telecom",
            description: "Specialized handling and transportation for sensitive telecommunications equipment."
        },
        {
            icon: <FaMicrochip className="w-12 h-12 text-[#AD9052]" />,
            title: "Electronics",
            description: "Secure and efficient logistics for electronic products and components."
        },
        {
            icon: <FaShoppingBag className="w-12 h-12 text-[#AD9052]" />,
            title: "FMCG",
            description: "Fast and efficient distribution networks for consumer goods and perishable products."
        },
        {
            icon: <FaTshirt className="w-12 h-12 text-[#AD9052]" />,
            title: "Fabric",
            description: "Specialized handling for textiles and fabric materials with careful attention to quality."
        },
        {
            icon: <FaBook className="w-12 h-12 text-[#AD9052]" />,
            title: "Publication",
            description: "Reliable distribution services for books, magazines, and printed materials."
        }
    ];

    return (
        <div id='industries' className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            <div className="absolute inset-0 bg-grid-gray-100/50 bg-[size:20px_20px] pointer-events-none" />

            <div className="relative py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Section */}
                    <div className="text-center mb-20">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                            Industries We Serve
                        </h1>
                        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                            We provide specialized logistics solutions across various industries,
                            ensuring each sector's unique requirements are met with precision and excellence.
                        </p>
                    </div>

                    {/* Marquee Section */}
                    <div className="mt-12 overflow-hidden">
                        <Marquee
                            gradient={true}
                            gradientColor={[249, 250, 251]}
                            gradientWidth={100}
                            speed={40}
                            pauseOnHover={true}
                        >
                            <div className="flex gap-8">
                                {industries.map((industry, index) => (
                                    <div key={index}
                                        className="min-w-[300px] p-8 bg-white rounded-xl shadow-lg 
                                                 border border-gray-100 mx-4 hover:border-[#AD9052]/20 
                                                 hover:shadow-xl transition-all duration-300">
                                        <div className="mb-6 transform hover:scale-110 transition-transform duration-300">
                                            {industry.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                            {industry.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {industry.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </Marquee>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-20 text-center">
                        <p className="text-lg text-gray-600 mb-8">
                            Don't see your industry? Contact us to learn how we can help your business.
                        </p>
                        <Link
                            href={"/contact"}
                            className="px-8 py-3 bg-[#AD9052] text-white rounded-md
                                         hover:bg-[#8E7544] transition-colors duration-300
                                         shadow-lg hover:shadow-xl">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Industries;