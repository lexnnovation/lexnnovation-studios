import { site } from "@/lib/site";

export default function sitemap() {
  const routes = ["", "/contact", "/privacy", "/terms", "/data-deletion"];
  const now = new Date();
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
