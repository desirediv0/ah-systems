"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SectionTitle from './SectionTitle'
import { Ship, Plane, Truck, Package, Building2, FileCheck, ArrowRight } from 'lucide-react'

const OurServices = () => {
  const services = [
    {
      title: "Ocean Freight",
      icon: <Ship size={40} />,
      image: "/card/ocean-freight.jpg",
      description: "At  Air & Harbour Group, we provide comprehensive ocean freight solutions for your international shipping needs.",
      link: "/services#ocean-freight"
    },
    {
      title: "Air Freight",
      icon: <Plane size={40} />,
      image: "/card/air-freight.jpg",
      description: "Efficient air freight services ensuring fast and reliable delivery worldwide with real-time tracking.",
      link: "/services#air-freight"
    },
    {
      title: "Ground Transportation",
      icon: <Truck size={40} />,
      image: "/card/ground-transportation.jpg",
      description: "Complete ground transportation solutions with nationwide coverage and dedicated fleet services.",
      link: "/services#ground-transport"
    },
    {
      title: "Project Logistics",
      icon: <Package size={40} />,
      image: "/card/project-logistics.jpg",
      description: "Specialized project cargo handling and logistics management for complex transportation requirements.",
      link: "/services#project-logistics"
    },
    {
      title: "Warehousing",
      icon: <Building2 size={40} />,
      image: "/card/warehousing.jpg",
      description: "State-of-the-art warehousing facilities with advanced inventory management and distribution services.",
      link: "/services#warehousing"
    },
    {
      title: "Customs Brokerage",
      icon: <FileCheck size={40} />,
      image: "/card/customs-brokerage.jpg",
      description: "Professional customs clearance services ensuring smooth and compliant international trade operations.",
      link: "/services#customs-brokerage"
    }
  ];

  const handleClick = (e) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Our Services"
          description="Comprehensive logistics solutions tailored for your business needs"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              {/* Image */}
              <div className="aspect-[4/3] relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                {/* Permanent Dark Overlay for Title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              {/* Always Visible Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 text-white">
                  <span className="text-[#AD9052]">{service.icon}</span>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
              </div>

              {/* Hover Content */}
              <div className="absolute inset-0 bg-black/80 flex flex-col justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-[#AD9052] mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-white/90 text-sm mb-6">{service.description}</p>
                <Link
                  href={service.link}
                  onClick={handleClick}
                  className="inline-flex items-center text-[#AD9052] hover:text-white transition-colors duration-300 text-sm font-semibold group/btn"
                >
                  Read More
                  <ArrowRight size={16} className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex items-center justify-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 
                     bg-[#AD9052] text-white rounded-lg
                     hover:bg-[#8E7544] transition-all duration-300
                     group relative overflow-hidden shadow-lg
                     mt-8 mx-auto "
          >
            <span className="relative z-10">View All Services</span>
            <ArrowRight
              size={20}
              className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/20 
                          transform translate-y-full group-hover:translate-y-0 
                          transition-transform duration-300">
            </div>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default OurServices