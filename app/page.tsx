import { Footer } from "nextra-theme-docs";
import { BentoGrid } from "./_components/bento-grid";
import { FinalCTA } from "./_components/final-cta";
import { Hero } from "./_components/hero";
import { LogoMarquee } from "./_components/logo-marquee";
import { Pricing } from "./_components/pricing";
import { SmoothScroll } from "./_components/smooth-scroll";
import { landingPageContent } from "./_resources/content";

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
