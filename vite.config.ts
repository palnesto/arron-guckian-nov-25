import path from "path";
import react from "@vitejs/plugin-react";
import { ConfigEnv, defineConfig, loadEnv } from "vite";
import Pages from "vite-plugin-pages";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig(({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  return {
    plugins: [
      react(),
      Pages(),
      ViteImageOptimizer({
        png: {
          quality: 80,
        },
        jpg: {
          quality: 80,
        },
        jpeg: {
          quality: 80,
        },
        gif: {},
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: "dist", // or set to "/app/dist"
    },
    server:
      env.VITE_MODE === "development" || env.VITE_MODE === "local"
        ? {
            proxy: {
              "/api": env.VITE_BACKEND_URL,
            },
            port: 5173,
          }
        : undefined,
  };
});
