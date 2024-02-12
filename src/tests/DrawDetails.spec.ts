import { render, screen } from "@testing-library/vue";
import { describe, it, expect, vi, Mock } from "vitest";
import { useRoute } from "vue-router";
import DrawDetails from "../views/DrawDetails.vue";

vi.mock("vue-router");

describe("DrawDetails", () => {
  const date = "2024-02-09";
  const mockedUseRoute = useRoute as Mock;
  mockedUseRoute.mockReturnValue({
    params: {
      drawDate: date,
    },
  });

  it("should display draw details from api for this date", async () => {
    render(DrawDetails);
    expect(await screen.findByTestId(date)).toBeDefined();
  });
});
