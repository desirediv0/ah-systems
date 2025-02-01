import React from 'react'
import { UserCheck, Share2, Database, Calculator, Layout, Wifi } from 'lucide-react'
import SectionTitle from './SectionTitle'

const WhyGlobal = () => {
  const features = [
    {
      icon: <UserCheck size={40} />,
      number: "01",
      title: "Personalized Service",
      description: "Tailored logistics solutions to meet your specific business needs"
    },
    {
      icon: <Share2 size={40} />,
      number: "02",
      title: "Shared Facility",
      description: "Cost-effective shared warehousing and distribution facilities"
    },
    {
      icon: <Calculator size={40} />,
      number: "03",
      title: "Flexible Billing",
      description: "Transparent fixed and variable billing options"
    },
    {
      icon: <Database size={40} />,
      number: "04",
      title: "In-House WMS",
      description: "Advanced warehouse management system for optimal efficiency"
    },
    {
      icon: <Layout size={40} />,
      number: "05",
      title: "Single Window Solution",
      description: "Comprehensive visibility and control through one platform"
    },
    {
      icon: <Wifi size={40} />,
      number: "06",
      title: "Online Information Sharing",
      description: "Real-time updates and information access"
    }
  ];

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Why Ahsystems"
          description="Discover the advantages that set us apart"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-6 bg-white rounded-lg
                         hover:shadow-xl transition-all duration-300 
                         border border-gray-100 hover:border-[#AD9052]"
            >
              {/* Number Background */}
              <div className="absolute top-4 right-4 text-4xl font-bold text-gray-200 
                            group-hover:text-[#AD9052]/10 transition-colors duration-300">
                {feature.number}
              </div>
              
              {/* Icon */}
              <div className="relative text-[#AD9052] mb-4 
                            transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 
                             group-hover:text-[#AD9052] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect Corner */}
              <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 
                            border-[#AD9052] opacity-0 group-hover:opacity-100 
                            group-hover:w-[20px] group-hover:h-[20px] 
                            transition-all duration-300"></div>
              <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 
                            border-[#AD9052] opacity-0 group-hover:opacity-100 
                            group-hover:w-[20px] group-hover:h-[20px] 
                            transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyGlobal