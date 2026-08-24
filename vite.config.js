import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // GitHub Pages project site: https://<username>.github.io/code-with-faizan/
  // If you rename the repo, update this to match exactly (case-sensitive).
  base: "/code-with-faizan/",
});
