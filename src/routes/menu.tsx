import { createFileRoute } from '@tanstack/react-router';
import { MenuPage } from '@/components/bakery-content';

export const Route = createFileRoute('/menu')({
  head: () => ({ meta: [
    { title: "Menu Roti Harian & Dessert — FIDA'S" },
    { name: 'description', content: "Pilih roti sobek cokelat, croissant butter, cinnamon roll, roti gandum, brownies, bolu pandan, dan dessert box." },
    { property: 'og:title', content: "Menu Roti Harian & Dessert — FIDA'S" },
    { property: 'og:description', content: "Pilih roti sobek cokelat, croissant butter, cinnamon roll, roti gandum, brownies, bolu pandan, dan dessert box." },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: MenuPage,
});
