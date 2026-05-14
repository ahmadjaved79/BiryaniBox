import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // React core — must ALL be together to avoid createContext undefined error
          if (
            id.includes('node_modules/react/') ||
            id.includes('node_modules/react-dom/') ||
            id.includes('node_modules/react-router') ||
            id.includes('node_modules/scheduler/')
          ) {
            return 'vendor-react';
          }

          // Heavy UI libraries in their own chunk
          if (
            id.includes('node_modules/framer-motion') ||
            id.includes('node_modules/lucide-react')
          ) {
            return 'vendor-ui';
          }

          // All other node_modules
          if (id.includes('node_modules/')) {
            return 'vendor';
          }

          // App-level code splitting
          if (id.includes('src/pages/Dashboard')) return 'dashboard';
          if (id.includes('src/components/POS'))  return 'pos';
          if (id.includes('src/pages/Home'))       return 'home';
          if (
            id.includes('src/pages/Login') ||
            id.includes('src/pages/CustomerAuth')
          ) return 'auth';
        }
      }
    },
    chunkSizeWarningLimit: 700,
  }
});