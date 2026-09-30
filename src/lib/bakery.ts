import bread1 from '@/assets/bread-1.jpg';
import bread2 from '@/assets/bread-2.jpg';
import bread3 from '@/assets/bread-3.jpg';
import bread4 from '@/assets/bread-4.jpg';
import treat1 from '@/assets/treat-1.jpg';
import treat2 from '@/assets/treat-2.jpg';
import cake1 from '@/assets/cake-1.jpg';
import cake2 from '@/assets/cake-2.jpg';
import cake3 from '@/assets/cake-3.jpg';

export type Product = { id: string; name: string; price: number; image: string; label: string; category: 'Roti' | 'Kukis & Camilan'; description: string };
export const products: Product[] = [
  { id: 'sobek-cokelat', name: 'Roti Sobek Cokelat', price: 38000, image: bread1, label: 'PALING LARIS', category: 'Roti', description: 'Roti empuk, isian cokelat lumer di setiap sobekan.' },
  { id: 'sobek-keju', name: 'Roti Sobek Keju', price: 38000, image: bread2, label: 'BARU DARI OVEN', category: 'Roti', description: 'Gurih keju melimpah di atas roti susu lembut.' },
  { id: 'cinnamon-roll', name: 'Cinnamon Roll', price: 29000, image: bread3, label: 'PALING LARIS', category: 'Roti', description: 'Gulungan kayu manis hangat dengan glasir manis.' },
  { id: 'croissant', name: 'Croissant Mentega', price: 26000, image: bread4, label: 'BARU DARI OVEN', category: 'Roti', description: 'Renyah berlapis, wangi mentega asli.' },
  { id: 'kukis-cokelat', name: 'Kukis Cokelat Lumer', price: 32000, image: treat1, label: 'SISA 8', category: 'Kukis & Camilan', description: 'Pinggir renyah, tengahnya masih lembut dan lumer.' },
  { id: 'brownies', name: 'Brownies Fudgy', price: 45000, image: treat2, label: 'PALING LARIS', category: 'Kukis & Camilan', description: 'Cokelat pekat, padat, dan bikin nagih.' },
];
export const cakes = [
  { id: 'stroberi', name: 'Kue Stroberi Klasik', price: 245000, image: cake1, description: 'Krim vanilla lembut, stroberi segar.' },
  { id: 'cokelat', name: 'Kue Cokelat Ganache', price: 265000, image: cake2, description: 'Cokelat pekat dengan ganache lumer.' },
  { id: 'lemon', name: 'Kue Lemon Ceria', price: 255000, image: cake3, description: 'Segar lemon, buttercream lembut.' },
];
export const rupiah = (amount: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(amount);
export type CartItem = { id: string; name: string; price: number; image: string; quantity: number; custom?: boolean; note?: string };
export const getJakartaMinutes = () => {
  const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(new Date());
  return Number(parts.find(p => p.type === 'hour')?.value ?? 0) * 60 + Number(parts.find(p => p.type === 'minute')?.value ?? 0);
};
