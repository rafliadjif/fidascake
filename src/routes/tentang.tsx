import { createFileRoute } from '@tanstack/react-router';
import { AboutPage } from '@/components/bakery-pages';

export const Route = createFileRoute('/tentang')({
  head: () => ({ meta: [
    { title: "Cerita Dapur Kami — FIDA'S" },
    { name: 'description', content: "Kenalan dengan FIDA'S: bakery rumahan, resep nenek, mentega asli, dan roti dari batch kecil." },
    { property: 'og:title', content: "Cerita Dapur Kami — FIDA'S" },
    { property: 'og:description', content: "Kenalan dengan FIDA'S: bakery rumahan, resep nenek, mentega asli, dan roti dari batch kecil." },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: AboutPage,
});
