import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/TEAMSTAR/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
