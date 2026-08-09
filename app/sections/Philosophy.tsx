"use client";

import Image from "next/image";
import ScrollReveal from "../components/ScrollReveal";

export default function Philosophy() {
  return (
    <section className="bg-alabaster py-24 md:py-36 lg:py-44">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-12 lg:gap-24 lg:px-20">
        <ScrollReveal direction="left" className="relative aspect-[4/5] overflow-hidden md:aspect-[3/4]">
          <Image
            src="/kitchens/im9.jpg"
            alt="Премиальная кухня PlanD с мраморной столешницей"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </ScrollReveal>

        <div className="flex flex-col justify-center">
          <ScrollReveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              О мастерской
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="mt-5 font-serif text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl">
              Мебель, которая ощущается
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted md:text-lg">
              <p>
                Мы не делаем мебель в привычном смысле. Мы проектируем предметы
                интерьера, которые организуют пространство и задают его характер.
              </p>
              <p>
                Каждая <strong className="text-foreground">кухня</strong> PlanD —
                это точная инженерия под ваш ритм жизни: зоны хранения,
                освещение, фурнитура и фактуры выстраиваются в единую систему.
                Каждый <strong className="text-foreground">шкаф</strong> — это не
                просто корпус с дверцами, а продуманная до миллиметра эргономика,
                скрытая за бесшовным фасадом.
              </p>
              <p>
                Минимализм для нас — не отсутствие деталей, а совершенство
                каждой из них.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
