import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    setupFiles: "src/setupTests.ts",
    environment: "jsdom",
    includeSource: ["src/**/*.{js,ts,vue}"],
    server: {
      deps: {
        inline: ["vuetify"],
      },
    },
  },
});
