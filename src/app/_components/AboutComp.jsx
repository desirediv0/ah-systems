import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const AboutComp = ({ 
  title = "About Us",
  subtitle = "Global Logistics Excellence",
  description = "We are dedicated to providing comprehensive logistics solutions that drive business success across global markets. With over decades of experience, our expertise spans international shipping, warehousing, supply chain optimization, and customs clearance services. We understand that each business has unique requirements, which is why we offer tailored solutions that adapt to your specific needs.\n\nOur state-of-the-art facilities and experienced team ensure seamless handling of your cargo, whether it's air freight, ocean freight, or ground transportation. We pride ourselves on maintaining the highest standards of efficiency, reliability, and security throughout the entire logistics process. Partner with us to experience logistics excellence that goes beyond conventional boundaries and helps your business thrive in today's competitive market.",
  image = "/about-image.webp",
  buttonText = "Learn More",
  buttonLink = "/about",
  flip = false 
}) => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col gap-8 items-center ${flip ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
          {/* Image Section */}
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Decorative Element */}
            <div 
              className={`absolute -z-10 top-4 ${flip ? 'left-4' : 'right-4'} 
                         w-full h-full border-2 border-[#AD9052] rounded-lg`}
            ></div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
                    <h1 className='text-3xl md:text-5xl font-bold mb-4 relative inline-block'>
                        {title}
                    </h1>
                <h3 className='text-2xl font-semibold text-[#AD9052] mb-4'>
                {subtitle}
                </h3>

            <p className="text-gray-600 mb-8">
              {description}
            </p>
            <Link 
              href={buttonLink}
              className="px-6 py-3 bg-[#AD9052] text-white rounded-md
                       hover:bg-[#8E7544] transition-colors duration-300
                       inline-flex items-center group"
            >
              {buttonText}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutComp