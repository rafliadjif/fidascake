import { createFileRoute } from '@tanstack/react-router';
import { LocationPage } from '@/components/bakery-pages';

export const Route = createFileRoute('/lokasi')({
  head: () => ({ meta: [
    { title: "Lokasi & Pengantaran — FIDA'S" },
    { name: 'description', content: "Ambil sendiri di area Jakarta Selatan atau antar dalam radius 5 km dari dapur FIDA'S." },
    { property: 'og:title', content: "Lokasi & Pengantaran — FIDA'S" },
    { property: 'og:description', content: "Ambil sendiri di area Jakarta Selatan atau antar dalam radius 5 km dari dapur FIDA'S." },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: LocationPage,
});
