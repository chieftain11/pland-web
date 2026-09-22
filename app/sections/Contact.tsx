"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="bg-charcoal py-24 md:py-36 lg:py-44">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <ScrollReveal>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-alabaster/50">
                Контакты
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-5 max-w-lg font-serif text-3xl leading-tight text-alabaster md:text-4xl lg:text-5xl">
                Создайте пространство, которое останется с вами надолго
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-8 max-w-md text-base leading-relaxed text-alabaster/60 md:text-lg">
                Расскажите о вашем проекте. Мы свяжемся, зададим уточняющие
                вопросы и предложим время встречи.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="group relative">
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="peer w-full border-b border-alabaster/20 bg-transparent py-3 text-base text-alabaster outline-none transition-colors focus:border-brass"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 top-3 text-sm uppercase tracking-[0.12em] text-alabaster/40 transition-all peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-brass peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-[10px]"
                >
                  Имя
                </label>
              </div>

              <div className="group relative">
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="peer w-full border-b border-alabaster/20 bg-transparent py-3 text-base text-alabaster outline-none transition-colors focus:border-brass"
                  placeholder=" "
                />
                <label
                  htmlFor="phone"
                  className="absolute left-0 top-3 text-sm uppercase tracking-[0.12em] text-alabaster/40 transition-all peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-brass peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-[10px]"
                >
                  Телефон
                </label>
              </div>

              <div className="group relative">
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="peer w-full resize-none border-b border-alabaster/20 bg-transparent py-3 text-base text-alabaster outline-none transition-colors focus:border-brass"
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className="absolute left-0 top-3 text-sm uppercase tracking-[0.12em] text-alabaster/40 transition-all peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-brass peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-[10px]"
                >
                  Сообщение
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-brass px-8 py-4 text-sm font-medium uppercase tracking-[0.12em] text-charcoal transition-colors hover:bg-brass-dark md:w-auto"
              >
                {submitted ? "Заявка отправлена" : "Отправить заявку"}
              </button>

              <p className="text-xs text-alabaster/40 leading-relaxed">
                Нажимая кнопку, вы соглашаетесь с{" "}
                <Link
                  href="/privacy"
                  className="underline hover:text-alabaster transition-colors"
                >
                  политикой конфиденциальности
                </Link>
                . Консультация бесплатна.
              </p>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
