import React from 'react'
import Image from 'next/image'

const CompanyPage = () => {
    return (
        <div id='company' className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 bg-grid-gray-100/50 bg-[size:20px_20px] pointer-events-none" />

            <section className="relative py-16 px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    {/* Page Title */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                            About Us
                        </h1>

                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Image Section */}
                        <div className="w-full lg:w-1/2">
                            <div className="relative group">
                                {/* Main Image */}
                                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/about-image.webp"
                                        alt="About AH Systems"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        priority
                                    />

                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -z-10 top-6 -right-6 w-full h-full border-2 border-[#AD9052] rounded-2xl 
                              group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />
                                <div className="absolute -z-20 top-12 -right-12 w-full h-full bg-[#AD9052]/10 rounded-2xl 
                              group-hover:translate-x-12 group-hover:translate-y-12 transition-transform duration-700" />
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="w-full lg:w-1/2 space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-2xl md:text-3xl font-semibold text-[#AD9052]">
                                    Your Global Logistics Partner
                                </h2>
                                <div className="h-1 w-20 bg-[#AD9052]/30 rounded-full" />
                            </div>

                            <div className="space-y-6 text-gray-600">
                                <p className="text-lg leading-relaxed">
                                    At Ah systems, we are a global shipping company committed to delivering complete logistics solutions
                                    tailored to our clients' unique needs. Our journey began as an express logistics provider, offering
                                    fast and dependable shipping services worldwide. Over time, we have grown and evolved into a
                                    full-service supply chain logistics company, expanding our services to cover a wide range of
                                    shipping and transportation needs.
                                </p>

                                <div className="relative pl-6 border-l-2 border-[#AD9052]/20">
                                    <p className="text-lg leading-relaxed">
                                        Our expertise spans airfreight and ocean freight forwarding, e-commerce shipments, express courier
                                        services, customs clearance, general cargo, refrigerated cargo transport. With advanced technology
                                        and state-of-the-art tracking systems, we ensure complete visibility and control over shipments
                                        at every step of the process.
                                    </p>
                                </div>

                                <p className="text-lg leading-relaxed">
                                    Our dedicated team of logistics professionals is focused on providing reliable, cost-effective,
                                    and efficient solutions to help businesses thrive. At Ah systems, we take pride in simplifying
                                    global trade, ensuring timely deliveries, and offering exceptional customer service to build
                                    lasting partnerships with our valued client.
                                </p>
                            </div>

                            {/* Stats Section */}
                            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 mt-8 border-t border-gray-200">
                                <div className="text-center">
                                    <h3 className="text-3xl font-bold text-[#AD9052]">15+</h3>
                                    <p className="text-gray-600 mt-1">Years Experience</p>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-3xl font-bold text-[#AD9052]">1000+</h3>
                                    <p className="text-gray-600 mt-1">Happy Clients</p>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-3xl font-bold text-[#AD9052]">24/7</h3>
                                    <p className="text-gray-600 mt-1">Support</p>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-3xl font-bold text-[#AD9052]">8+</h3>
                                    <p className="text-gray-600 mt-1">Branch Offices</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CompanyPage