import bread1 from '@/assets/bread-1.jpg';
import bread3 from '@/assets/bread-3.jpg';
import bread4 from '@/assets/bread-4.jpg';
import treat2 from '@/assets/treat-2.jpg';
import cake1 from '@/assets/cake-1.jpg';
import cake2 from '@/assets/cake-2.jpg';
import cake3 from '@/assets/cake-3.jpg';
import wheat from '@/assets/whole-wheat.jpg';
import pandan from '@/assets/bolu-pandan.jpg';
import dessertBox from '@/assets/dessert-box.jpg';

export const DELIVERY_FEE = 10000;
export const DELIVERY_MINIMUM = 30000;
export const TOPPER_PRICE = 15000;
export const CAKE_PRICES = { '16 cm': 185000, '20 cm': 265000 } as const;
export type Product = { id: string; name: string; price: number; image: string; label?: string; category: 'Roti Harian' | 'Dessert'; description: string };
export const products: Product[] = [
  { id: 'sobek-cokelat', name: 'Roti Sobek Cokelat', price: 28000, image: bread1, label: 'BEST SELLER', category: 'Roti Harian', description: 'Roti empuk, isian cokelat lumer di setiap sobekan.' },
  { id: 'croissant', name: 'Croissant Butter', price: 22000, image: bread4, category: 'Roti Harian', description: 'Renyah berlapis, wangi mentega asli.' },
  { id: 'cinnamon-roll', name: 'Cinnamon Roll', price: 25000, image: bread3, category: 'Roti Harian', description: 'Gulungan kayu manis hangat dengan glasir manis.' },
  { id: 'gandum-tawar', name: 'Roti Gandum Tawar', price: 32000, image: wheat, category: 'Roti Harian', description: 'Roti gandum lembut untuk sarapan di rumah.' },
  { id: 'brownies-slice', name: 'Brownies Fudgy · Slice', price: 18000, image: treat2, category: 'Dessert', description: 'Satu potong cokelat pekat, padat, dan lembut.' },
  { id: 'brownies-loyang', name: 'Brownies Fudgy · Loyang', price: 135000, image: treat2, category: 'Dessert', description: 'Satu loyang brownies fudgy untuk dinikmati bersama.' },
  { id: 'bolu-pandan', name: 'Bolu Pandan', price: 85000, image: pandan, category: 'Dessert', description: 'Bolu pandan harum dengan remah empuk.' },
  { id: 'dessert-box', name: 'Dessert Box Cokelat', price: 45000, image: dessertBox, category: 'Dessert', description: 'Lapisan cokelat lembut dalam satu kotak.' },
];
export const cakes = [
  { id: 'stroberi', name: 'Kue Stroberi Klasik', image: cake1, description: 'Krim vanilla lembut, stroberi segar.' },
  { id: 'cokelat', name: 'Kue Cokelat Ganache', image: cake2, description: 'Cokelat pekat dengan ganache lumer.' },
  { id: 'lemon', name: 'Kue Lemon Ceria', image: cake3, description: 'Segar lemon, buttercream lembut.' },
];
export const rupiah = (amount: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(amount);
export type CartItem = { id: string; name: string; price: number; image: string; quantity: number; custom?: boolean; customDate?: string; note?: string };
export const getJakartaMinutes = () => {
  const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(new Date());
  return Number(parts.find(p => p.type === 'hour')?.value ?? 0) * 60 + Number(parts.find(p => p.type === 'minute')?.value ?? 0);
};
export function getNextBreadBatch(now = new Date()) {
  const date = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Jakarta', year: 'numeric', month: '2-digit', day: '2-digit' }).format(now);
  const minutes = Number(new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Jakarta', hour: '2-digit', hourCycle: 'h23' }).format(now)) * 60 + Number(new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Jakarta', minute: '2-digit' }).format(now));
  if (minutes < 540) return { date, time: '09.00' as const };
  if (minutes < 900) return { date, time: '15.00' as const };
  const next = new Date(`${date}T12:00:00+07:00`);
  next.setUTCDate(next.getUTCDate() + 1);
  return { date: new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Jakarta', year: 'numeric', month: '2-digit', day: '2-digit' }).format(next), time: '09.00' as const };
}
