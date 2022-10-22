import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import { env } from 'process'


// https://vitejs.dev/config/
export default defineConfig({

  loadEnv: env,

  plugins: [
    vue(),
    Inspect(),
  ],
  build: {
    manifest: true,
  },
  rollupOptions: {
    input: '/path/to/main.js'
  },

})
