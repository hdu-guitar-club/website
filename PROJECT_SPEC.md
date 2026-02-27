# 杭电吉协网站项目规格

## 项目概述

**项目名称**: hdjx-website  
**定位**: 杭电吉协 (HDU Guitar Club) 官方网站与文档系统  
**部署**: Vercel → <https://hdu-guitar-club.vercel.app/>  
**仓库**: <https://github.com/hdu-guitar-club/website>

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

```text
hdjx-website/
├── app/[lang]/              # 国际化路由
│   ├── _components/         # React 组件
│   ├── _dictionaries/      # i18n 字典
│   ├── _resources/         # 内容配置
│   └── docs/              # 文档路由
├── content/               # MDX 文档内容（zh/en）
├── mdx-components.ts      # MDX 组件配置
└── public/               # 静态资源
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

### 国际化 (i18n)

- **路由**: `/[lang]/*` 支持中英文路由
- **字典**: `app/_dictionaries/` 管理多语言文案
- **Hook**: `useDictionary()` 提供客户端字典访问
- **内容**: `content/zh/` 和 `content/en/` 分离中英文 MDX

### 文档系统

- **路由**: `/[lang]/docs/*` → Nextra MDX 渲染
- **特性**: 全文搜索、目录导航、代码高亮、LaTeX 支持

---

## 关键配置

### Nextra 主题 (`theme.config.tsx`)

- 强制深色主题，禁用主题切换
- 文档路径: `/[lang]/docs`
- 通过 `getLayoutConfig(dictionary)` 动态配置 i18n 文案

### 导航配置

- `content/zh/_meta.ts` 和 `content/en/_meta.ts` 配置菜单
- `content/_social-links.ts` 统一管理社交媒体链接

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

| 路径             | 描述     |
| ---------------- | -------- |
| `/zh/*`          | 中文页面 |
| `/en/*`          | 英文页面 |
| `/[lang]/docs/*` | MDX 文档 |

---

## 代码规范

- 箭头函数 + 命名导出
- 类型定义: `interface IxxxProps`
- 参数命名: `props`，函数体内解构

---

## 社交媒体

- Bilibili: <https://space.bilibili.com/522982714>
- 其他平台: 见 `content/_social-links.ts`
