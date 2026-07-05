import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="space-y-3">
          <h2 className="text-lg font-bold tracking-tighter">GEAR PULSE</h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            最新のテクノロジーと洗練されたデザインを融合させる、プレミアムガジェットセレクトショップ。あなたのデジタルライフに最高のエネルギーを。
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text-slate-900">SHOP</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href="/" className="hover:text-orange-600 transition">商品一覧</Link></li>
            <li><Link href="/cart" className="hover:text-orange-600 transition">カートを見る</Link></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text-slate-900">SUPPORT</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href="#" className="hover:text-orange-600 transition">プライバシーポリシー</Link></li>
            <li><Link href="#" className="hover:text-orange-600 transition">特定商取引法に基づく表記</Link></li>
            <li><Link href="#" className="hover:text-orange-600 transition">お問い合わせ</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-12 pt-8 border-t text-center text-xs text-slate-400">
        &copy; 2026 GEAR PULSE All rights reserved.
      </div>
    </footer>
  );
}