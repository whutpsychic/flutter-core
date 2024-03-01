import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import dts from 'vite-plugin-dts';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  // 解除注释以打包lib包，注释打包网站
  // build: {
  //   lib: {
  //     entry: './lib/index.ts',
  //     formats: ['es', 'umd'],
  //     name: `Index`,
  //     fileName: 'index',
  //   },
  //   outDir: "es"
  // },
  // plugins: [vue(), vueJsx(), dts()],
  plugins: [
    vue(), vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  base: "./",
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '$': fileURLToPath(new URL('./lib', import.meta.url)),
    }
  },
  server: {
    host: '0.0.0.0',
    port: 8082,
    open: true
  }
})
