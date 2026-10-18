import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // `@` → /src, mirrors the tsconfig path alias
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
