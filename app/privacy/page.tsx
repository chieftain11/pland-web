import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShieldCheck, Mail, Phone, Clock } from "lucide-react";
import Footer from "../sections/Footer";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — PlanD",
  description:
    "Политика в отношении обработки и защиты персональных данных клиентов мебельной мастерской PlanD.",
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-alabaster text-foreground selection:bg-brass/20 selection:text-foreground">
      {/* Top Header */}
      <header className="sticky top-0 z-40 border-b border-concrete bg-alabaster/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-12 lg:px-20">
          <Link
            id="privacy-logo-link"
            href="/"
            className="relative block h-10 w-[86px]"
          >
            <Image
              src="/logo.png"
              alt="PlanD"
              fill
              className="object-contain object-left"
              sizes="86px"
              priority
            />
          </Link>

          <div className="flex items-center gap-6">
            <Link
              id="back-to-home-link"
              href="/"
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-muted transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>На главную</span>
            </Link>

            <Link
              id="privacy-discuss-project-button"
              href="/#contact"
              className="hidden sm:inline-flex border border-foreground/20 bg-foreground px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-alabaster transition-colors hover:bg-charcoal"
            >
              Обсудить проект
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12 md:py-20">
        <div className="mx-auto max-w-[900px] px-6 md:px-12">
          {/* Breadcrumbs */}
          <nav className="mb-8 flex items-center gap-2 text-xs tracking-wider text-muted">
            <Link href="/" className="transition-colors hover:text-foreground">
              Главная
            </Link>
            <span>/</span>
            <span className="text-foreground">Политика конфиденциальности</span>
          </nav>

          {/* Heading */}
          <header className="border-b border-concrete pb-8">
            <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-brass">
              <ShieldCheck className="h-4 w-4" />
              <span>Защита данных</span>
            </div>
            <h1 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-5xl">
              Политика конфиденциальности
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-6 text-xs text-muted">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                Редакция от 2026 года
              </span>
              <span>•</span>
              <span>Мастерская PlanD, Москва</span>
            </div>
          </header>

          {/* Notice Card: Ready for user's final policy text */}
          <div
            id="policy-notice-box"
            className="my-8 border border-brass/30 bg-concrete/50 p-6 md:p-8"
          >
            <h2 className="font-serif text-lg font-medium text-foreground">
              Информация для пользователей
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Настоящая политика определяет порядок сбора, обработки и защиты персональных данных при заказе индивидуального проектирования и производства мебели в мастерской PlanD.
            </p>
          </div>

          {/* Policy Sections */}
          <article className="prose prose-neutral max-w-none space-y-10 text-base leading-relaxed text-muted">
            {/* Section 1 */}
            <section id="section-general" className="space-y-4">
              <h2 className="font-serif text-xl text-foreground md:text-2xl">
                1. Общие положения
              </h2>
              <p>
                1.1. Настоящая Политика конфиденциальности (далее — «Политика») действует в отношении всей информации, которую мастерская PlanD (далее — «Оператор») может получить о Пользователе во время использования сайта и оформления заявок на индивидуальное изготовление мебели.
              </p>
              <p>
                1.2. Оставляя заявку на сайте, отправляя сообщение или предоставляя данные в процессе консультации, Пользователь выражает полное согласие с условиями настоящей Политики.
              </p>
              <p>
                1.3. В случае несогласия с условиями Политики Пользователь должен воздержаться от предоставления своих персональных данных через формы обратной связи.
              </p>
            </section>

            {/* Section 2 */}
            <section id="section-collected-data" className="space-y-4">
              <h2 className="font-serif text-xl text-foreground md:text-2xl">
                2. Состав обрабатываемых данных
              </h2>
              <p>
                2.1. В рамках оказания услуг по проектированию, производству и монтажу корпусной мебели Оператор может обрабатывать следующие категории данных:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Имя, фамилия (для идентификации и коммуникации);</li>
                <li>Контактный номер телефона и адрес электронной почты;</li>
                <li>
                  Адрес объекта (город, улица, номер дома/квартиры) — исключительно для выезда замерщика, доставки материалов и монтажа готовой мебели;
                </li>
                <li>
                  Параметры и пожелания к проекту (габариты помещения, эскизы, выбранные материалы, чертежи);
                </li>
                <li>
                  Технические данные, автоматически передаваемые браузером (файлы cookie, IP-адрес, тип устройства).
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="section-purposes" className="space-y-4">
              <h2 className="font-serif text-xl text-foreground md:text-2xl">
                3. Цели обработки персональных данных
              </h2>
              <p>
                3.1. Персональные данные Пользователя обрабатываются исключительно в целях:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>
                  Обработки входящих запросов на консультацию, предварительный расчёт стоимости и разработку дизайн-проекта;
                </li>
                <li>
                  Организации выезда дизайнера-конструктора для замера помещения;
                </li>
                <li>
                  Заключения, исполнения и сопровождения договоров на производство кухонь и шкафов;
                </li>
                <li>
                  Организации бережной доставки и финального монтажа мебельных конструкций;
                </li>
                <li>
                  Предоставления гарантийного и сервисного обслуживания готовых изделий.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="section-storage" className="space-y-4">
              <h2 className="font-serif text-xl text-foreground md:text-2xl">
                4. Порядок хранения и защита информации
              </h2>
              <p>
                4.1. Оператор принимает все необходимые организационные и технические меры для защиты персональных данных Пользователя от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий третьих лиц.
              </p>
              <p>
                4.2. Персональные данные хранятся не дольше, чем этого требуют цели их обработки, либо до момента отзыва согласия Пользователем.
              </p>
            </section>

            {/* Section 5 */}
            <section id="section-third-parties" className="space-y-4">
              <h2 className="font-serif text-xl text-foreground md:text-2xl">
                5. Передача данных третьим лицам
              </h2>
              <p>
                5.1. Персональные данные Пользователя никогда не продаются и не передаются третьим лицам в рекламных целях.
              </p>
              <p>
                5.2. Передача данных третьим лицам допускается исключительно в объёме, необходимом для исполнения обязательств перед Пользователем (например, авторизованной службе доставки и штатным бригадам монтажников PlanD для доставки и сборки мебели).
              </p>
            </section>

            {/* Section 6 */}
            <section id="section-rights" className="space-y-4">
              <h2 className="font-serif text-xl text-foreground md:text-2xl">
                6. Права Пользователя
              </h2>
              <p>
                6.1. Пользователь имеет право на получение информации, касающейся обработки его персональных данных, а также на их уточнение, блокирование или уничтожение в случае, если данные являются неполными, устаревшими или неточными.
              </p>
              <p>
                6.2. Пользователь вправе в любой момент отозвать своё согласие на обработку персональных данных, направив соответствующее уведомление на электронную почту Оператора.
              </p>
            </section>

            {/* Section 7 */}
            <section id="section-contacts" className="border-t border-concrete pt-8 space-y-4">
              <h2 className="font-serif text-xl text-foreground md:text-2xl">
                7. Контакты и обратная связь
              </h2>
              <p>
                По всем вопросам, связанным с обработкой персональных данных, вы можете обратиться к нам удобным для вас способом:
              </p>
              <div className="grid gap-4 pt-2 sm:grid-cols-2">
                <a
                  href="mailto:hello@pland.ru"
                  className="flex items-center gap-3 border border-concrete bg-white/60 p-4 transition-colors hover:border-foreground/30 hover:bg-white"
                >
                  <Mail className="h-5 w-5 text-brass" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted">
                      Электронная почта
                    </div>
                    <div className="text-sm font-medium text-foreground">
                      hello@pland.ru
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+79990000000"
                  className="flex items-center gap-3 border border-concrete bg-white/60 p-4 transition-colors hover:border-foreground/30 hover:bg-white"
                >
                  <Phone className="h-5 w-5 text-brass" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted">
                      Телефон мастерской
                    </div>
                    <div className="text-sm font-medium text-foreground">
                      +7 (999) 000-00-00
                    </div>
                  </div>
                </a>
              </div>
            </section>
          </article>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
