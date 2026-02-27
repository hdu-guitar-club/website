import { socialLinksConfig } from "../_social-links";

export default {
  index: {
    title: "Home",
  },
  about: {
    title: "About Us",
  },
  activities: {
    title: "Activities",
  },
  guide: {
    title: "Guide",
  },
  docs: {
    type: "page",
    title: "HGC Wiki",
    href: "docs/",
  },
  social: {
    title: "Follow Us",
    type: "menu",
    items: {
      bilibili: {
        title: "Bilibili",
        href: socialLinksConfig.bilibili,
      },
      douyin: {
        title: "Douyin",
        href: socialLinksConfig.douyin,
      },
      rednote: {
        title: "Xiaohongshu",
        href: socialLinksConfig.rednote,
      },
      wechat: {
        title: "WeChat",
        href: socialLinksConfig.wechat,
      },
    },
  },
};
