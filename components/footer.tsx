"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const footerLinks = {
  "社团活动": ["GR摇滚节", "日常排练", "乐器教学", "演出合作", "草坪音乐派对"],
  "资源中心": ["排练房预约", "乐器教学资料", "乐队组队平台", "演出视频回顾"],
  "关于我们": ["社团历史", "核心成员", "加入我们", "联系我们"],
  "合规与支持": ["社费使用说明", "排练房设备使用规范", "隐私政策", "版权声明"],
}

/**
 * Footer component for HDU Guitar Club
 */
export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer ref={ref} className="border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-8"
        >
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                <span className="text-zinc-950 font-bold text-sm">吉</span>
              </div>
              <span className="font-semibold text-white">杭电吉协</span>
            </a>
            <p className="text-sm text-zinc-500 mb-4">
              杭电吉协——杭州电子科技大学音乐爱好者的纯粹俱乐部，无面试、无官僚，以音乐为纽带，汇聚每一份热爱，传承摇滚精神，打造高校优质音乐社群。
            </p>
            {/* System Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-glow" />
              <span className="text-xs text-zinc-400">排练房开放中</span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-zinc-500">&copy; {new Date().getFullYear()} 杭电吉协 HDU Guitar Club. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">
              小红书
            </a>
            <a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">
              微信公众号
            </a>
            <a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">
              B站
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
