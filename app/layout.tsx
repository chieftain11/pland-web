import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PlanD — Производство кухонь и шкафов на заказ",
  description:
    "PlanD создаёт корпусную мебель высокого качества: кухни и шкафы на заказ с эксклюзивным дизайном. Производство, доставка и монтаж под ключ.",
  openGraph: {
    title: "PlanD — Производство кухонь и шкафов на заказ",
    description:
      "PlanD создаёт корпусную мебель высокого качества: кухни и шкафы на заказ с эксклюзивным дизайном. Производство, доставка и монтаж под ключ.",
  },
  keywords: [
    "производство кухонь",
    "производство шкафов",
    "кухня на заказ",
    "шкаф на заказ",
    "мебель высокого качества",
    "эксклюзивный дизайн",
    "кухни под ключ",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
