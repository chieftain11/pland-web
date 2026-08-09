import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Philosophy from "./sections/Philosophy";
import Kitchens from "./sections/Kitchens";
import Wardrobes from "./sections/Wardrobes";
import Process from "./sections/Process";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Philosophy />
        <Kitchens />
        <Wardrobes />
        <Process />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
