import Hero from "@/components/Home/Hero";
import TrustBadges from "@/components/Home/TrustBadges";
import Services from "@/components/Home/Services";
import BookingSection from "@/components/Home/BookingSection";
import Values from "@/components/Home/Values";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <SEO />
      <Hero />
      <TrustBadges />
      <Values />
      <Services />

      <section className="py-24 bg-background scroll-mt-20" id="kontakt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BookingSection />
        </div>
      </section>
    </div>
  );
}
