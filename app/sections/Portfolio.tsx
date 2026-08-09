"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const projects = [
  { image: "/kitchens/im2.jpg", alt: "Кухня в частном доме" },
  { image: "/kitchens/im3.jpg", alt: "Встроенный шкаф-купе" },
  { image: "/kitchens/im4.jpg", alt: "Деталь фасада" },
  { image: "/kitchens/im5.jpg", alt: "Остров с керамогранитом" },
  { image: "/kitchens/im6.jpg", alt: "Гардеробная с латунью" },
  { image: "/kitchens/im7.jpg", alt: "Шкаф в спальне" },
  { image: "/kitchens/im8.jpg", alt: "Прихожая с шкафом" },
  { image: "/kitchens/im9.jpg", alt: "Кухня с деревянной столешницей" },
  { image: "/kitchens/im10.jpg", alt: "Белая кухня с мрамором" },
  { image: "/kitchens/im11.jpg", alt: "Кухня-гостиная с островом" },
];

export default function Portfolio() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(() => {
    setOpenIndex((i) =>
      i === null ? null : i === 0 ? projects.length - 1 : i - 1
    );
  }, []);
  const next = useCallback(() => {
    setOpenIndex((i) =>
      i === null ? null : i === projects.length - 1 ? 0 : i + 1
    );
  }, []);

  useEffect(() => {
    if (openIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [openIndex, close, prev, next]);

  return (
    <section id="portfolio" className="bg-alabaster py-24 md:py-36 lg:py-44">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <ScrollReveal>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Портфолио
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-5 font-serif text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl">
                Реализованные интерьеры
              </h2>
            </ScrollReveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.image}
              delay={index * 0.1}
              className="group relative overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(index)}
                className="relative block aspect-[4/3] w-full overflow-hidden cursor-zoom-in"
                aria-label={`Открыть фото ${project.alt}`}
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={close}
            className="absolute top-6 right-6 z-10 p-2 text-alabaster transition-opacity hover:opacity-70"
            aria-label="Закрыть"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 p-2 text-alabaster transition-opacity hover:opacity-70 md:left-8"
            aria-label="Предыдущее фото"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 p-2 text-alabaster transition-opacity hover:opacity-70 md:right-8"
            aria-label="Следующее фото"
          >
            <ChevronRight className="h-10 w-10" />
          </button>

          <div
            className="relative h-[80vh] w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={projects[openIndex].image}
              alt={projects[openIndex].alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
