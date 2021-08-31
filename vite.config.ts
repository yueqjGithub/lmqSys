import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import legacy from '@vitejs/plugin-legacy'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3004',
        changeOrigin: true
      }
    }
  },
  plugins: [
    reactRefresh(),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ]
})
