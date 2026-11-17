// Standaard Vite configuratie voor de vp hooks
import { defineConfig } from "vite";

export default defineConfig({
  staged: {
    "*": "npx tsc --noEmit",
  },
});
