"use client";
import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChevronRight, Menu } from 'lucide-react';
import Loading from './loading';

const ServiceContent = () => {
    const [activeSection, setActiveSection] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();

    const services = [
        {
            id: 'ocean-freight',
            title: 'Ocean Freight',
            image: '/card/ocean-freight.jpg',
            description: 'At Ah Systems, we take pride in offering dependable ocean freight services that connect businesses to the world. Our efficient routings and flexible fixed-day sailings ensure your cargo is transported quickly and reliably to its destination, no matter where in the world. With years of experience, we ensure that your shipment is handled professionally every step of the way, making global trade more accessible and efficient.',
            features: [
                'FCL (Full Container Load) Cargo: We provide secure and reliable FCL services using dedicated containers to protect your cargo throughout its journey. Full control over your shipment ensures minimal risk and optimal protection.',
                'LCL (Less than Container Load) Cargo: Our cost-effective LCL services allow you to ship smaller loads efficiently by consolidating them with other shipments. This service is ideal for smaller businesses looking to save costs while still maintaining reliability.',
                'Reefer & Perishable Cargo: Sensitive goods like perishable and temperature-controlled cargo are handled with care in our specialized containers. Ensuring your perishable items reach their destination fresh and undamaged is our priority.',
            ],
        },
        {
            id: 'air-freight',
            title: 'Air Freight',
            image: '/card/air-freight.jpg',
            description: 'At Ah Systems, we recognize the vital role air freight plays in modern supply chains. With businesses expanding globally, the need for fast and reliable shipping has never been higher. Air freight offers a fast and secure method for transporting goods internationally, reducing transit time and ensuring your shipments meet tight deadlines.',
            features: [
                'Express Shipping Solutions: Fast-track your shipments with optimized routes and strategic planning to ensure the quickest delivery while maintaining security and cost-efficiency.',
                'Dedicated Cargo Charters: Need an exclusive flight for urgent shipments? We offer flexible scheduling and custom routes for any cargo type, ensuring that critical deliveries arrive on time.',
                'Sea-Air Freight: Combine the cost savings of ocean freight with the speed of air transport. Our hybrid solutions offer the perfect balance between affordability and efficiency, ensuring you get the best of both worlds.',
            ],
        },
        {
            id: 'ground-transport',
            title: 'Ground Transport',
            image: '/card/ground-transportation.jpg',
            description: 'Ground transportation is essential for the efficient movement of goods, both domestically and across borders. As global trade continues to grow and evolve, selecting the right road freight partner becomes crucial. We offer reliable and customizable ground transportation services to ensure timely and seamless deliveries across India and the USA.',
            features: [
                'In-house support to streamline customs procedures and ensure compliance, making your cross-border shipments smoother and more efficient.',
                'Around-the-clock support for your transportation needs. Whether its day or night, we are here to assist and ensure your cargo moves without delay.',
                'Flexible scheduling tailored to your specific needs, allowing for customized delivery timeframes that meet the unique requirements of your business.',
            ],
        },
        {
            id: 'project-logistics',
            title: 'Project Logistics',
            image: '/card/project-logistics.jpg',
            description: 'At Ah Systems, we understand the critical role that Project Logistics plays in the success of any large-scale project. Our services are designed to handle the complexities of transporting oversized, overweight, and specialized cargo. Whether you’re managing a construction project, modular assembly, or other complex logistics needs, we provide customized solutions tailored to your specific requirements. Our goal is to ensure that your project runs smoothly, meets deadlines, and stays within budget.',
            features: [
                'Customized solutions tailored to your specific requirements, ensuring that your project’s logistics challenges are met with precision and efficiency.',
                'Ensure that your project runs smoothly, from transport coordination to delivery, ensuring the safe arrival of your goods to project sites.',
                'Meets deadlines and stays within budget, helping you manage your project logistics in a way that maximizes cost-efficiency and minimizes risks.',
            ],
        },
        {
            id: 'warehousing',
            title: 'Warehousing',
            image: '/card/warehousing.jpg',
            description: 'At Ah Systems, we recognize the essential role that efficient warehousing plays in optimizing your supply chain. Our comprehensive warehousing services are tailored to meet your specific storage and logistics needs, ensuring the secure and seamless handling of your goods. Whether short-term or long-term, our facilities are equipped to meet the dynamic demands of modern businesses.',
            features: [
                'Advanced warehousing facilities in key global trade hubs ensure your goods are stored in secure, state-of-the-art locations for efficient handling and management.',
                'Real-time inventory visibility and management, providing you with accurate and up-to-date information on your stock for better decision-making and planning.',
                'Flexible storage solutions for short and long-term needs, allowing your business to scale its storage capacity depending on market demands.',
            ],
        },
        {
            id: 'customs-brokerage',
            title: 'Customs Brokerage',
            image: '/card/customs-brokerage.jpg',
            description: 'At Ah Systems, our Customs Brokerage Division is dedicated to providing seamless and efficient customs clearance services for businesses engaged in international trade. We ensure compliance with all necessary regulations and manage the clearance process to eliminate the complexities of direct interactions with customs authorities, allowing you to focus on your core business.',
            features: [
                'Simplifying customs clearance complexities, ensuring that your shipments comply with the latest regulations and avoiding costly delays.',
                'Expert compliance with regulatory requirements, minimizing the risks of fines or shipment rejections during customs inspections.',
                'Comprehensive international trade solutions, offering tailored services that help streamline your global supply chain and optimize your business operations.',
            ],
        },
        {
            id: 'crating-packaging',
            title: 'Crating & Packaging',
            image: '/card/creating-packaging.jpg',
            description: 'Protecting your cargo during transit is essential, and our professional crating and packaging services ensure maximum safety for international shipping, freight forwarding, and logistics solutions. Whether you are shipping fragile items, heavy machinery, or high-value goods, our custom packaging and crating solutions provide superior protection for your cargo at every stage of the shipping process.',
            features: [
                'Export packaging and ISPM-15 certified crates, ensuring compliance with international shipping regulations while providing maximum protection during transit.',
                'Heavy-duty wooden crates and custom pallets designed to withstand the rigors of long-distance transport and safeguard your cargo against damage.',
                'Vacuum-sealed packaging for maximum protection, ensuring that even sensitive items are shielded from moisture, dust, and other potential environmental factors during shipping.',
            ],
        },
        {
            id: 'value-added-services',
            title: 'Value Added Services',
            image: '/card/value-added-services.jpg',
            description: 'We offer a range of value-added services to enhance your supply chain and meet specific operational needs. These services are designed to help businesses streamline their logistics operations, improve efficiency, and reduce costs by offering extra support and expertise.',
            features: [
                'Assembly & Kitting Services: We handle the assembly and packaging of products as needed, saving you time and resources while ensuring quality control.',
                'Quality Control & Product Testing: We perform rigorous quality checks to ensure that your goods meet all specifications before being shipped.',
                'Returns Processing & White Glove Delivery: Our comprehensive returns processing and premium white glove delivery services ensure that your customers receive the best experience possible.',
            ],
        },
    ];


    useEffect(() => {
        // Handle direct navigation from header
        const hash = window.location.hash.replace('#', '');
        if (hash && services.some(service => service.id === hash)) {
            setActiveSection(hash);
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (!activeSection && services.length > 0) {
            setActiveSection(services[0].id);
        }
    }, [searchParams]);

    const handleSectionClick = (id) => {
        setActiveSection(id);
        setIsMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        router.push(`#${id}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-20">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                        Our Services
                    </h1>
                    <div className="mt-4 flex justify-center">
                        <div className="w-24 h-1.5 bg-[#AD9052] rounded-full" />
                    </div>
                    <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                        Comprehensive logistics solutions tailored to your business needs
                    </p>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden mb-6">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 bg-white rounded-lg shadow-md"
                    >
                        <span className="text-gray-700">Select Service</span>
                        <Menu className={`w-5 h-5 transition-transform ${isMobileMenuOpen ? 'transform rotate-180' : ''}`} />
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Navigation */}
                    <div className={`lg:w-1/4 ${isMobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
                        <div className="lg:sticky lg:top-24 bg-white rounded-xl shadow-lg p-6">
                            <nav className="space-y-2">
                                {services.map((service) => (
                                    <button
                                        key={service.id}
                                        onClick={() => handleSectionClick(service.id)}
                                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all
                                            ${activeSection === service.id
                                                ? 'bg-[#AD9052] text-white'
                                                : 'hover:bg-gray-100 text-gray-700'}`}
                                    >
                                        <span>{service.title}</span>
                                        <ChevronRight className={`w-4 h-4 ${activeSection === service.id ? 'text-white' : 'text-gray-400'}`} />
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-3/4">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                id={service.id}
                                className={`scroll-mt-24 transition-opacity duration-300 
                                    ${activeSection === service.id ? 'opacity-100' : 'hidden'}`}
                            >
                                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                    <div className="relative h-[300px] md:h-[400px]">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-black/20" />
                                        <h2 className="absolute bottom-6 left-8 text-3xl md:text-4xl font-bold text-white">
                                            {service.title}
                                        </h2>
                                    </div>
                                    <div className="p-6 md:p-8 space-y-8">
                                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                            {service.description}
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            {service.features.map((feature, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
                                                >
                                                    <span className="w-2 h-2 mt-2 bg-[#AD9052] rounded-full flex-shrink-0" />
                                                    <span className="text-gray-700">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


const Service = () => {
    return (
        <Suspense fallback={<Loading />}>
            <ServiceContent />
        </Suspense>
    );
};

export default Service;