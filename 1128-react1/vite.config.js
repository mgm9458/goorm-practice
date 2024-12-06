import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/goorm-practice/1128-react1/",
  build: {
    outDir: "../dist/1128-react1", // 상위 디렉토리의 dist/1128-react1에 빌드
    emptyOutDir: false,
  },
});
// 규칙을 정해주는?
