import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/goorm-practice/1129-counter/",
  build: {
    outDir: "../dist/1129-counter", // 상위 디렉토리의 dist/1129-counter에 빌드
    emptyOutDir: false,
  },
});
