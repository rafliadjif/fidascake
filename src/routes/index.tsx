import { createFileRoute } from '@tanstack/react-router';
import { HomePage } from '@/components/bakery-content';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: "Beranda — FIDA'S Cake & Cookies" },
    { name: 'description', content: "Roti hangat dua kali sehari dan kue custom dari dapur rumahan FIDA'S. Lihat jadwal oven dan pesan favoritmu." },
    { property: 'og:title', content: "Beranda — FIDA'S Cake & Cookies" },
    { property: 'og:description', content: "Roti hangat dua kali sehari dan kue custom dari dapur rumahan FIDA'S. Lihat jadwal oven dan pesan favoritmu." },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: HomePage,
});
