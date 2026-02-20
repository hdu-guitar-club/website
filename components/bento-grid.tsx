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
 * Bento grid component showcasing HDU Music Club features
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
                  专属活动室学活南A105，配备全国高校顶尖音响设备、完整鼓组、公用吉他/贝斯等，
                  设备可用率99%，每周开放40+小时，月均接待100+次排练，夜晚的排练房总有琴弦舞动与鼓点跳跃，见证每一份音乐热爱的成长。
                </p>
              </div>
              <SystemStatus />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {["设备可用率", "周开放时长", "月排练次数", "成员满意度"].map((metric) => (
                <div key={metric} className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">
                    {metric === "设备可用率" && "99%"}
                    {metric === "周开放时长" && "40+h"}
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
            <h3 className="text-lg font-semibold text-white mb-2">多元乐器支持</h3>
            <p className="text-zinc-400 text-sm mb-6">
              不止于吉他！吉协涵盖鼓、木吉他、电吉他、贝斯、键盘等各类乐器，只要你热爱音乐，无论擅长哪种乐器，都能找到专属位置。
            </p>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 text-xs bg-zinc-800 rounded text-zinc-400">JPOP</span>
              <span className="px-2 py-1 text-xs bg-zinc-800 rounded text-zinc-400">朋克</span>
              <span className="px-2 py-1 text-xs bg-zinc-800 rounded text-zinc-400">流行摇滚</span>
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
              承包各学院迎新演出、校园十佳歌手决赛伴奏，每年固定举办GR摇滚节、藤廊音乐会、草坪音乐派对，登上MAO等Livehouse舞台。
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
              无面试、无官僚主义，只要对音乐感兴趣，无论新手还是有经验乐手，均可加入。社费仅50元，一次性缴纳，覆盖4年。
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
              小红书、微信公众号、bilibili均有官方账号，同步活动预告、演出视频、教学资料。排练房预约小程序开发中。
            </p>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 text-xs bg-zinc-800 rounded text-zinc-400">小红书</span>
              <span className="px-2 py-1 text-xs bg-zinc-800 rounded text-zinc-400">公众号</span>
              <span className="px-2 py-1 text-xs bg-zinc-800 rounded text-zinc-400">B站</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
