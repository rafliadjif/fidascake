import { createFileRoute } from '@tanstack/react-router';
import { CartPage } from '@/components/bakery-content';

export const Route = createFileRoute('/keranjang')({
  head: () => ({ meta: [
    { title: "Keranjang Pesanan — FIDA'S" },
    { name: 'description', content: "Lihat dan atur roti, kukis, dan kue custom pilihanmu sebelum menyelesaikan pesanan demo." },
    { property: 'og:title', content: "Keranjang Pesanan — FIDA'S" },
    { property: 'og:description', content: "Lihat dan atur roti, kukis, dan kue custom pilihanmu sebelum menyelesaikan pesanan demo." },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: CartPage,
});
