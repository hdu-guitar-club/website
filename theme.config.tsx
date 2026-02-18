export default {
  logo: (
    <span style={{ fontWeight: 700, fontSize: "1.2rem" }}>
      <span style={{ color: "#0070f3" }}>HDJX</span> Docs
    </span>
  ),
  project: {
    link: "https://github.com/your-repo/hdjx-docs",
  },
  docsRepositoryBase: "https://github.com/your-repo/hdjx-docs",
  useNextSeoProps() {
    return {
      titleTemplate: "%s – HDJX Docs",
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="HDJX Docs" />
      <meta property="og:description" content="HDJX 文档站点" />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  primaryHue: 211,
  primarySaturation: 100,
  banner: {
    key: "v1-release",
    text: (
      <a href="/docs" target="_blank" rel="noreferrer">
        🎉 HDJX Docs v1.0 已发布！查看新功能 →
      </a>
    ),
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
    autoCollapse: true,
  },
  toc: {
    backToTop: true,
    float: true,
    title: "目录",
  },
  editLink: {
    text: "在 GitHub 上编辑此页 →",
  },
  feedback: {
    content: "有问题？给我们反馈 →",
    labels: "feedback",
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{" "}
        <a href="https://github.com/your-repo" target="_blank">
          HDJX
        </a>
        . All rights reserved.
      </span>
    ),
  },
  navigation: {
    prev: true,
    next: true,
  },
  search: {
    placeholder: "搜索文档...",
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: "system",
    storageKey: "theme",
  },
};
