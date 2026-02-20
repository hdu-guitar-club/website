import { socialLinks } from "@/resources/content";

const socialMenuItems = socialLinks
  .filter((link) => link.enabled)
  .reduce(
    (acc, link) => {
      acc[link.id] = {
        title: link.title,
        href: link.href,
      };
      return acc;
    },
    {} as Record<string, { title: string; href: string }>,
  );

export default {
  index: {
    display: "hidden",
  },
  docs: {
    type: "page",
    title: "吉协百科",
  },
  social: {
    title: "关注我们",
    type: "menu",
    items: socialMenuItems,
  },
};
