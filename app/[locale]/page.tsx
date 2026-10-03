import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/Header";
import { Marquee } from "@/components/Marquee";
import { Hero } from "@/components/Hero";
import { PromoBanner } from "@/components/PromoBanner";
import { Services } from "@/components/Services";
import { WhyMe } from "@/components/WhyMe";
import { Payment } from "@/components/Payment";
import { Contacts } from "@/components/Contacts";
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
      <Header />
      <Marquee />
      <main className="flex-1">
        <Hero />
        <PromoBanner />
        <Services />
        <WhyMe />
        <Payment />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
