"use client";
import { useState } from 'react';
import Image from './components/CustomImage';
import { ProductSpecs } from './components/ProductSpecs';
import { productData } from './data/product';

const isTransparent = (src: string) => src.endsWith('_tr.webp');

export default function ProductPage() {
  const allImages = [...productData.gallery, ...productData.variations.map(v => v.image)];

//   const allImages = [
//     "/images/product-scenery.webp",
//     "/images/product-appearance_tr.webp",
//     "/images/product-port.webp",
//     "/images/product-plug-1.webp",
//     "/images/product-plug-2.webp",
//     "/images/product-box_tr.webp",
//     ...productData.variations.map(v => v.image)
//   ];

    const [activeImage, setActiveImage] = useState(allImages[0]);


  return (
    <main className="min-h-screen bg-white text-slate-900 py-12">
      {/* max-w-6xl で全体幅を制御 */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        
<div className="flex flex-col gap-6">
    
    {/* メイン画像：横長に最適化 */}
<div className="sticky top-4 z-10 bg-white shadow-sm rounded-xl overflow-hidden">
        <div className="relative w-full aspect-video flex items-center justify-center">          <Image 
            src={activeImage} 
            alt="main" 
            fill 
            className={`${isTransparent(activeImage) ? 'object-contain p-8' : 'object-cover'} w-full h-full transition-all duration-300`} 
          />
        </div>
		</div>


    {/* サムネイル：横1列に配置 */}
		<div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
		{allImages.map((img, i) => (
			<button 
			key={i} 
			onClick={() => setActiveImage(img)} 
			// 選択中のサムネイルに枠線を付ける
			className={`border rounded-md overflow-hidden aspect-square ${activeImage === img ? 'ring-2 ring-orange-500' : 'hover:border-slate-400'}`}
			>
			<Image 
				src={img} 
				alt={`thumb ${i}`} 
				width={100} 
				height={100} 
				// ここで画像ごとに object-fit を切り替えます
				className={`${isTransparent(img) ? 'object-contain p-1' : 'object-cover'} w-full h-full transition-transform hover:scale-105`} 
			/>
			</button>
		))}
		</div>

  </div>

        {/* --- 右側：商品情報 --- */}
{/* 右側：商品情報（ボタンを含めた完全版） */}
<div className="space-y-6">
  <div>
    <h1 className="text-3xl font-bold">{productData.title}</h1>
    <p className="mt-2 text-slate-600">{productData.description}</p>
  </div>

  <p className="text-red-600 text-3xl font-bold">¥3,980</p>

{/* カラー選択 */}
  <div className="space-y-2">
    <p className="font-semibold">カラー</p>
    <div className="flex gap-2">
      {productData.variations.map((v) => {
        // 色名に対応するカラーコードを辞書で定義
        const colorMap: Record<string, string> = {
          'ブラック': '#1e293b',
          'ホワイト': '#f8fafc',
          'シルバー': '#94a3b8',
          // ここに実際のデータにある色名と色を追加してください
        };
        
        const isSelected = activeImage === v.image;
        const bgColor = colorMap[v.color] || '#e2e8f0'; // マッピングがない場合はグレー

        return (
          <button 
            key={v.color} 
            onClick={() => setActiveImage(v.image)} 
            className={`
              px-4 py-2 rounded-full border-2 transition-all duration-200
              ${isSelected ? 'ring-2 ring-offset-2 ring-orange-500 scale-105' : 'hover:scale-105 border-slate-200'}
            `}
            style={{ 
              backgroundColor: bgColor,
              color: isSelected ? 'white' : (v.color === 'ブラック' ? 'white' : 'black'),
              borderColor: isSelected ? 'transparent' : '#e2e8f0'
            }}
          >
            {v.color}
          </button>
        );
      })}
    </div>
  </div>

  {/* 購入アクション */}
  <div className="flex flex-col gap-3">
    <button className="w-full bg-orange-400 text-white py-4 rounded-full font-bold text-lg hover:bg-orange-500 transition">
      カートに入れる
    </button>
    <button className="w-full bg-slate-800 text-white py-4 rounded-full font-bold text-lg hover:bg-slate-900 transition">
      今すぐ購入
    </button>
  </div>

  {/* 下部にスペックを表示 */}
  <ProductSpecs />
</div>
      </div>
    </main>
  );
}