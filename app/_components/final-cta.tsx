"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useDictionary } from "../_hooks/use-dictionary";

/**
 * Final CTA section component for HDU Guitar Club
 */
export const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { dictionary } = useDictionary();

  if (!dictionary) {
    return null;
  }

  const content = dictionary.landing.finalCTA;

  return (
    <section className="py-24 px-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          style={{ fontFamily: "var(--font-cal-sans)" }}
        >
          {content.headline}
        </h2>
        <p className="text-lg sm:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
          {content.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {content.ctas.map((cta, index) => (
            <Button
              key={cta.label}
              size="lg"
              className={
                cta.variant === "primary"
                  ? "shimmer-btn bg-white text-zinc-950 hover:bg-zinc-200 rounded-full px-8 h-14 text-base font-medium shadow-lg shadow-white/20"
                  : "rounded-full px-8 h-14 text-base font-medium border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-white hover:border-zinc-700 bg-transparent"
              }
              variant={cta.variant === "primary" ? "default" : "outline"}
            >
              {cta.label}
              {index === 0 && <ArrowRight className="ml-2 w-5 h-5" />}
            </Button>
          ))}
        </div>

        <p className="mt-8 text-sm text-zinc-500">{content.note}</p>
      </motion.div>
    </section>
  );
};
