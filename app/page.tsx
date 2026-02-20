import { BentoGrid } from "@/components/bento-grid";
import { FinalCTA } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { LogoMarquee } from "@/components/logo-marquee";
import { Pricing } from "@/components/pricing";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Footer } from "nextra-theme-docs";
import { landingPageContent } from "@/resources/content";

export default function HomePage() {
  const content = landingPageContent;

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-zinc-950">
        {content.hero.enabled && <Hero />}
        {content.logoMarquee.enabled && <LogoMarquee />}
        {content.bentoGrid.enabled && <BentoGrid />}
        {content.pricing.enabled && <Pricing />}
        {content.finalCTA.enabled && <FinalCTA />}
        {content.footer.enabled && <Footer />}
      </main>
    </SmoothScroll>
  );
}
