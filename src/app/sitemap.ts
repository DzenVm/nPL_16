import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/graj", "/polityka-prywatnosci", "/regulamin", "/cookies", "/kontakt"];
  const now = new Date();

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "daily" : "monthly",
    priority: route === "" ? 1 : route === "/graj" ? 0.9 : 0.4,
  }));
}
