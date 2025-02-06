"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
        alert('Thank you for your message. We will contact you soon!');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                        Contact Us
                    </h1>
                    {/* <div className="mt-4 flex justify-center">
                        <div className="w-24 h-1.5 bg-[#AD9052] rounded-full" />
                    </div> */}
                    <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                        Get in touch with us for any queries about our services or to discuss how we can help your business grow.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-start">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-semibold text-gray-900">Get In Touch</h2>

                        {/* Address */}
                        <div className="flex items-start gap-4">
                            <MapPin className="w-6 h-6 text-[#AD9052] mt-1" />
                            <div>
                                <h3 className="font-semibold text-gray-900">Our Location</h3>
                                <p className="text-gray-600 mt-1">
                                    Prashant Complex, 2nd Floor,<br />
                                    D Block, Dwarka,<br />
                                    Sector 8, New Delhi 110077, India
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4">
                            <Phone className="w-6 h-6 text-[#AD9052] mt-1" />
                            <div>
                                <h3 className="font-semibold text-gray-900">Phone Number</h3>
                                <p className="text-gray-600 mt-1">+91 99580 33614</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <Mail className="w-6 h-6 text-[#AD9052] mt-1" />

                            <div>
                                <h3 className="font-semibold text-gray-900">Email Address</h3>
                                <div className="space-y-1 mt-1">
                                    <a href="mailto: info@ahsystemss.com" className="text-gray-600 hover:text-[#AD9052] block">
                                        info@ahsystemss.com
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#AD9052] focus:border-[#AD9052]"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#AD9052] focus:border-[#AD9052]"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#AD9052] focus:border-[#AD9052]"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#AD9052] focus:border-[#AD9052]"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#AD9052] focus:border-[#AD9052]"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full flex justify-center items-center gap-2 px-6 py-3 bg-[#AD9052] text-white rounded-md
                       hover:bg-[#8E7544] transition-colors duration-300 shadow-lg"
                        >
                            Send Message
                            <Send className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;