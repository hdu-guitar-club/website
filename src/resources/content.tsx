import type {
  ILandingPageContent,
  IHeroContent,
  ILogoMarqueeContent,
  IBentoGridContent,
  IPricingContent,
  IFinalCTAContent,
  IFooterContent,
  ISocialLink,
} from "@/types/content.types";

export const socialLinks: ISocialLink[] = [
  {
    id: "bilibili",
    title: "B站",
    href: "https://space.bilibili.com/522982714",
    enabled: true,
  },
  {
    id: "douyin",
    title: "抖音",
    href: "https://www.douyin.com/user/MS4wLjABAAAAGYFt_v-6g1kQGQc3AsNe9E42kXjHrfdPXF2NMUT7BTw",
    enabled: true,
  },
  {
    id: "rednote",
    title: "小红书",
    href: "https://xhslink.com/m/7L70LXU8nxD",
    enabled: true,
  },
  {
    id: "wechat",
    title: "微信公众号",
    href: "https://weixin.qq.com/",
    enabled: true,
  },
];

export const heroContent: IHeroContent = {
  enabled: true,
  badge: {
    status: "active",
    text: "校十佳社团 · 成立于2009年",
  },
  headline: "杭电吉协",
  subheadline:
    "杭电吉协是以乐队为核心、以乐队四大件（吉他、贝斯、键盘、鼓）＋主唱为基础的现场型音乐社团。欢迎各种乐器加入，包容各类音乐曲风，只为热爱音乐的你提供纯粹的交流与创作空间。",
  ctas: [
    { label: "立即加入我们", variant: "primary" },
    { label: "预约排练房", variant: "outline" },
  ],
  socialProof: {
    avatars: ["/images/qi.png", "/images/vessel.png", "/images/joint.png"],
    description: (
      <>
        已有 <span className="text-zinc-300 font-medium">500+</span>{" "}
        音乐爱好者加入，传承杭电摇滚精神，期待你站上GR音乐节的舞台
      </>
    ),
  },
};

export const logoMarqueeContent: ILogoMarqueeContent = {
  enabled: true,
  title: "我们的合作与演出舞台",
  logos: [
    { name: "杭电各学院" },
    { name: "校学生会" },
    { name: "十佳歌手" },
    { name: "MAO Livehouse" },
    { name: "loopy" },
    { name: "大麦66" },
    { name: "西湖音乐节" },
  ],
};

export const bentoGridContent: IBentoGridContent = {
  enabled: true,
  sectionTitle: "在这里，音乐没有门槛",
  sectionDescription: "专业设备、多元乐器、丰富演出，只为热爱音乐的你提供最纯粹的交流与创作空间。",
  cards: [
    {
      id: "practice-room",
      icon: "Music",
      title: "专业排练房",
      description:
        "专属活动室学活南A105，24小时开放不锁门。区域划分清晰：公用琴区、吉他区、贝斯区、键盘及合成器区、架子鼓区、音箱区。另配备箱鼓、各类架子、话筒、凳子等公共物品，成员可将私人乐器放置在排练房内寄存。",
      span: "wide",
      type: "metrics",
      systemStatus: true,
      metrics: [
        { label: "设备可用率", value: "99%" },
        { label: "开放时间", value: "24h" },
        { label: "月排练次数", value: "100+" },
        { label: "成员满意度", value: "98%" },
      ],
    },
    {
      id: "live-music",
      icon: "Guitar",
      title: "现场型音乐社团",
      description:
        "以乐队为核心，以乐队四大件（吉他、贝斯、键盘、鼓）＋主唱为基础。欢迎各种乐器加入，包容各类音乐曲风，与各大高校开展合作，提供跨校舞台表演机会。",
      type: "tags",
      tags: ["摇滚", "流行", "民谣"],
    },
    {
      id: "performance",
      icon: "Mic",
      title: "丰富演出机会",
      description:
        "每年固定举办GR音乐节、跨年音乐节、藤廊音乐会、草坪音乐会，承包各学院迎新晚会、校十佳歌手总决赛伴奏，并与各大高校开展合作舞台。",
      type: "chart",
    },
    {
      id: "join-free",
      icon: "Users",
      title: "零门槛加入",
      description:
        "无面试、氛围纯粹，只要对音乐感兴趣，无论新手还是有经验乐手，均可加入。社费仅50元，一次性缴纳，覆盖4年。",
      type: "highlight",
      highlight: {
        value: "3天",
        label: "内组队成功",
      },
    },
    {
      id: "social-media",
      icon: "Smartphone",
      title: "全平台运营",
      description:
        "全平台官方账号名称均为「杭电吉协」，抖音、B站、微信公众号、小红书同步更新，相关演出、日常内容实时发布，活动现场live超清多角度视频同步上传。",
      type: "tags",
      tags: ["抖音", "B站", "公众号", "小红书"],
    },
  ],
};

