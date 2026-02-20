"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Final CTA section component for HDU Guitar Club
 */
export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          准备好加入我们，一起玩音乐了吗？
        </h2>
        <p className="text-lg sm:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
          加入杭电吉协，在学活南A105的专业排练房里，和志同道合的伙伴一起组乐队、练乐器、办演出，释放你的音乐热爱；
          这里有理工男的浪漫与热血，有小众音乐的坚守与绽放，每一份热爱都能被看见、被听见。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="shimmer-btn bg-white text-zinc-950 hover:bg-zinc-200 rounded-full px-8 h-14 text-base font-medium shadow-lg shadow-white/20"
          >
            立即加入
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 h-14 text-base font-medium border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-white hover:border-zinc-700 bg-transparent"
          >
            咨询排练/演出
          </Button>
        </div>

        <p className="mt-8 text-sm text-zinc-500">
          社费50元覆盖4年，无任何额外费用，所有成员平等享受社团资源，费用全部用于排练房设备维护、演出举办，透明公开。
        </p>
      </motion.div>
    </section>
  );
}
