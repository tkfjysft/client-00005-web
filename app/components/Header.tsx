import Link from 'next/link';
import { Search, ShoppingCart } from 'lucide-react'; 

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-extrabold tracking-tighter text-slate-900 hover:text-orange-600 transition">
          GEAR PULSE
        </Link>

        <div className="flex items-center gap-6">
          <button className="text-slate-600 hover:text-orange-600 transition">
            <Search size={20} strokeWidth={2.5} />
          </button>
          
          <Link href="/" className="text-sm font-semibold text-slate-600 hover:text-orange-600 transition">
            SHOP
          </Link>

          <Link href="/cart" className="relative flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-orange-600 transition">
            <ShoppingCart size={20} strokeWidth={2.5} />
            <span className="absolute -top-2 -right-3 bg-orange-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}