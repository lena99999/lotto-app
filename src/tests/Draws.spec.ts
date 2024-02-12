import { render, screen } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import Draws from "../views/Draws.vue";
import { drawsResult } from "./mockApi";

describe("Draws", () => {
  it("should display list of all draws", async () => {
    render(Draws);

    const draws = drawsResult.data.draw.draws;

    for (const draw of draws) {
      expect(await screen.findByTestId(draw.date)).toBeDefined();
    }
  });
});
