"use client";

import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Концепция",
    body: "Встреча, замер, предварительные оценки, выбор материала.",
  },
  {
    number: "02",
    title: "Инженерный проект",
    body: "Подготовка проекта кухни с разработкой монтажных узлов, уточненная оценка.",
  },
  {
    number: "03",
    title: "Производство",
    body: "Изготавливаем мебель в нашей мастерской: распил, кромление, покраска и контроль качества.",
  },
  {
    number: "04",
    title: "Поставка и монтаж под ключ",
    body: "Доставляем, собираем и настраиваем всё в вашем интерьере.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const dotVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export default function Process() {
  return (
    <section id="process" className="bg-charcoal py-24 md:py-36 lg:py-44">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        <ScrollReveal>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-alabaster/50">
            Процесс
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="mt-5 max-w-2xl font-serif text-3xl leading-tight text-alabaster md:text-4xl lg:text-5xl">
            От замысла до интерьера
          </h2>
        </ScrollReveal>

        <motion.div
          className="relative mt-16 space-y-16 lg:mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={stepVariants}
              className="relative"
            >
              <div className="absolute left-1/2 top-1 z-10 -translate-x-1/2">
                <motion.div
                  variants={dotVariants}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-brass/50 bg-charcoal"
                >
                  <div className="h-2 w-2 rounded-full bg-brass" />
                </motion.div>
              </div>

              {index !== steps.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.25 + 0.3 }}
                  className="absolute left-1/2 top-9 h-[calc(100%+4rem)] w-[1px] origin-top bg-alabaster/10"
                />
              )}

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">
                <div
                  className={`${
                    index % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <span className="font-serif text-5xl text-alabaster/10 md:text-7xl">
                    {step.number}
                  </span>
                  <h3 className="mt-2 font-serif text-xl text-alabaster md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-alabaster/60">
                    {step.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
