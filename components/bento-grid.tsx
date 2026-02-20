"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Music, Guitar, Mic, Users, Smartphone } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function SystemStatus() {
  const [dots, setDots] = useState([true, true, true, false, true]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => prev.map(() => Math.random() > 0.2));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2">
      {dots.map((active, i) => (
        <motion.div
          key={i}
          className={`w-2 h-2 rounded-full ${active ? "bg-emerald-500" : "bg-zinc-700"}`}
          animate={active ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}

function AnimatedChart() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const points = [
    { x: 0, y: 60 },
    { x: 20, y: 45 },
    { x: 40, y: 55 },
    { x: 60, y: 30 },
    { x: 80, y: 40 },
    { x: 100, y: 15 },
  ];

  const pathD = points.reduce((acc, point, i) => {
    return i === 0 ? `M ${point.x} ${point.y}` : `${acc} L ${point.x} ${point.y}`;
  }, "");

  return (
    <svg ref={ref} viewBox="0 0 100 70" className="w-full h-24">
      <defs>
        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgb(255,255,255)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="rgb(255,255,255)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {isInView && (
        <>
          <path
            d={`${pathD} L 100 70 L 0 70 Z`}
            fill="url(#chartGradient)"
            className="opacity-50"
          />
          <path
            d={pathD}
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            className="draw-line"
          />
        </>
      )}
    </svg>
  );
}

/**
 * Bento grid component showcasing HDU Guitar Club features
 */
export function BentoGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-instrument-sans)" }}
          >
            在这里，音乐没有门槛
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            专业设备、多元乐器、丰富演出，只为热爱音乐的你提供最纯粹的交流与创作空间。
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {/* Large card - 专业排练房 */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 group relative p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 hover:scale-[1.02] transition-all duration-300 overflow-hidden"
          >
            <div className="flex items-start justify-between mb-8">
              <div>
                <div className="p-2 rounded-lg bg-zinc-800 w-fit mb-4">
                  <Music className="w-5 h-5 text-zinc-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">专业排练房</h3>
                <p className="text-zinc-400 text-sm">
                  专属活动室学活南A105，24小时开放不锁门。区域划分清晰：公用琴区、吉他区、贝斯区、键盘及合成器区、架子鼓区、音箱区。
                  另配备箱鼓、各类架子、话筒、凳子等公共物品，成员可将私人乐器放置在排练房内寄存。
                </p>
              </div>
              <SystemStatus />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {["设备可用率", "开放时间", "月排练次数", "成员满意度"].map((metric) => (
                <div key={metric} className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">
                    {metric === "设备可用率" && "99%"}
                    {metric === "开放时间" && "24h"}
                    {metric === "月排练次数" && "100+"}
                    {metric === "成员满意度" && "98%"}
                  </div>
                  <div className="text-xs text-zinc-500">{metric}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 多元乐器支持 */}
          <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-2 rounded-lg bg-zinc-800 w-fit mb-4">
              <Guitar className="w-5 h-5 text-zinc-400" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">现场型音乐社团</h3>
            <p className="text-zinc-400 text-sm mb-6">
              以乐队为核心，以乐队四大件（吉他、贝斯、键盘、鼓）＋主唱为基础。欢迎各种乐器加入，包容各类音乐曲风，与各大高校开展合作，提供跨校舞台表演机会。
            </p>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 text-xs bg-zinc-800 rounded text-zinc-400">摇滚</span>
              <span className="px-2 py-1 text-xs bg-zinc-800 rounded text-zinc-400">流行</span>
              <span className="px-2 py-1 text-xs bg-zinc-800 rounded text-zinc-400">民谣</span>
            </div>
          </motion.div>

          {/* 丰富演出机会 */}
          <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-2 rounded-lg bg-zinc-800 w-fit mb-4">
              <Mic className="w-5 h-5 text-zinc-400" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">丰富演出机会</h3>
            <p className="text-zinc-400 text-sm mb-4">
              每年固定举办GR音乐节、跨年音乐节、藤廊音乐会、草坪音乐会，承包各学院迎新晚会、校十佳歌手总决赛伴奏，并与各大高校开展合作舞台。
            </p>
            <AnimatedChart />
          </motion.div>

          {/* 零门槛加入 */}
          <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-2 rounded-lg bg-zinc-800 w-fit mb-4">
              <Users className="w-5 h-5 text-zinc-400" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">零门槛加入</h3>
            <p className="text-zinc-400 text-sm mb-4">
              无面试、氛围纯粹，只要对音乐感兴趣，无论新手还是有经验乐手，均可加入。社费仅50元，一次性缴纳，覆盖4年。
            </p>
            <div className="flex items-center gap-2 text-emerald-500 text-sm">
              <span className="font-mono">3天</span>
              <span className="text-zinc-500">内组队成功</span>
            </div>
          </motion.div>

          {/* 全平台运营 */}
          <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-2 rounded-lg bg-zinc-800 w-fit mb-4">
              <Smartphone className="w-5 h-5 text-zinc-400" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">全平台运营</h3>
            <p className="text-zinc-400 text-sm mb-4">
              全平台官方账号名称均为「杭电吉协」，抖音、B站、微信公众号、小红书同步更新，相关演出、日常内容实时发布，活动现场live超清多角度视频同步上传。
            </p>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 text-xs bg-zinc-800 rounded text-zinc-400">抖音</span>
              <span className="px-2 py-1 text-xs bg-zinc-800 rounded text-zinc-400">B站</span>
              <span className="px-2 py-1 text-xs bg-zinc-800 rounded text-zinc-400">公众号</span>
              <span className="px-2 py-1 text-xs bg-zinc-800 rounded text-zinc-400">小红书</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
