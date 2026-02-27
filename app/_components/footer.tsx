"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Logo } from "./site-logo";
import { useDictionary } from "../_hooks/use-dictionary";
import { socialLinksConfig } from "../../content/_social-links";

/**
 * Footer component for HDU Guitar Club
 */
export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { dictionary } = useDictionary();

  if (!dictionary) {
    return null;
  }

  const content = dictionary.landing.footer;

  return (
    <footer ref={ref} className="border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-8"
        >
          <div className="col-span-2 md:col-span-1">
            <Logo className="mb-4" textClassName="hidden sm:block" />
            <p className="text-sm text-zinc-500 mb-4">{content.brand.description}</p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-glow" />
              <span className="text-xs text-zinc-400">{content.brand.statusText}</span>
            </div>
          </div>

          {content.linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-white mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-zinc-500 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} {content.copyright}
          </p>
          <div className="flex items-center gap-6">
            {content.socialLinks
              .filter((link) => link.enabled)
              .map((link) => (
                <a
                  key={link.id}
                  href={socialLinksConfig[link.id as keyof typeof socialLinksConfig]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  {link.title}
                </a>
              ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
