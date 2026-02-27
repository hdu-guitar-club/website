import { socialLinksConfig } from "../_social-links";

export default {
  index: {
    title: "首页",
  },
  about: {
    title: "关于我们",
  },
  activities: {
    title: "活动一览",
  },
  guide: {
    title: "新生指南",
  },
  docs: {
    type: "page",
    title: "吉协百科",
    href: "docs/",
  },
  social: {
    title: "关注我们",
    type: "menu",
    items: {
      bilibili: {
        title: "B站",
        href: socialLinksConfig.bilibili,
      },
      douyin: {
        title: "抖音",
        href: socialLinksConfig.douyin,
      },
      rednote: {
        title: "小红书",
        href: socialLinksConfig.rednote,
      },
      wechat: {
        title: "微信公众号",
        href: socialLinksConfig.wechat,
      },
    },
  },
};
