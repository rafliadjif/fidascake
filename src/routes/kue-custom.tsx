import { createFileRoute } from '@tanstack/react-router';
import { CustomPage } from '@/components/bakery-pages';

export const Route = createFileRoute('/kue-custom')({
  head: () => ({ meta: [
    { title: "Kue Custom Ulang Tahun — FIDA'S" },
    { name: 'description', content: "Kue ultah custom 16 cm mulai Rp185.000 atau 20 cm mulai Rp265.000. Pilih tulisan, warna, dan topper; DP 50% setelah mockup disetujui." },
    { property: 'og:title', content: "Kue Custom Ulang Tahun — FIDA'S" },
    { property: 'og:description', content: "Kue ultah custom 16 cm mulai Rp185.000 atau 20 cm mulai Rp265.000. Pilih tulisan, warna, dan topper; DP 50% setelah mockup disetujui." },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: CustomPage,
});
