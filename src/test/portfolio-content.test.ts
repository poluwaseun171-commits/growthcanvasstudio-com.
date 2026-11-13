import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";
import { projects, projectCategories } from "@/content/projects";
import { routeTree } from "@/routeTree.gen";

describe("Portfolio content", () => {
  it("lists all six supplied projects, each with an image and detailed write-up", () => {
    expect(projects).toHaveLength(6);
    for (const p of projects) {
      expect(p.image).toMatch(/^\/__l5e\/assets-v1\//);
      expect(p.features.length).toBeGreaterThanOrEqual(5);
    }
  });

  it("has unique project slugs", () => {
    expect(new Set(projects.map((p) => p.slug)).size).toBe(projects.length);
  });

  it("only offers filter tabs for categories that have projects", () => {
    for (const c of projectCategories.slice(1)) {
      expect(projects.some((p) => p.category === c)).toBe(true);
    }
  });

  it("has a testimonials page and a page for every project", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    expect(router.matchRoutes("/testimonials").at(-1)?.routeId).toBe("/testimonials");
    for (const p of projects) {
      expect(router.matchRoutes(`/portfolio/${p.slug}`).at(-1)?.routeId).not.toBe(rootRouteId);
    }
  });
});
