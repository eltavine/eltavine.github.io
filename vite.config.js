import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import Icons from 'unplugin-icons/vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? ""
const defaultBase =
  process.env.GITHUB_ACTIONS === "true" && repositoryName && !repositoryName.endsWith(".github.io")
    ? `/${repositoryName}/`
    : "/"

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_SITE_BASE ?? defaultBase,
  plugins: [
    tailwindcss(),
    Icons({
      compiler: 'vue3',
    }),
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
