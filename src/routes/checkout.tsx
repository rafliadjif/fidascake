import { createFileRoute } from '@tanstack/react-router';
import { CheckoutPage } from '@/components/bakery-pages';

export const Route = createFileRoute('/checkout')({
  head: () => ({ meta: [
    { title: "Checkout Pesanan — FIDA'S" },
    { name: 'description', content: "Lengkapi detail pesanan roti dan kue FIDA'S dalam simulasi checkout tanpa pembayaran." },
    { property: 'og:title', content: "Checkout Pesanan — FIDA'S" },
    { property: 'og:description', content: "Lengkapi detail pesanan roti dan kue FIDA'S dalam simulasi checkout tanpa pembayaran." },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: CheckoutPage,
});
