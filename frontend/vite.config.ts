import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 5137,
  },
  build: {
    outDir: 'dist',
    minify: 'terser',
    terserOptions: {
      format: {
        comments: false,
      },
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
  },
});
