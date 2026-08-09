"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navItems = [
  { label: "Кухни", href: "#kitchens" },
  { label: "Шкафы", href: "#wardrobes" },
  { label: "Материалы", href: "#materials" },
  { label: "Проекты", href: "#portfolio" },
  { label: "Контакты", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-alabaster/85 backdrop-blur-md shadow-[0_1px_0_rgba(26,26,26,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-12 lg:px-20">
          <a href="#" className="relative h-10 w-[86px]">
            <Image
              src="/logo.png"
              alt="PlanD"
              fill
              className={`object-contain object-left transition-all duration-500 ${
                scrolled ? "" : "invert"
              }`}
              sizes="86px"
              priority
            />
          </a>

          <nav className="hidden items-center gap-10 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`group relative text-sm font-medium uppercase tracking-[0.14em] transition-colors ${
                  scrolled
                    ? "text-foreground/80 hover:text-foreground"
                    : "text-alabaster/80 hover:text-alabaster"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-brass transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <span
              className={`text-xs font-medium uppercase tracking-[0.12em] transition-colors ${
                scrolled ? "text-muted" : "text-alabaster/60"
              }`}
            >
              RU
            </span>
            <a
              href="#contact"
              className={`group relative overflow-hidden border px-6 py-3 text-xs font-medium uppercase tracking-[0.14em] transition-colors ${
                scrolled
                  ? "border-foreground/20 bg-foreground text-alabaster hover:bg-charcoal"
                  : "border-alabaster/30 bg-transparent text-alabaster hover:bg-alabaster/10"
              }`}
            >
              Обсудить проект
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 lg:hidden"
            aria-label="Открыть меню"
          >
            <Menu
              className={`h-6 w-6 transition-colors ${
                scrolled ? "text-foreground" : "text-alabaster"
              }`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-alabaster"
          >
            <div className="flex h-full flex-col p-6 md:p-12">
              <div className="flex items-center justify-between">
                <span className="relative h-10 w-[86px]">
                  <Image
                    src="/logo.png"
                    alt="PlanD"
                    fill
                    className="object-contain object-left"
                    sizes="86px"
                    priority
                  />
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2"
                  aria-label="Закрыть меню"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-1 flex-col justify-center gap-8">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    onClick={() => setMobileOpen(false)}
                    className="font-serif text-4xl text-foreground transition-colors hover:text-brass md:text-5xl"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="w-full bg-foreground py-4 text-center text-sm font-medium uppercase tracking-[0.14em] text-alabaster"
              >
                Обсудить проект
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
