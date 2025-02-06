import React from 'react'
import Image from 'next/image'
import { Target, Crown, Users, Shield, Star, ThumbsUp } from 'lucide-react'

const Vision = () => {
    const values = [
        {
            icon: <Shield className="w-8 h-8 text-[#AD9052]" />,
            title: "Trust & Reliability",
            description: "Building lasting relationships through dependable service and transparent operations."
        },
        {
            icon: <Star className="w-8 h-8 text-[#AD9052]" />,
            title: "Excellence",
            description: "Striving for the highest standards in every aspect of our services."
        },
        {
            icon: <Users className="w-8 h-8 text-[#AD9052]" />,
            title: "Customer Focus",
            description: "Putting our clients' needs first and delivering tailored solutions."
        },
        {
            icon: <ThumbsUp className="w-8 h-8 text-[#AD9052]" />,
            title: "Quality Service",
            description: "Maintaining superior standards in all our operations and deliveries."
        }
    ]

    return (
        <div id="vision-mission-values" className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 bg-grid-gray-100/50 bg-[size:20px_20px] pointer-events-none" />

            <div className="relative py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Vision Section */}
                    <div className="text-center mb-20">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                            Vision & Mission
                        </h1>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
                        <div className="relative group">
                            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/slider1.webp"
                                    alt="Our Vision"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                            </div>
                            <div className="absolute -z-10 top-6 -right-6 w-full h-full border-2 border-[#AD9052] rounded-2xl 
                                          group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <Target className="w-8 h-8 text-[#AD9052]" />
                                    Our Vision
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    To be the leading global logistics provider, recognized for innovation,
                                    reliability, and excellence in connecting businesses worldwide. We aim to
                                    transform the logistics industry through cutting-edge solutions and
                                    sustainable practices.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <Crown className="w-8 h-8 text-[#AD9052]" />
                                    Our Mission
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    To deliver exceptional logistics solutions that empower businesses to thrive
                                    in the global marketplace. We commit to providing seamless, efficient, and
                                    sustainable supply chain services while maintaining the highest standards of
                                    customer satisfaction and operational excellence.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Values Section */}
                    <div className="mt-20">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Our Core Values
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                These principles guide our actions and define our commitment to excellence
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value, index) => (
                                <div key={index}
                                    className="p-8 rounded-xl bg-white shadow-lg hover:shadow-xl 
                                                transition-shadow duration-300 border border-gray-100">
                                    <div className="mb-4">{value.icon}</div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vision