"use client";
import React from 'react';
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';

const Banner = ({ slides = [], interval = 2000 }) => {
  const plugin = React.useRef(
    Autoplay({ delay: interval, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full relative"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {slides.length > 0 ? (
          slides.map((slide, index) => (
            <CarouselItem key={index} className="relative overflow-hidden">
              <div className="aspect-[16/9] md:aspect-[21/7] w-full relative">
                <Image
                  src={slide.image}
                  alt={slide.title || 'Slide image'}
                  fill
                  quality={100}
                  className="object-cover animate-kenburns"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-6 md:px-20 text-center">
                  <h2 className="text-sm md:text-xl text-white mb-4 animate-fadeIn">
                    {slide.title}
                  </h2>
                  <p className=" text-2xl md:text-5xl lg:text-6xl font-bold text-white/90 max-w-4xl mx-auto animate-slideUp">
                    {slide.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))
        ) : (
          <CarouselItem>
            <div className="aspect-[16/9] md:aspect-[21/9] w-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">No slides available</p>
            </div>
          </CarouselItem>
        )}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2" />
      <CarouselNext className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2" />
    </Carousel>
  );
};

export default Banner;