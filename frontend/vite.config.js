// vite.config.js
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import jsconfigPaths from "vite-jsconfig-paths";
export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  // Add the "jsx" option to specify JSX syntax
  esbuild: {
    jsx: "react",
  },
});
