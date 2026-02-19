export default {
  /**
   * Nextra metadata configuration
   * @see https://nextra.vercel.app/docs/metadata
   */
  metadata: {
    title: {
      default: "杭电吉协 HDU Guitar Club",
      template: "%s | 杭电吉协",
    },
    description: "杭电吉协是杭州电子科技大学的音乐爱好者俱乐部，无面试、无官僚，只为热爱音乐的你提供纯粹的交流与创作空间。",
    metadataBase: new URL("https://hdu-guitar-club.vercel.app/"),
    keywords: [
      "杭电吉协",
      "HDU Guitar Club",
      "杭州电子科技大学",
      "吉他社团",
      "音乐社团",
      "乐队",
      "摇滚",
      "排练房",
    ],
    generator: "Next.js",
    applicationName: "杭电吉协",
    appleWebApp: {
      title: "杭电吉协",
    },
    openGraph: {
      url: "./",
      siteName: "杭电吉协",
      locale: "zh_CN",
      type: "website",
    },
    other: {
      "msapplication-TileColor": "#fff",
    },
    twitter: {
      site: "https://hdu-guitar-club.vercel.app/",
    },
    alternates: {
      canonical: "./",
    },
  },
  /**
   * Nextra Layout component configuration
   */
  nextraLayout: {
    docsRepositoryBase: "https://github.com/hdu-guitar-club/hdjx-docs/tree/main/app/docs/",
    sidebar: {
      defaultMenuCollapseLevel: 1,
    },
  },
  /**
   * Main Layout head configuration
   */
  head: {
    mantine: {
      defaultColorScheme: "dark",
      nonce: "8IBTHwOdqNKAWeKl7plt8g==",
    },
  },
  /**
   * GitHub API configuration
   * @see https://docs.github.com/en/rest/reference/repos#releases
   */
  gitHub: {
    repo: "hdu-guitar-club/hdjx-docs",
    apiUrl: "https://api.github.com",
    releasesUrl: "https://api.github.com/repos/hdu-guitar-club/hdjx-docs/releases",
  },

  /**
   * Release notes configuration
   */
  releaseNotes: {
    url: "https://github.com/hdu-guitar-club/hdjx-docs/releases",
    maxReleases: 10,
  },

  /**
   * Search configuration (for pagefind)
   */
  search: {
    queryKeyword: "q",
    minQueryLength: 3,
    limitKeyword: "limit",
    defaultMaxResults: 5,
    excerptLengthKeyword: "excerptLength",
    defaultExcerptLength: 30,
    defaultLanguage: "zh",
  },
}
