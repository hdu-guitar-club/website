"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const logos = [
  { name: "杭电各学院", width: 100 },
  { name: "校学生会", width: 80 },
  { name: "十佳歌手", width: 90 },
  { name: "MAO Livehouse", width: 100 },
  { name: "loopy", width: 70 },
  { name: "大麦66", width: 90 },
  { name: "西湖高校音乐节", width: 100 },
  { name: "礼拜三乐队", width: 90 },
]

/**
 * Logo marquee component showing partners and bands
 */
export function LogoMarquee() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="text-sm text-zinc-500 uppercase tracking-wider font-medium">我们的合作与演出舞台</p>
      </motion.div>

      <div className="relative">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

        {/* Marquee container */}
        <div className="flex animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[160px] h-16 mx-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <div className="flex items-center gap-2 text-zinc-400">
                <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center">
                  <span className="text-xs font-bold">{logo.name[0]}</span>
                </div>
                <span className="font-medium" style={{ fontFamily: "var(--font-instrument-sans)" }}>
                  {logo.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
