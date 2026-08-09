"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-end overflow-hidden bg-charcoal"
    >
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="/kitchens/im2.jpg"
          alt="Премиальная минималистичная кухня PlanD"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/40" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-24 pt-40 md:px-12 lg:px-20"
      >
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-alabaster/70"
          >
            Корпусная мебель
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-serif text-4xl leading-[1.1] text-alabaster md:text-6xl lg:text-7xl"
          >
            Производство кухонь и шкафов на заказ
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-alabaster/80 md:text-xl"
          >
            PlanD создаёт корпусную мебель высокого качества, где архитектура
            встречается с ручной работой. Мы проектируем кухни и шкафы под
            ключ — от первого эскиза до монтажа в вашем интерьере.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center border border-alabaster/40 bg-alabaster px-8 py-4 text-sm font-medium uppercase tracking-[0.12em] text-charcoal transition-colors hover:bg-white"
            >
              Смотреть портфолио
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-alabaster/30 px-8 py-4 text-sm font-medium uppercase tracking-[0.12em] text-alabaster backdrop-blur-sm transition-colors hover:bg-alabaster/10"
            >
              Рассчитать стоимость
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-alabaster/60">
          Листайте вниз
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-alabaster/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
