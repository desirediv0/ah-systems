import React from 'react'
import SectionTitle from './SectionTitle'
import Marquee from 'react-fast-marquee'
import { 
  Ship, 
  Plane, 
  Truck, 
  Package, 
  Building2, 
  FileCheck, 
  Container, 
  Warehouse,
  Globe,
  Forklift
} from 'lucide-react'

const ShippingPartners = () => {
  const partners = [
    { 
      name: "Ocean Freight", 
      icon: <Ship size={40} className="text-[#AD9052]" /> 
    },
    { 
      name: "Air Cargo", 
      icon: <Plane size={40} className="text-[#AD9052]" /> 
    },
    { 
      name: "Ground Transport", 
      icon: <Truck size={40} className="text-[#AD9052]" /> 
    },
    { 
      name: "Container Services", 
      icon: <Container size={40} className="text-[#AD9052]" /> 
    },
    { 
      name: "Warehousing", 
      icon: <Warehouse size={40} className="text-[#AD9052]" /> 
    },
    { 
      name: "Global Shipping", 
      icon: <Globe size={40} className="text-[#AD9052]" /> 
    },
    { 
      name: "Package Services", 
      icon: <Package size={40} className="text-[#AD9052]" /> 
    },
    { 
      name: "Storage Solutions", 
      icon: <Building2 size={40} className="text-[#AD9052]" /> 
    },
    { 
      name: "Customs Clearance", 
      icon: <FileCheck size={40} className="text-[#AD9052]" /> 
    },
    { 
      name: "Logistics", 
      icon: <Forklift size={40} className="text-[#AD9052]" /> 
    }
  ];


  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Our Shipping Partners"
          description="Working with global leaders to deliver excellence"
        />

        <div className="mt-12 scrollbar">
          <Marquee
            gradient={true}
            gradientColor={[249, 250, 251]}
            gradientWidth={100}
            speed={40}
            pauseOnHover={true}
            className="py-4 scrollbar"
          >
            <div className="flex items-center">
              {partners.map((partner, index) => (
                <div 
                  key={`first-${index}`}
                  className="group flex flex-col items-center justify-center gap-3 
                           transition-all duration-300 transform hover:scale-110
                           bg-white p-6 rounded-lg shadow-md hover:shadow-xl
                           mx-8"
                >
                  <div className="transform group-hover:rotate-12 transition-transform duration-300">
                    {partner.icon}
                  </div>
                  <p className="text-sm font-medium text-gray-600 group-hover:text-[#AD9052]
                              transition-colors duration-300">
                    {partner.name}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center">
              {partners.map((partner, index) => (
                <div 
                  key={`second-${index}`}
                  className="group flex flex-col items-center justify-center gap-3 
                           transition-all duration-300 transform hover:scale-110
                           bg-white p-6 rounded-lg shadow-md hover:shadow-xl
                           mx-8"
                >
                  <div className="transform group-hover:rotate-12 transition-transform duration-300">
                    {partner.icon}
                  </div>
                  <p className="text-sm font-medium text-gray-600 group-hover:text-[#AD9052]
                              transition-colors duration-300">
                    {partner.name}
                  </p>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  )
}

export default ShippingPartners