import { render, screen } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import Home from "../views/Home.vue";
import { drawDetailsResult } from "./mockApi";

describe("Home", () => {
  it("should display draw details", async () => {
    render(Home);

    const draw = drawDetailsResult.data.draw.draws[0];

    expect(await screen.findByTestId(draw.date)).toBeDefined();
  });
});
