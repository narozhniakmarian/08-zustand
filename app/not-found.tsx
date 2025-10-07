import NotFoundClient from "@/components/NotFoundClient/NotFoundClient";

export const metadata = {
  title: "Сторінку не знайдено",
  description: "На жаль, такої сторінки не існує",
  openGraph: {
    title: "Сторінку не знайдено",
    description: "На жаль, такої сторінки не існує",
    url: "https://notehub.com/not-found",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "404 Not Found",
      },
    ],
  },
};

export default function NotFound() {
  return <NotFoundClient />;
}
