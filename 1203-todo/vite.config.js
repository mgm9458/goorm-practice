import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/goorm-practice/",
});
// 배포할 github pages 리포지토리 이름으로 변경, base값은 항상 슬래시로 시작하고 종료해야함