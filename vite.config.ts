import { defineConfig, type UserConfig } from "vite";
import dts from "vite-plugin-dts";
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'ethiopian-datepicker-shadcn': fileURLToPath(new URL('./dist', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "EthiopianDatePicker",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom", "lucide-react", "kenat"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "lucide-react": "LucideReact",
          kenat: "Kenat"
        },
        exports: 'named'
      }
    }
  },
  plugins: [dts()]
});
