import { BentoGrid } from "@/components/bento-grid";
import { FinalCTA } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { LogoMarquee } from "@/components/logo-marquee";
import { Pricing } from "@/components/pricing";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Footer } from "nextra-theme-docs";

export default function HomePage() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-zinc-950">
        <Hero />
        <LogoMarquee />
        <BentoGrid />
        <Pricing />
        <FinalCTA />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
