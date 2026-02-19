"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "普通成员",
    description: "适合所有热爱音乐的同学",
    price: "50元/4年",
    features: [
      "免费使用学活南A105排练房及公用设备",
      "参与社团日常活动、乐器教学",
      "加入社团专属社群",
      "优先预约排练时段",
      "观看各类演出活动",
    ],
    cta: "缴纳社费加入",
    highlighted: false,
  },
  {
    name: "核心成员/乐队成员",
    description: "深度参与社团核心活动",
    price: "无额外费用",
    features: [
      "包含在50元社费内",
      "优先参与各类演出、GR摇滚节等核心活动",
      "享受专业音乐指导与设备优先使用权",
      "支持原创作品创作与展示",
      "拥有专属排练时段",
      "可代表吉协参与外校交流演出",
    ],
    cta: "申请成为核心成员",
    highlighted: true,
  },
  {
    name: "合作/赞助方",
    description: "与杭电吉协携手共创",
    price: "联系我们详谈",
    features: [
      "冠名社团演出与活动（如GR摇滚节）",
      "获得品牌露出与宣传机会",
      "定制音乐合作项目",
      "参与社团专属活动策划",
      "对接吉协优秀乐队资源",
    ],
    cta: "联系合作",
    highlighted: false,
  },
]

function BorderBeam() {
  return (
    <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
      <div
        className="absolute w-24 h-24 bg-white/20 blur-xl border-beam"
        style={{
          offsetPath: "rect(0 100% 100% 0 round 16px)",
        }}
      />
    </div>
  )
}

/**
 * Pricing section component for HDU Guitar Club membership plans
 */
export function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-instrument-sans)" }}
          >
            加入杭电吉协
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
            一次缴费，四年受益。所有成员平等享受社团资源，费用全部用于排练房设备维护、演出举办，透明公开。
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={`relative p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${
                plan.highlighted
                  ? "bg-zinc-900 border-zinc-700"
                  : "bg-zinc-900/50 border-zinc-800 hover:border-zinc-600"
              }`}
            >
              {plan.highlighted && <BorderBeam />}

              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-zinc-950 text-xs font-medium rounded-full">
                  推荐
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <p className="text-zinc-400 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" strokeWidth={1.5} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-full ${
                  plan.highlighted
                    ? "shimmer-btn bg-white text-zinc-950 hover:bg-zinc-200"
                    : "bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700"
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
