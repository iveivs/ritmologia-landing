import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Studio } from "@/components/Studio";
import { Teacher } from "@/components/Teacher";
import { Online } from "@/components/Online";
import { Diary } from "@/components/Diary";
import { Reviews } from "@/components/Reviews";
import { Prices } from "@/components/Prices";
import { Address } from "@/components/Address";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Studio />
      <Teacher />
      <Online />
      <Diary />
      <Reviews />
      <Prices />
      <Address />
      <Booking />
      <Footer />
    </>
  );
}
