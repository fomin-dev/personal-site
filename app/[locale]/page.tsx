import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/Header";
import { Marquee } from "@/components/Marquee";
import { Hero } from "@/components/Hero";
import { PromoBanner } from "@/components/PromoBanner";
import { Services } from "@/components/Services";
import { SiteCard } from "@/components/SiteCard";
import { Process } from "@/components/Process";
import { WhyMe } from "@/components/WhyMe";
import { Payment } from "@/components/Payment";
import { Faq } from "@/components/Faq";
import { Contacts } from "@/components/Contacts";
import { MobileCta } from "@/components/MobileCta";
import { Footer } from "@/components/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* Scroll-reveal and float animations are opt-in; keep content visible without JS */}
      <noscript>
        <style>{`.reveal,.hero-line,.hero-fade{opacity:1!important;transform:none!important}`}</style>
      </noscript>

      <Header />
      <Marquee />
      <main className="flex-1 pb-20 md:pb-0">
        <Hero />
        <PromoBanner />
        <Services />
        <SiteCard />
        <Process />
        <WhyMe />
        <Payment />
        <Faq />
        <Contacts />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
