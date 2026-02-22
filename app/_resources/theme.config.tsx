import { Navbar } from "nextra-theme-docs";
import { Search } from "nextra/components";
import { Footer } from "../_components/footer";
import { Logo } from "../_components/site-logo";

/**
 * Layout 组件配置
 * 用于 app/layout.tsx 中的 Layout 组件 props
 */
export const layoutConfig = {
  /** 是否显示复制页面内容按钮 */
  copyPageButton: true,
  /** 是否显示深色模式切换按钮 */
  darkMode: false,
  /** 文档仓库基础 URL */
  docsRepositoryBase: "https://github.com/hdu-guitar-club/website/blob/main",
  /** 编辑链接文本 */
  editLink: "在 GitHub 上编辑此页",
  /** 反馈链接配置 */
  feedback: {
    /** 反馈链接文本 */
    content: "有问题？给我们反馈",
    /** 新建 issue 时添加的标签 */
    labels: "feedback",
  },
  /** 顶部横幅内容 */
  // banner: (
  //   <Banner storageKey={`release-notes-${pack.version}`}>
  //     ✨ v{pack.version} Released - <a href="/docs/release-notes">See the release notes</a>
  //   </Banner>
  // ),
  /** 导航栏组件 */
  navbar: <Navbar logo={<Logo size="sm" asLink={false} />} />,
  /** 页脚组件 */
  footer: <Footer />,
  /** 导航链接配置 */
  navigation: {
    /** 是否显示上一页导航 */
    prev: true,
    /** 是否显示下一页导航 */
    next: true,
  },
  /** next-themes 主题配置 */
  nextThemes: {
    /** 主题属性 */
    attribute: "class",
    /** 默认主题 */
    defaultTheme: "dark",
    /** 切换主题时是否禁用过渡动画 */
    disableTransitionOnChange: true,
    /** 强制主题 */
    forcedTheme: "dark",
    /** 主题存储的 key */
    storageKey: "theme",
  },
  /** 搜索组件 */
  search: <Search placeholder="搜索内容..." />,
  /** 侧边栏配置 */
  sidebar: {
    /** 是否自动折叠非活动文件夹 */
    autoCollapse: true,
    /** 默认菜单折叠层级 */
    defaultMenuCollapseLevel: 1,
    /** 默认是否展开侧边栏 */
    defaultOpen: true,
    /** 是否显示侧边栏切换按钮 */
    toggleButton: true,
  },
  /** 目录配置 */
  toc: {
    /** 返回顶部按钮文本 */
    backToTop: "返回顶部",
    /** 目录是否浮动显示 */
    float: true,
    /** 目录标题 */
    title: "目录",
  },
} as const;

/**
 * 应用自定义配置
 * 用于其他业务逻辑
 */
export const siteConfig = {
  /** GitHub API 配置 */
  gitHub: {
    /** 仓库名称，格式为 owner/repo */
    repo: "hdu-guitar-club/website",
  },
  /** 页面 head 元素 */
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="杭电吉协" />
      <meta property="og:description" content="杭电吉协 - 杭州电子科技大学音乐爱好者俱乐部" />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  /** i18n 国际化语言下拉选项配置 */
  i18n: [],
  /** 搜索配置 (用于 pagefind) */
  pagefind: {
    /** 默认摘要长度 */
    defaultExcerptLength: 30,
    /** 默认语言 */
    defaultLanguage: "zh",
    /** 默认最大结果数量 */
    defaultMaxResults: 5,
    /** 摘要长度参数名 */
    excerptLengthKeyword: "excerptLength",
    /** 结果数量限制参数名 */
    limitKeyword: "limit",
    /** 最小查询字符长度 */
    minQueryLength: 3,
    /** 搜索查询参数名 */
    queryKeyword: "q",
  },
  /** 主题色色调 (0-360) */
  primaryHue: 211,
  /** 主题色饱和度 (0-100) */
  primarySaturation: 100,
  /** 项目链接配置 */
  project: {
    /** GitHub 项目链接 */
    link: "https://github.com/hdu-guitar-club/website",
  },
  /** 发布说明配置 */
  releaseNotes: {
    /** 最大显示发布版本数量 */
    maxReleases: 10,
    /** 发布说明页面 URL */
    url: "https://github.com/hdu-guitar-club/hdjx-docs/releases",
  },
  /** SEO 标题模板配置 */
  useNextSeoProps() {
    return {
      titleTemplate: "%s – 杭电吉协",
    };
  },
};
