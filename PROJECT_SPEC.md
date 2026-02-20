# 杭电吉协网站项目规格

## 项目概述

**项目名称**: hdjx-website  
**定位**: 杭电吉协 (HDU Guitar Club) 官方网站与文档系统  
**部署**: Vercel → https://hdu-guitar-club.vercel.app/  
**仓库**: https://github.com/hdu-guitar-club/website

---

## 技术栈

| 类别 | 技术                                            |
| ---- | ----------------------------------------------- |
| 框架 | Next.js 16 (App Router) + React 19 + TypeScript |
| 文档 | Nextra + nextra-theme-docs                      |
| 样式 | Tailwind CSS 4.x (OKLCH)                        |
| 动画 | Framer Motion + Lenis                           |
| UI   | Radix UI + Lucide 图标                          |

---

## 项目结构

```
hdjx-website/
├── src/
│   ├── app/                    # Next.js App Router
│   ├── components/             # React 组件
│   │   └── ui/                 # UI 基础组件库
│   ├── content/                # MDX 文档内容
│   ├── resources/              # 内容配置
│   │   ├── content.tsx         # 首页内容配置
│   │   └── theme.config.tsx    # Nextra 主题配置
│   ├── types/                  # TypeScript 类型定义
│   ├── hooks/                  # 自定义 Hooks
│   ├── lib/                    # 工具函数
│   └── mdx-components.ts       # MDX 组件配置
└── public/                     # 静态资源
```

---

## 核心功能

### 首页模块

| 组件        | 功能                          |
| ----------- | ----------------------------- |
| Hero        | 主视觉，社团名称 + 简介 + CTA |
| LogoMarquee | Logo 滚动展示                 |
| BentoGrid   | Bento 网格，展示社团特色      |
| Pricing     | 三种会员类型定价方案          |
| FinalCTA    | 最终行动号召                  |
| Footer      | 页脚链接 + 版权               |

**导航**: 使用 Nextra 自带导航栏，配置见 `app/_meta.ts`

### 内容建模系统

首页内容抽象为配置文件 (`resources/content.tsx`)，支持动态控制：

- 每个区域有 `enabled` 字段控制显示
- `socialLinks` 作为独立实体，在导航栏和页脚复用
- 定价方案支持可选 `badge` 字段

类型定义见 `types/content.types.ts`

### 文档系统

- **路由**: `/docs/*` → Nextra MDX 渲染
- **特性**: 全文搜索、目录导航、代码高亮、LaTeX 支持

---

## 关键配置

### Nextra 主题 (`theme.config.tsx`)

- 强制深色主题，禁用主题切换
- 文档路径: `/docs`

### 导航 (`app/_meta.ts`)

社交链接从 `resources/content.tsx` 的 `socialLinks` 生成

---

## 设计规范

### 色彩 (OKLCH)

| 变量         | 用途 | 值              |
| ------------ | ---- | --------------- |
| --background | 背景 | oklch(0.09 0 0) |
| --foreground | 前景 | oklch(1 0 0)    |

### 字体

| 变量           | 字体            | 用途 |
| -------------- | --------------- | ---- |
| --font-sans    | Manrope         | 正文 |
| --font-display | Cal Sans        | 展示 |
| --font-heading | Instrument Sans | 标题 |

### 动画

- 进入动画: `y: 20 → 0` 淡入
- 缓动函数: `[0.22, 1, 0.36, 1]`
- 触发: `useInView({ once: true })`

---

## 路由

| 路径      | 描述     |
| --------- | -------- |
| `/`       | 首页     |
| `/docs/*` | MDX 文档 |

---

## 代码规范

- 箭头函数 + 命名导出
- 类型定义: `interface IxxxProps`
- 参数命名: `props`，函数体内解构

---

## 社交媒体

- Bilibili: https://space.bilibili.com/522982714
- 抖音 / 小红书 / 微信公众号 (见 `resources/content.tsx`)
