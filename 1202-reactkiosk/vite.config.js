import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/goorm-practice/1202-reactkiosk/",
  build: {
    outDir: "../dist/1202-reactkiosk", // 상위 디렉토리의 dist/1202-reactkiosk에 빌드
    emptyOutDir: false,
  },
});
