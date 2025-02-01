import React from 'react'
import { Package, Box, Boxes, FileCheck } from 'lucide-react'
import SectionTitle from './SectionTitle';

const ServiceComp = () => {
  const services = [
    {
      icon: <Package size={40} />,
      title: "Pick/Pack",
      description: "Efficient and accurate order fulfillment with our advanced pick and pack services"
    },
    {
      icon: <Box size={40} />,
      title: "Packaging",
      description: "Professional packaging solutions ensuring safe delivery of your products"
    },
    {
      icon: <Boxes size={40} />,
      title: "Palletisation",
      description: "Optimize storage and transport with our expert palletization services"
    },
    {
      icon: <FileCheck size={40} />,
      title: "Supplier/Vendor Invoice Validation",
      description: "Thorough verification and validation of all supplier invoices"
    }
  ];

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <SectionTitle
          title="Our Featured Services"
          description="Comprehensive logistics solutions tailored to meet your business needs with efficiency and reliability"
          />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative p-6 bg-white rounded-lg shadow-lg 
                         hover:shadow-xl transition-all duration-300 
                         border-b-2 border-transparent hover:border-[#AD9052]
                         overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#AD9052]/5 
                            to-transparent opacity-0 group-hover:opacity-100 
                            transition-opacity duration-300"></div>
              
              {/* Icon */}
              <div className="relative mb-4 text-[#AD9052] transform 
                            group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="relative text-xl font-semibold mb-3 text-gray-800
                           group-hover:text-[#AD9052] transition-colors duration-300">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="relative text-gray-600 text-sm">
                {service.description}
              </p>
              
              {/* Hover Border Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#AD9052] 
                            transform translate-y-full group-hover:translate-y-0 
                            transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceComp