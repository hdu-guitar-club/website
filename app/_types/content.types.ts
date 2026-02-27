import { ReactNode } from "react";

export interface INavItem {
  label: string;
  href: string;
}

export interface IButtonConfig {
  label: string;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
}

export interface IAvatar {
  id: number;
  name: string;
  designation: string;
  image: string;
}

export interface IBadge {
  status: "active" | "inactive";
  text: string;
}

export interface IHeroContent {
  enabled: boolean;
  badge: IBadge;
  headline: string;
  subheadlinePrimary: string;
  ctas: IButtonConfig[];
  socialProof: {
    avatars: string[];
    description: ReactNode;
  };
}

export interface ILogoMarqueeContent {
  enabled: boolean;
  title: string;
  logos: Array<{
    name: string;
  }>;
}

export interface IBentoCardBase {
  id: string;
  icon: string;
  title: string;
  description: string;
  span?: "default" | "wide";
}

export interface IBentoCardWithMetrics extends IBentoCardBase {
  type: "metrics";
  metrics: Array<{
    label: string;
    value: string;
  }>;
  systemStatus?: boolean;
}

export interface IBentoCardWithTags extends IBentoCardBase {
  type: "tags";
  tags: string[];
}

export interface IBentoCardWithChart extends IBentoCardBase {
  type: "chart";
}

export interface IBentoCardWithHighlight extends IBentoCardBase {
  type: "highlight";
  highlight: {
    value: string;
    label: string;
  };
}

export type TBentoCard =
  | IBentoCardWithMetrics
  | IBentoCardWithTags
  | IBentoCardWithChart
  | IBentoCardWithHighlight;

export interface IBentoGridContent {
  enabled: boolean;
  sectionTitle: string;
  sectionDescription: string;
  cards: TBentoCard[];
}

export interface IPricingPlan {
  name: string;
  description: string;
  price: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge?: string;
}

export interface IPricingContent {
  enabled: boolean;
  sectionTitle: string;
  sectionDescription: string;
  plans: IPricingPlan[];
}

export interface IFinalCTAContent {
  enabled: boolean;
  headline: string;
  description: string;
  ctas: IButtonConfig[];
  note: string;
}

export interface ISocialLink {
  id: string;
  title: string;
  href: string;
  enabled: boolean;
}

export interface IFooterLinkGroup {
  title: string;
  links: string[];
}

export interface IFooterContent {
  enabled: boolean;
  brand: {
    name: string;
    description: string;
    statusText: string;
  };
  linkGroups: IFooterLinkGroup[];
  copyright: string;
}

export interface ILandingPageContent {
  hero: IHeroContent;
  logoMarquee: ILogoMarqueeContent;
  bentoGrid: IBentoGridContent;
  pricing: IPricingContent;
  finalCTA: IFinalCTAContent;
  footer: IFooterContent;
}
