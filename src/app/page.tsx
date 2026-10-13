import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Studio } from "@/components/Studio";
import { Teacher } from "@/components/Teacher";
import { Online } from "@/components/Online";
import { Services } from "@/components/Services";
import { Reviews } from "@/components/Reviews";
import { Prices } from "@/components/Prices";
import { Faq } from "@/components/Faq";
import { Address } from "@/components/Address";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BackToTop } from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Перейти к содержимому
      </a>
      <RevealOnScroll />
      <ScrollProgress />
      <Header />
      <main id="main">
        <Hero />
        <Skills />
        <Studio />
        <Teacher />
        <Online />
        <Services />
        <Reviews />
        <Prices />
        <Faq />
        <Address />
        <Booking />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
