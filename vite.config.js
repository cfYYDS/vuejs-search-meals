import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
 base: '/vuejs-search-meals/',
  plugins: [vue()],
})
