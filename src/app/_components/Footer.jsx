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
      { name: "Ground Transportation", href: "/services/ground" },
      { name: "Project Logistics", href: "/services/project" },
      { name: "Warehousing", href: "/services/warehousing" },
      { name: "Customs Brokerage", href: "/services/customs" },
      { name: "Crating & Packaging", href: "/services/packaging" },
      { name: "Value-added Services", href: "/services/value-added" }
    ],
    majorLinks: [
      { name: "Contact Us", href: "/contact" },
      { name: "Rate", href: "/rate" },
      { name: "Blog", href: "/blog" },
      { name: "Shipping Tools", href: "/tools" },
      { name: "Quick Quotes", href: "/quotes" },
      { name: "Career", href: "/career" },
      { name: "FAQ", href: "/faq" }
    ],
    importantLinks: [
      { name: "Banned Items List", href: "/banned-items" },
      { name: "Privacy & Policy", href: "/privacy" },
      { name: "International/Domestic Shipping Guide", href: "/shipping-guide" },
      { name: "Refund Policy", href: "/refund" },
      { name: "Terms and Conditions", href: "/terms" },
      { name: "Network", href: "/network" },
      { name: "Sitemap", href: "/sitemap" }
    ]
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & Contact Section */}

          <div className="lg:col-span-2">
            <Image src="/Logo.png" alt="Logo" width={150} height={60} className="mb-6" />
            <div className="space-y-4">
              <p className="flex items-start gap-2">
                <MapPin size={20} className="text-[#AD9052] mt-1" />
                <span>
                  Prashant Complex, 2nd Floor,<br />
                  D Block, Dwarka,<br />
                  Sector 8, New Delhi 110077, India
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={20} className="text-[#AD9052]" />
                +91 99580 33614
              </p>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Mail size={20} className="text-[#AD9052]" />
                  <a href="mailto:ranjeet.sinha@ahsystems.in" className="hover:text-[#AD9052] transition-colors">
                    ranjeet.sinha@ahsystems.in
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-[#AD9052] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Major Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Major Links</h3>
            <ul className="space-y-2">
              {footerLinks.majorLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-[#AD9052] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Important Links</h3>
            <ul className="space-y-2">
              {footerLinks.importantLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-[#AD9052] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center text-sm">
            © {currentYear}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer