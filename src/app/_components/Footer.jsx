import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Ocean Freight", href: "/services/ocean-freight" },
      { name: "Air Freight", href: "/services/air-freight" },
      { name: "Ground Transport", href: "/services/ground" },
      { name: "Project Logistics", href: "/services/project" },
      { name: "Warehousing", href: "/services/warehousing" },
      { name: "Customs Brokerage", href: "/services/customs" },
      { name: "Crating & Packaging", href: "/services/packaging" },
      { name: "Value Added Services", href: "/services/value-added" }
    ],
    majorLinks: [
      { name: "Contact Us", href: "/contact" },
      { name: "Quick Quotes", href: "/quotes" },
      { name: "Career", href: "/career" },
      { name: "FAQ", href: "/faq" }
    ]
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Contact Section */}
          <div className="space-y-6">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={150}
              height={60}
              className="mb-6 hover:opacity-90 transition-opacity"
            />
            <div className="space-y-4">
              <p className="flex items-start gap-3 group">
                <MapPin size={20} className="text-[#AD9052] mt-1 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-[#AD9052] transition-colors">
                  Prashant Complex, 2nd Floor,<br />
                  D Block, Dwarka,<br />
                  Sector 8, New Delhi 110077, India
                </span>
              </p>
              <p className="flex items-center gap-3 group">
                <Phone size={20} className="text-[#AD9052] group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-[#AD9052] transition-colors">
                  +91 99580 33614
                </span>
              </p>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Mail size={20} className="text-[#AD9052]" />
                  <a href="mailto:info@ahsystemss.com" className="hover:text-[#AD9052] transition-colors">
                    info@ahsystemss.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 border-b border-[#AD9052]/20 pb-2">
              Our Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-[#AD9052] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#AD9052] rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 border-b border-[#AD9052]/20 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.majorLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-[#AD9052] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#AD9052] rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Branch Offices */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 border-b border-[#AD9052]/20 pb-2">
              Branch Offices
            </h3>
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-[#AD9052] mt-1 shrink-0" />
              <p className="text-gray-300 leading-relaxed">
                {[
                  "Noida", "Jaipur", "Ahmedabad", "Mundra",
                  "Mumbai", "Chennai", "Kanpur", "Chandigarh"
                ].map((city, index, array) => (
                  <span key={index}>
                    <span className="hover:text-[#AD9052] transition-colors cursor-pointer">
                      {city}
                    </span>
                    {index !== array.length - 1 && ", "}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center text-sm">
            © {currentYear} <span className="text-[#AD9052]">AH Systems</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;