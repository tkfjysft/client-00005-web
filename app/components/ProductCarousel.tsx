"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { productData } from '@/app/data/product';
import Image from '@/app/components/CustomImage';

export const ProductCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
<div className="embla__container flex">
  {productData.gallery.map((src, index) => (
    <div className="embla__slide flex-[0_0_100%] h-96 relative" key={index}> 
      <Image 
        src={src} 
        alt={`Product view ${index + 1}`} 
        fill
        className="object-contain p-4"
        sizes="(max-width: 768px) 100vw, 500px" 
      />
    </div>
  ))}
</div>
    </div>
  );
};