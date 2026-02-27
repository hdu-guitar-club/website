"use client";

import Image from "next/image";
import { useDictionary } from "../_hooks/use-dictionary";

interface ILogoProps {
  showText?: boolean;
  size?: "sm" | "md";
  textClassName?: string;
  asLink?: boolean;
  className?: string;
}

/**
 * Logo 组件
 * 显示杭电吉协的 Logo，包含图标和文字
 */
export const Logo = (props: ILogoProps) => {
  const { showText = true, size = "md", textClassName = "", asLink = true, className = "" } = props;
  const { dictionary } = useDictionary();

  const iconSize = size === "sm" ? 18 : 24;
  const containerSize = size === "sm" ? "w-6 h-6" : "w-8 h-8";

  const logoConfig = dictionary?.logo;

  const content = (
    <>
      <div
        className={`${containerSize} rounded-full bg-black flex items-center justify-center overflow-hidden`}
      >
        <Image
          src="/logo-circle.svg"
          alt={logoConfig?.alt || "杭电吉协"}
          width={iconSize}
          height={iconSize}
          className="object-contain"
        />
      </div>
      {showText && (
        <span className={`font-semibold text-white ${textClassName}`.trim()}>{logoConfig?.text || "杭电吉协"}</span>
      )}
    </>
  );

  if (asLink) {
    return (
      <a href="#" className={`flex items-center gap-2 ${className}`.trim()}>
        {content}
      </a>
    );
  }

  return <div className={`flex items-center gap-2 ${className}`.trim()}>{content}</div>;
};
