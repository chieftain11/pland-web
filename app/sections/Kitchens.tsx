"use client";

import Image from "next/image";
import ScrollReveal from "../components/ScrollReveal";

const pillars = [
  {
    title: "Архитектурный дизайн",
    body: "Продуманная композиция пространства, где форма, пропорции и материалы работают в единой системе.",
  },
  {
    title: "Премиальные материалы",
    body: "Отборные поверхности, выбранные за тактильные качества, долговечность и эстетику.",
  },
  {
    title: "Интегрированный свет",
    body: "Свет как часть архитектуры: он подчёркивает фактуру, форму и атмосферу интерьера.",
  },
  {
    title: "Эргономика без компромиссов",
    body: "Каждая деталь продумана под ваш ритм жизни, привычки и особенности пространства.",
  },
];

export default function Kitchens() {
  return (
    <section id="kitchens" className="bg-concrete py-24 md:py-36 lg:py-44">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <ScrollReveal>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Кухни
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-5 font-serif text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl">
                Производство кухонь
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-8 max-w-md text-base leading-relaxed text-muted md:text-lg">
                Производство кухонь на заказ — это баланс эстетики, технологии и
                человеческого опыта. Мы создаём кухни, в которых готовка, приёмы
                пищи и общение происходят естественно.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <a
                href="#portfolio"
                className="group mt-10 inline-flex items-center gap-3 border-b border-foreground/20 pb-1 text-sm font-medium uppercase tracking-[0.14em] text-foreground transition-colors hover:border-foreground"
              >
                Смотреть интерьеры
              </a>
            </ScrollReveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {pillars.map((pillar, index) => (
              <ScrollReveal key={pillar.title} delay={index * 0.1}>
                <div className="group h-full bg-alabaster p-8 transition-shadow duration-500 hover:shadow-xl">
                  <div className="h-[1px] w-12 bg-brass transition-all duration-500 group-hover:w-20" />
                  <h3 className="mt-8 font-serif text-xl text-foreground md:text-2xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                    {pillar.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal className="mt-16 lg:mt-24">
          <div className="relative aspect-[21/9] overflow-hidden">
            <Image
              src="/kitchens/im3.jpg"
              alt="Архитектурная кухня PlanD"
              fill
              className="object-cover transition-transform duration-1000 hover:scale-[1.03]"
              sizes="100vw"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
