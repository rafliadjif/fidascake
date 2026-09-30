import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { ArrowRight, Instagram, MapPin, Menu as MenuIcon, ShoppingBag, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type CartItem, getJakartaMinutes } from '@/lib/bakery';

type OrderType = 'ambil' | 'antar';
type BakeryContextType = { cart: CartItem[]; orderType: OrderType; setOrderType: (value: OrderType) => void; addItem: (item: Omit<CartItem, 'quantity'>) => void; changeQuantity: (id: string, amount: number) => void; clearCart: () => void };
const BakeryContext = createContext<BakeryContextType | null>(null);
export function useBakery() { const value = useContext(BakeryContext); if (!value) throw new Error('Bakery context missing'); return value; }
export function BakeryProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orderType, setOrderType] = useState<OrderType>('ambil');
  useEffect(() => { try { const saved = localStorage.getItem('fidas-cart'); if (saved) setCart(JSON.parse(saved)); const savedType = localStorage.getItem('fidas-order-type'); if (savedType === 'antar') setOrderType('antar'); } catch { /* demo remains usable */ } }, []);
  useEffect(() => { localStorage.setItem('fidas-cart', JSON.stringify(cart)); }, [cart]);
  useEffect(() => { localStorage.setItem('fidas-order-type', orderType); }, [orderType]);
  const addItem = (item: Omit<CartItem, 'quantity'>) => setCart(current => { const existing = current.find(entry => entry.id === item.id && entry.note === item.note); return existing ? current.map(entry => entry === existing ? { ...entry, quantity: entry.quantity + 1 } : entry) : [...current, { ...item, quantity: 1 }]; });
  const changeQuantity = (id: string, amount: number) => setCart(current => current.map(item => item.id === id ? { ...item, quantity: item.quantity + amount } : item).filter(item => item.quantity > 0));
  const clearCart = () => setCart([]);
  return <BakeryContext.Provider value={{ cart, orderType, setOrderType, addItem, changeQuantity, clearCart }}>{children}</BakeryContext.Provider>;
}
function Header() {
  const { cart, orderType, setOrderType } = useBakery();
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: state => state.location.pathname });
  useEffect(() => setOpen(false), [path]);
  const [minutes, setMinutes] = useState<number | null>(null);
  useEffect(() => { setMinutes(getJakartaMinutes()); const timer = setInterval(() => setMinutes(getJakartaMinutes()), 60000); return () => clearInterval(timer); }, []);
  const isOpen = minutes !== null && minutes >= 480 && minutes < 1200;
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  return <>
    <div className="announcement"><span className="announcement-dot" /> {isOpen ? 'DAPUR BUKA' : 'PESAN UNTUK BATCH BERIKUTNYA'} <span className="announcement-divider">✦</span> SETIAP HARI, 08.00–20.00 <span className="announcement-divider">✦</span> FRESH DARI OVEN, BUAT KAMU</div>
    <header className="site-header"><div className="header-inner">
      <Link to="/" className="brand" aria-label="FIDA'S, beranda"><span>FIDA'S<span className="brand-star">✳</span></span><small>CAKE & COOKIES</small></Link>
      <nav className="desktop-nav" aria-label="Navigasi utama"><Link to="/menu" activeProps={{ className: 'active' }}>Menu</Link><Link to="/kue-custom" activeProps={{ className: 'active' }}>Kue Custom</Link><Link to="/lokasi" activeProps={{ className: 'active' }}>Lokasi</Link><Link to="/tentang" activeProps={{ className: 'active' }}>Cerita Kami</Link></nav>
      <div className="header-actions"><div className="order-toggle" role="group" aria-label="Pilihan pesanan"><Button variant={orderType === 'ambil' ? 'toggleActive' : 'toggle'} size="sm" onClick={() => setOrderType('ambil')}>Ambil Sendiri</Button><Button variant={orderType === 'antar' ? 'toggleActive' : 'toggle'} size="sm" onClick={() => setOrderType('antar')}>Antar</Button></div><Button asChild variant="icon" size="icon" aria-label={`Keranjang, ${count} barang`}><Link to="/keranjang"><ShoppingBag size={21} strokeWidth={1.8}/>{count > 0 && <span className="cart-count">{count}</span>}</Link></Button><Button variant="icon" size="icon" className="mobile-menu-button" aria-label={open ? 'Tutup menu' : 'Buka menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <MenuIcon />}</Button></div>
    </div><div className="mobile-order-bar" role="group" aria-label="Pilihan pesanan"><Button variant={orderType === 'ambil' ? 'toggleActive' : 'toggle'} size="sm" onClick={() => setOrderType('ambil')}>Ambil Sendiri</Button><Button variant={orderType === 'antar' ? 'toggleActive' : 'toggle'} size="sm" onClick={() => setOrderType('antar')}>Antar (5 km)</Button></div>{open && <nav className="mobile-nav" aria-label="Navigasi seluler"><Link to="/menu">Menu <ArrowRight size={16}/></Link><Link to="/kue-custom">Kue Custom <ArrowRight size={16}/></Link><Link to="/lokasi">Lokasi <ArrowRight size={16}/></Link><Link to="/tentang">Cerita Kami <ArrowRight size={16}/></Link></nav>}</header>
  </>;
}
function Footer() { return <footer className="site-footer"><div className="container footer-main"><div><Link to="/" className="brand footer-brand"><span>FIDA'S<span className="brand-star">✳</span></span><small>CAKE & COOKIES</small></Link><p>Roti hangat, kue penuh cerita.<br/>Dibuat pelan-pelan, buat dinikmati bersama.</p></div><div className="footer-links"><Link to="/menu">Menu</Link><Link to="/kue-custom">Kue Custom</Link><Link to="/lokasi">Lokasi</Link><Link to="/tentang">Tentang Kami</Link></div><div className="footer-note"><span className="eyebrow">DATANG ATAU SAPA KAMI</span><p><MapPin size={17}/> Area Jakarta Selatan</p><p><Instagram size={17}/> @fidas.cakecookies</p><small>Alamat dan akun di atas hanya contoh untuk demo.</small></div></div><div className="container footer-bottom"><span>© 2026 REMAH.</span><span>Dibuat dengan mentega & banyak cinta ♡</span></div></footer>; }
export function BakeryShell({ children }: { children: ReactNode }) { return <BakeryProvider><Header/><main>{children}</main><Footer/></BakeryProvider>; }
