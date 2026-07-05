"use client";
import { useState } from 'react';
import Image from './components/CustomImage';
import { ProductSpecs } from './components/ProductSpecs';
import { productData } from './data/product';

const isTransparent = (src: string) => src.endsWith('_tr.webp');

export default function ProductPage() {
  const allImages = [...productData.gallery, ...productData.variations.map(v => v.image)];



    const [activeImage, setActiveImage] = useState(allImages[0]);


  return (
    <main className="min-h-screen bg-white text-slate-900 py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        
<div className="flex flex-col gap-6">
    
<div className="sticky md:relative top-4 z-10 bg-white shadow-sm rounded-xl overflow-hidden">
        <div className="relative w-full aspect-video flex items-center justify-center">
		<Image 
            src={activeImage} 
            alt="main" 
            fill 
            className={`${isTransparent(activeImage) ? 'object-contain p-8' : 'object-cover'} w-full h-full transition-all duration-300`} 
          />
        </div>
		</div>


		<div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
		{allImages.map((img, i) => (
			<button 
			key={i} 
			onClick={() => setActiveImage(img)} 
			className={`border rounded-md overflow-hidden aspect-square ${activeImage === img ? 'ring-2 ring-sky-500' : 'hover:border-slate-400'}`}
			>
			<Image 
				src={img} 
				alt={`thumb ${i}`} 
				width={100} 
				height={100} 
				className={`${isTransparent(img) ? 'object-contain p-1' : 'object-cover'} w-full h-full transition-transform hover:scale-105`} 
			/>
			</button>
		))}
		</div>

  </div>

<div className="space-y-6">
  <div>
    <h1 className="text-3xl font-bold">{productData.title}</h1>
    <p className="mt-2 text-slate-600">{productData.description}</p>
  </div>

  <p className="text-gray-700 text-3xl font-bold">¥3,980</p>

  <div className="space-y-2">
    <p className="font-semibold">カラー</p>
    <div className="flex gap-2">
      {productData.variations.map((v) => {
        const colorMap: Record<string, string> = {
          'ブラック': '#1e293b',
          'ホワイト': '#f8fafc',
          'グレー': '#829196',
        };
        
        const isSelected = activeImage === v.image;
        const bgColor = colorMap[v.color] || '#e2e8f0'; 

        return (
          <button 
            key={v.color} 
            onClick={() => setActiveImage(v.image)} 
            className={`
              taxt-base px-2 py-2 mr-2 rounded-2xl border-2 transition-all duration-200
              ${isSelected ? 'ring-2 ring-offset-2 ring-sky-500 scale-105' : 'hover:scale-105 border-slate-200'}
            `}
            style={{ 
              backgroundColor: bgColor,
              color: v.color === 'ホワイト' ? 'black' : 'white',
              borderColor: isSelected ? 'transparent' : '#e2e8f0'
            }}
          >
            {v.color}
          </button>
        );
      })}
    </div>
  </div>

  <div className="flex flex-col gap-3">
    <button className="w-full bg-sky-400 text-white py-4 rounded-full font-bold text-lg hover:bg-sky-500 transition">
      カートに入れる
    </button>
    <button className="w-full bg-slate-600 text-white py-4 rounded-full font-bold text-lg hover:bg-slate-900 transition">
      今すぐ購入
    </button>
  </div>

  <ProductSpecs />
</div>
      </div>
    </main>
  );
}