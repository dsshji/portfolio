import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  // GitHub Pages serves the site at /portfolio/; dev stays at /
  base: command === 'build' ? '/portfolio/' : '/',
  plugins: [react()],
  resolve: {
    // `@` → /src, mirrors the tsconfig path alias
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}));
