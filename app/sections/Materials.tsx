"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

const materials = [
  {
    title: "Fenix NTM",
    body: "Матовая, бархатистая поверхность без отпечатков. Антибактериальная и устойчивая к микроцарапинам.",
    image:
      "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Натуральный дубовый шпон",
    body: "Тёплая древесная фактура с естественным рисунком волокон. Ощущается живым.",
    image:
      "https://images.unsplash.com/photo-1611600700192-d87eaeed4f81?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Керамогранит",
    body: "Тонкий, прочный, непористый. Идеален для столешниц и фартуков.",
    image:
      "https://images.unsplash.com/photo-1521459467264-802e2ef3141f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Латунь с брашированием",
    body: "Мягкое золотистое свечение без кричащей роскоши. Ручки, профили, акценты.",
    image:
      "https://images.unsplash.com/photo-1545873509-33e944ca7655?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Мрамор",
    body: "Классическая элегантность природного камня в деликатных вкраплениях.",
    image:
      "https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Materials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section
      id="materials"
      ref={containerRef}
      className="relative overflow-hidden bg-concrete py-24 md:py-36 lg:py-44"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <ScrollReveal>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Материалы
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-5 font-serif text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl">
                Тактильная палитра
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.14em] text-foreground"
            >
              Заказать образцы
              <span className="h-[1px] w-8 bg-foreground transition-all duration-300 group-hover:w-12" />
            </a>
          </ScrollReveal>
        </div>
      </div>

      <motion.div
        style={{ x }}
        className="mt-16 flex cursor-grab gap-6 px-6 md:px-12 lg:px-20"
      >
        {materials.map((material, index) => (
          <div
            key={material.title}
            className="group relative w-[80vw] flex-shrink-0 overflow-hidden bg-alabaster md:w-[45vw] lg:w-[32vw]"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={material.image}
                alt={material.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
                sizes="(max-width: 768px) 80vw, (max-width: 1024px) 45vw, 32vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-alabaster">
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-alabaster/60">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-serif text-2xl md:text-3xl">
                {material.title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-alabaster/80">
                {material.body}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
