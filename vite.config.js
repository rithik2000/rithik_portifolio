import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'redirect-absolute-index-path',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const decodedUrl = decodeURIComponent(req.url || '');

          if (decodedUrl.endsWith(`${process.cwd()}/index.html`)) {
            res.statusCode = 302;
            res.setHeader('Location', '/');
            res.end();
            return;
          }

          next();
        });
      },
    },
  ],
  server: {
    fs: {
      strict: false,
      allow: [process.cwd()],
    },
  },
});
