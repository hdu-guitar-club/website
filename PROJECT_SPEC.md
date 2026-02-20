# 杭电吉协网站项目规格

## 项目概述

**项目名称**: hdjx-website  
**定位**: 杭电吉协 (HDU Guitar Club) 官方网站与文档系统  
**描述**: 杭州电子科技大学吉他协会的官方网站，提供社团信息展示、活动记录、新生指南等功能。

**部署**: Vercel → https://hdu-guitar-club.vercel.app/  
**仓库**: https://github.com/hdu-guitar-club/website

---

## 技术栈

| 类别 | 技术                                            |
| ---- | ----------------------------------------------- |
| 框架 | Next.js 16 (App Router) + React 19 + TypeScript |
| 文档 | Nextra + nextra-theme-docs                      |
| 样式 | Tailwind CSS 4.x (OKLCH 色彩空间)               |
| 动画 | Framer Motion + Lenis 平滑滚动                  |
| UI   | Radix UI (无样式组件) + Lucide 图标             |
| 表单 | React Hook Form                                 |
| 图表 | Recharts                                        |

---

## 项目结构

```
hdjx-website/
├── app/                    # Next.js App Router
│   ├── docs/[[...mdxPath]]/# MDX 动态路由文档页面
│   ├── _meta.ts            # 顶部导航配置
│   ├── globals.css         # 全局样式 (CSS 变量)
│   ├── layout.tsx          # 根布局 + SEO 元数据
│   └── page.tsx            # 首页
│
├── components/             # React 组件
│   ├── ui/                 # UI 基础组件库 (50+ 组件)
│   ├── hero.tsx            # 首页英雄区
│   ├── bento-grid.tsx      # Bento 网格展示
│   ├── pricing.tsx         # 会员定价
│   ├── navbar.tsx          # 导航栏
│   ├── footer.tsx          # 页脚
│   └── ...
│
├── content/                # MDX 文档内容
│   ├── about/              # 关于我们
│   ├── activities/         # 活动一览
│   ├── guide/              # 新生指南（排练房、设备、学习）
│   └── _meta.ts            # 文档侧边栏配置
│
├── hooks/                  # 自定义 Hooks
├── lib/utils.ts            # 工具函数 (cn 等)
├── public/fonts/           # 自定义字体
│
├── theme.config.tsx        # Nextra 主题配置
├── mdx-components.ts       # MDX 组件映射
└── next.config.js          # Next.js + Nextra 配置
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

### 文档系统

- **路由**: `/docs/*` → Nextra MDX 渲染
- **特性**: 全文搜索、目录导航、代码高亮、LaTeX 支持
- **结构**: 关于我们 / 活动一览 / 新生指南

### UI 组件库

基于 Radix UI 构建，位于 `components/ui/`：

- **表单**: Button, Input, Select, Checkbox, Radio, Switch, Slider
- **反馈**: Dialog, AlertDialog, Toast, Alert, Drawer, Popover, Tooltip
- **布局**: Card, Tabs, Accordion, Sidebar, ScrollArea
- **数据**: Table, Badge, Avatar, Calendar, Chart, Pagination

---

## 关键配置

### theme.config.tsx

```typescript
export const layoutConfig = {
  darkMode: false,              // 禁用主题切换
  forcedTheme: "dark",          // 强制深色主题
  docsRepositoryBase: "https://github.com/hdu-guitar-club/website",
  contentDirBasePath: "/docs",  // 文档路径
  sidebar: { autoCollapse: true, defaultOpen: true },
  search: <Search placeholder="搜索内容..." />,
};
```

### next.config.js

```javascript
export default nextra({
  latex: true,
  search: { codeblocks: false },
  contentDirBasePath: "/docs",
});
```

### 导航 (app/\_meta.ts)

```typescript
{
  docs: { type: "page", title: "活动记录" },
  social: { type: "menu", title: "关注我们", items: { bilibili, douyin, rednote, wechat } },
}
```

---

## 设计规范

### 色彩 (OKLCH)

| 变量         | 用途 | 值              |
| ------------ | ---- | --------------- |
| --background | 背景 | oklch(0.09 0 0) |
| --foreground | 前景 | oklch(1 0 0)    |
| --primary    | 主色 | oklch(1 0 0)    |
| --border     | 边框 | oklch(0.22 0 0) |

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

| 路径      | 页面                             | 描述     |
| --------- | -------------------------------- | -------- |
| `/`       | app/page.tsx                     | 首页     |
| `/docs/*` | app/docs/[[...mdxPath]]/page.tsx | MDX 文档 |

---

## 开发命令

```bash
pnpm dev      # 开发
pnpm build    # 构建
pnpm start    # 生产服务
```

---

## 代码规范

- 箭头函数 + 命名导出
- 类型定义: `interface IxxxProps`
- 参数命名: `props`，函数体内解构

```typescript
interface IButtonProps {
  variant?: "default" | "outline";
}

export const Button = (props: IButtonProps) => {
  const { variant = "default" } = props;
  return <button>...</button>;
};
```

---

## 社交媒体

- Bilibili: https://space.bilibili.com/522982714
- 抖音 / 小红书 / 微信公众号 (见 app/\_meta.ts)
