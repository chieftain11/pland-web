"use client";

import Image from "next/image";
import ScrollReveal from "../components/ScrollReveal";

const pillars = [
  {
    title: "Чистая геометрия",
    body: "Ровные фасады от пола до потолка — минимум деталей, максимум порядка.",
  },
  {
    title: "Плавная фурнитура",
    body: "Тихое открывание, мягкое закрывание и удобный доступ к содержимому.",
  },
  {
    title: "Продуманное наполнение",
    body: "Стеклянные полки, выдвижные ящики и подсветка на каждом уровне.",
  },
  {
    title: "Под вас",
    body: "Каждая система хранения проектируется под ваш гардероб и привычки.",
  },
];

export default function Wardrobes() {
  return (
    <section id="wardrobes" className="bg-alabaster py-24 md:py-36 lg:py-44">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <ScrollReveal>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Шкафы
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-5 font-serif text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl">
                Производство шкафов
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-8 max-w-md text-base leading-relaxed text-muted md:text-lg">
                Мы проектируем системы хранения, которые органично вписываются в
                архитектуру интерьера и решают задачи комфорта без лишних
                деталей.
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
                <div className="group h-full bg-concrete p-8 transition-shadow duration-500 hover:shadow-xl">
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
          <div className="relative mx-auto aspect-[16/9] max-w-[1100px] overflow-hidden">
            <Image
              src="/kitchens/im12.jpg"
              alt="Встроенный шкаф PlanD от пола до потолка"
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
