import { createFileRoute } from '@tanstack/react-router';
import { CustomPage } from '@/components/bakery-pages';

export const Route = createFileRoute('/kue-custom')({
  head: () => ({ meta: [
    { title: "Kue Custom Ulang Tahun — FIDA'S" },
    { name: 'description', content: "Pesan kue custom H-1 dengan mockup desain terlebih dahulu dan DP 50% setelah disepakati." },
    { property: 'og:title', content: "Kue Custom Ulang Tahun — FIDA'S" },
    { property: 'og:description', content: "Pesan kue custom H-1 dengan mockup desain terlebih dahulu dan DP 50% setelah disepakati." },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: CustomPage,
});
