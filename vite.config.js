// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import vite from "vite-plugin-next-refresh";
// https://vite.dev/config/
// export default defineConfig({
//     plugins: [react(), tailwindcss(), vite()],
// });


// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), tailwindcss(), vite()],
  server: {
    port: 3000,               // your frontend port
    proxy: {
      // Proxy all /api/* requests to http://localhost:3099
      '/api': {
        target: 'http://localhost:3099',
        changeOrigin: true,
      },
    },
  },
});
