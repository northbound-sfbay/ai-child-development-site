import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

const isGithubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  ...(isGithubPages
    ? {
        site: "https://northbound-sfbay.github.io",
        base: "/ai-child-development-site"
      }
    : {}),
  integrations: [mdx()]
});
