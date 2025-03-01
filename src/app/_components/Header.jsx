"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [flagDropdown, setFlagDropdown] = useState(false);

  const handleClick = (e) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const navLinks = [
    { title: "Home", href: "/" },
    {
      title: "About Us",
      href: "#",
      dropdown: [
        { title: "Company", href: "/about#company" },
        { title: "Vision Mission & Values", href: "/about#vision-mission-values" },
        { title: "Industries Served", href: "/about#industries" },
      ],
    },
    {
      title: "Services",
      href: "#",
      dropdown: [
        { title: "Ocean Freight", href: "/services#ocean-freight" },
        { title: "Air Freight", href: "/services#air-freight" },
        { title: "Ground Transport", href: "/services#ground-transport" },
        { title: "Project Logistics", href: "/services#project-logistics" },
        { title: "Warehousing", href: "/services#warehousing" },
        { title: "Customs Brokerage", href: "/services#customs-brokerage" },
        { title: "Creating & Packaging", href: "/services#creating-packaging" },
        { title: "Value Added Services", href: "/services#value-added-services" },
      ],
    },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full bg-white shadow-md sticky top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/Logo.png"
              alt="logo"
              width={100}
              height={100}
              className="cursor-pointer hover:opacity-90 transition-opacity"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-[#AD9052] transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                {link.dropdown ? (
                  <>
                    <button className="flex items-center space-x-1 text-gray-800 hover:text-[#AD9052] transition-colors font-semibold peer">
                      <span>{link.title}</span>
                      <ChevronDown size={16} />
                    </button>
                    <div className="absolute left-0 mt-2 w-52 bg-white rounded-lg shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 hover:visible hover:opacity-100 transition-all duration-300 ease-in-out">
                      {link.dropdown.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={handleClick}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-50 hover:text-[#AD9052] transition-colors"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="text-gray-800 hover:text-[#AD9052] transition-colors font-semibold"
                  >
                    {link.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Flags with Contact Info */}
          <div className="relative group hidden md:block">
            <div className="flex items-center space-x-4 cursor-pointer">
              <Image
                src="/india.png"
                alt="India"
                width={30}
                height={30}
                className="transition-transform hover:scale-110"
              />

            </div>
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 hover:visible hover:opacity-100 transition-all duration-300 ease-in-out">
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-semibold text-[#AD9052] flex items-center gap-2">
                  <MapPin size={20} />
                  Air Harbour
                </h3>
                <p className="text-gray-600 pl-7">
                  Prashant Complex, 2nd Floor,<br />
                  D Block, Dwarka,<br />
                  Sector 8, New Delhi 110077, India
                </p>
                <div className="space-y-2">
                  <p className="text-gray-600 flex items-center gap-2">
                    <Phone size={16} />
                    +91 99580 33614
                  </p>
                  <a
                    href="mailto:info@ahsystemss.com"
                    className="text-[#AD9052] hover:underline flex items-center gap-2"
                  >
                    <Mail size={16} />
                    info@ahsystemss.com
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link, index) => (
                <div key={index}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          link.title === "About Us"
                            ? setAboutDropdown(!aboutDropdown)
                            : setServiceDropdown(!serviceDropdown)
                        }
                        className="w-full flex justify-between items-center px-3 py-2 text-gray-800 hover:text-[#AD9052]"
                      >
                        <span>{link.title}</span>
                        <ChevronDown
                          size={16}
                          className={`transform transition-transform ${(link.title === "About Us" ? aboutDropdown : serviceDropdown)
                            ? "rotate-180"
                            : ""
                            }`}
                        />
                      </button>
                      {((link.title === "About Us" && aboutDropdown) ||
                        (link.title === "Services" && serviceDropdown)) && (
                          <div className="pl-6 space-y-1">
                            {link.dropdown.map((item, idx) => (
                              <Link
                                key={idx}
                                href={item.href}
                                onClick={handleClick}
                                className="block px-3 py-2 text-gray-800 hover:text-[#AD9052]"
                              >
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="block px-3 py-2 text-gray-800 hover:text-[#AD9052]"
                    >
                      {link.title}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Contact Info */}
              <div className="border-t border-gray-200 mt-4 pt-4 px-3">
                <div onClick={() => setFlagDropdown(!flagDropdown)} className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <Image src="/india.png" alt="India" width={30} height={30} />

                  </div>
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform ${flagDropdown ? "rotate-180" : ""}`}

                  />
                </div>

                {flagDropdown && (
                  <div className="mt-4 space-y-4">
                    <h3 className="text-lg font-semibold text-[#AD9052] flex items-center gap-2">
                      <MapPin size={20} />
                      Air Harbour
                    </h3>
                    <p className="text-gray-600 pl-7">
                      Prashant Complex, 2nd Floor,<br />
                      D Block, Dwarka,<br />
                      Sector 8, New Delhi 110077, India
                    </p>
                    <div className="space-y-2">
                      <p className="text-gray-600 flex items-center gap-2">
                        <Phone size={16} />
                        +91 99580 33614
                      </p>
                      <a
                        href="mailto:info@ahsystemss.com"
                        className="text-[#AD9052] hover:underline flex items-center gap-2"
                      >
                        <Mail size={16} />
                        info@ahsystemss.com
                      </a>

                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;