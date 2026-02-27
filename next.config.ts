import nextra from "nextra";
import bundleAnalyzer from "@next/bundle-analyzer";

const withNextra = nextra({
  latex: true,
  search: { codeblocks: false },
  contentDirBasePath: "/docs",
});

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = withBundleAnalyzer(
  withNextra({
    reactStrictMode: true,
    i18n: {
      locales: ["zh", "en"],
      defaultLocale: "zh",
    },
  }),
);

export default nextConfig;
