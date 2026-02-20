import { Layout } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import type { Metadata } from "next";

import "./globals.css";
import { layoutConfig } from "@/theme.config";

export const metadata: Metadata = {
  /** 替代链接配置 */
  alternates: {
    /** 规范链接 */
    canonical: "./",
  },
  /** Apple Web App 配置 */
  appleWebApp: {
    /** Apple Web App 标题 */
    title: "杭电吉协",
  },
  /** 应用名称 */
  applicationName: "杭电吉协",
  /** 网站描述 */
  description:
    "杭电吉协是杭州电子科技大学的音乐爱好者俱乐部，只为热爱音乐的你提供纯粹的交流与创作空间。",
  /** 生成器名称 */
  generator: "Next.js",
  /** 网站关键词 */
  keywords: [
    "杭电吉协",
    "HDU Music Club",
    "杭州电子科技大学",
    "吉他社团",
    "音乐社团",
    "乐队",
    "摇滚",
    "排练房",
  ],
  /** 元数据基础 URL */
  metadataBase: new URL("https://hdu-guitar-club.vercel.app/"),
  /** Open Graph 社交分享配置 */
  openGraph: {
    /** 语言区域 */
    locale: "zh_CN",
    /** 网站名称 */
    siteName: "杭电吉协",
    /** 类型 */
    type: "website",
    /** 页面 URL */
    url: "./",
  },
  /** 其他元数据 */
  other: {
    /** Windows 磁贴颜色 */
    "msapplication-TileColor": "#fff",
  },
  /** 网站标题配置 */
  title: {
    /** 默认标题 */
    default: "杭电吉协",
    /** 标题模板，%s 会被替换为页面标题 */
    template: "%s | 杭电吉协",
  },
  /** Twitter 卡片配置 */
  twitter: {
    /** Twitter 站点 URL */
    site: "https://hdu-guitar-club.vercel.app/",
  },
  /** 网站图标配置 */
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "favicon.png",
    },
  ],
};

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const calSans = localFont({
  display: "swap",
  src: "../public/fonts/CalSans-SemiBold.woff2",
  variable: "--font-cal-sans",
});

const instrumentSans = localFont({
  display: "swap",
  src: "../public/fonts/InstrumentSans-VariableFont.ttf",
  variable: "--font-instrument-sans",
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" dir="ltr" suppressHydrationWarning>
      <Head>{/* Your additional tags should be passed as `children` of `<Head>` element */}</Head>
      <body
        className={`${manrope.variable} ${calSans.variable} ${instrumentSans.variable} font-sans antialiased`}
      >
        <Layout pageMap={await getPageMap()} {...layoutConfig}>
          {children}
        </Layout>
      </body>
    </html>
  );
}
