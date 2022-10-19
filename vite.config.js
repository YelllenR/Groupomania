import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'

// import { fileURLToPath } from 'url'
// import { createServer } from 'vite'

// const __dirname = fileURLToPath(new URL('.', import.meta.url))

// ;(async () => {
//   const server = await createServer({
//     // any valid user config options, plus `mode` and `configFile`
//     configFile: false,
//     root: __dirname,
//     server: {
//       port: 1337
//     }
//   })
//   await server.listen()

//   server.printUrls()
// })()

// https://vitejs.dev/config/
export default defineConfig({
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
