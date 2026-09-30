import { createFileRoute } from '@tanstack/react-router';
import { MenuPage } from '@/components/bakery-content';

export const Route = createFileRoute('/menu')({
  head: () => ({ meta: [
    { title: "Menu Roti & Kukis — FIDA'S" },
    { name: 'description', content: "Pilih roti sobek, cinnamon roll, croissant, kukis, dan brownies segar dari dua batch oven harian." },
    { property: 'og:title', content: "Menu Roti & Kukis — FIDA'S" },
    { property: 'og:description', content: "Pilih roti sobek, cinnamon roll, croissant, kukis, dan brownies segar dari dua batch oven harian." },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: MenuPage,
});
