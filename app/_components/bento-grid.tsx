"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Music, Guitar, Mic, Users, Smartphone } from "lucide-react";
import { useDictionary } from "../_hooks/use-dictionary";

const iconMap = {
  Music: Music,
  Guitar: Guitar,
  Mic: Mic,
  Users: Users,
  Smartphone: Smartphone,
};

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

const SystemStatus = () => {
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
};

const AnimatedChart = () => {
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
};

const BentoCard = (props: { card: any }) => {
  const { card } = props;
  const Icon = iconMap[card.icon as keyof typeof iconMap];

  return (
    <motion.div
      variants={itemVariants}
      className={`group relative p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 hover:scale-[1.02] transition-all duration-300 ${
        card.span === "wide" ? "md:col-span-2" : ""
      }`}
    >
      {card.type === "metrics" ? (
        <>
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="p-2 rounded-lg bg-zinc-800 w-fit mb-4">
                <Icon className="w-5 h-5 text-zinc-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-zinc-400 text-sm">{card.description}</p>
            </div>
            {card.systemStatus && <SystemStatus />}
          </div>
          <div className="grid grid-cols-4 gap-4">
            {card.metrics.map((metric: { label: string; value: string }) => (
              <div key={metric.label} className="text-center">
                <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-xs text-zinc-500">{metric.label}</div>
              </div>
            ))}
          </div>
        </>
      ) : card.type === "tags" ? (
        <>
          <div className="p-2 rounded-lg bg-zinc-800 w-fit mb-4">
            <Icon className="w-5 h-5 text-zinc-400" strokeWidth={1.5} />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
          <p className="text-zinc-400 text-sm mb-6">{card.description}</p>
          <div className="flex items-center gap-2 flex-wrap">
            {card.tags.map((tag: string) => (
              <span key={tag} className="px-2 py-1 text-xs bg-zinc-800 rounded text-zinc-400">
                {tag}
              </span>
            ))}
          </div>
        </>
      ) : card.type === "chart" ? (
        <>
          <div className="p-2 rounded-lg bg-zinc-800 w-fit mb-4">
            <Icon className="w-5 h-5 text-zinc-400" strokeWidth={1.5} />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
          <p className="text-zinc-400 text-sm mb-4">{card.description}</p>
          <AnimatedChart />
        </>
      ) : card.type === "highlight" ? (
        <>
          <div className="p-2 rounded-lg bg-zinc-800 w-fit mb-4">
            <Icon className="w-5 h-5 text-zinc-400" strokeWidth={1.5} />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
          <p className="text-zinc-400 text-sm mb-4">{card.description}</p>
          <div className="flex items-center gap-2 text-emerald-500 text-sm">
            <span className="font-mono">{card.highlight.value}</span>
            <span className="text-zinc-500">{card.highlight.label}</span>
          </div>
        </>
      ) : null}
    </motion.div>
  );
};

/**
 * Bento grid component showcasing HDU Guitar Club features
 */
export const BentoGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { dictionary } = useDictionary();

  if (!dictionary) {
    return null;
  }

  const content = dictionary.landing.bentoGrid;

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
            {content.sectionTitle}
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">{content.sectionDescription}</p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {content.cards.map((card) => (
            <BentoCard key={card.id} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