export const pricingContent: IPricingContent = {
  enabled: true,
  sectionTitle: "加入杭电吉协",
  sectionDescription:
    "一次缴费，四年受益。所有成员平等享受社团资源，费用全部用于排练房设备维护、演出举办，透明公开。",
  plans: [
    {
      name: "普通成员",
      description: "适合所有热爱音乐的同学",
      price: "50元/4年",
      features: [
        "免费使用学活南A105排练房及公用设备",
        "参与社团日常活动、乐器教学",
        "加入社团专属社群",
        "优先预约排练时段",
        "观看各类演出活动",
      ],
      cta: "缴纳社费加入",
      highlighted: false,
    },
    {
      name: "核心成员/乐队成员",
      description: "深度参与社团核心活动",
      price: "无额外费用",
      features: [
        "包含在50元社费内",
        "优先参与各类演出、GR摇滚节等核心活动",
        "享受专业音乐指导与设备优先使用权",
        "支持原创作品创作与展示",
        "拥有专属排练时段",
        "可代表吉协参与外校交流演出",
      ],
      cta: "申请成为核心成员",
      highlighted: true,
      badge: "推荐",
    },
    {
      name: "合作/赞助方",
      description: "与杭电吉协携手共创",
      price: "联系我们详谈",
      features: [
        "冠名社团演出与活动（如GR摇滚节）",
        "获得品牌露出与宣传机会",
        "定制音乐合作项目",
        "参与社团专属活动策划",
        "对接吉协优秀乐队资源",
      ],
      cta: "联系合作",
      highlighted: false,
    },
  ],
};

export const finalCTAContent: IFinalCTAContent = {
  enabled: true,
  headline: "准备好加入我们，一起玩音乐了吗？",
  description:
    "加入杭电吉协，在学活南A105的专业排练房里，和志同道合的伙伴一起组乐队、练乐器、办演出，释放你的音乐热爱；这里有理工男的浪漫与热血，有小众音乐的坚守与绽放，每一份热爱都能被看见、被听见。",
  ctas: [
    { label: "立即加入", variant: "primary" },
    { label: "咨询排练/演出", variant: "outline" },
  ],
  note: "社费50元覆盖4年，无任何额外费用，所有成员平等享受社团资源，费用全部用于排练房设备维护、演出举办，透明公开。",
};

export const footerContent: IFooterContent = {
  enabled: true,
  brand: {
    name: "杭电吉协",
    description:
      "杭电吉协——杭州电子科技大学音乐爱好者的纯粹俱乐部，无面试、无官僚，以音乐为纽带，汇聚每一份热爱，传承摇滚精神，打造高校优质音乐社群。",
    statusText: "排练房开放中",
  },
  linkGroups: [
    {
      title: "社团活动",
      links: ["GR摇滚节", "日常排练", "乐器教学", "演出合作", "草坪音乐派对"],
    },
    {
      title: "资源中心",
      links: ["排练房预约", "乐器教学资料", "乐队组队平台", "演出视频回顾"],
    },
    {
      title: "关于我们",
      links: ["社团历史", "核心成员", "加入我们", "联系我们"],
    },
    {
      title: "合规与支持",
      links: ["社费使用说明", "排练房设备使用规范", "隐私政策", "版权声明"],
    },
  ],
  copyright: "杭电吉协 HDU Guitar Club. All rights reserved.",
};

export const landingPageContent: ILandingPageContent = {
  hero: heroContent,
  logoMarquee: logoMarqueeContent,
  bentoGrid: bentoGridContent,
  pricing: pricingContent,
  finalCTA: finalCTAContent,
  footer: footerContent,
};
