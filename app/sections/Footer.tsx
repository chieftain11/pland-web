import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Кухни", href: "/#kitchens" },
  { label: "Шкафы", href: "/#wardrobes" },
  { label: "Материалы", href: "/#materials" },
  { label: "Проекты", href: "/#portfolio" },
  { label: "Контакты", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-concrete bg-alabaster py-16 md:py-20">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Link href="/" className="relative block h-10 w-[86px]">
              <Image
                src="/logo.png"
                alt="PlanD"
                fill
                className="object-contain object-left"
                sizes="86px"
              />
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
              Москва, Мастерская PlanD
              <br />
              Производство кухонь и шкафов на заказ.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Навигация
            </h4>
            <nav className="mt-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Контакты
            </h4>
            <div className="mt-6 space-y-3 text-sm text-foreground/80">
              <p>
                <a
                  href="mailto:hello@pland.ru"
                  className="transition-colors hover:text-foreground"
                >
                  hello@pland.ru
                </a>
              </p>
              <p>
                <a
                  href="tel:+79990000000"
                  className="transition-colors hover:text-foreground"
                >
                  +7 (999) 000-00-00
                </a>
              </p>
              <div className="flex gap-4 pt-2">
                <a
                  href="#"
                  className="text-foreground/60 transition-colors hover:text-foreground"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-foreground/60 transition-colors hover:text-foreground"
                >
                  Pinterest
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-concrete pt-8 text-xs text-muted md:flex-row md:items-center">
          <p>© 2026 PlanD. Все права защищены.</p>
          <Link
            id="privacy-policy-link"
            href="/privacy"
            className="transition-colors hover:text-foreground underline underline-offset-4 decoration-concrete hover:decoration-foreground"
          >
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}
