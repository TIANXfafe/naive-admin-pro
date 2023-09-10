import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'

const baseSrc = fileURLToPath(new URL('./src', import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ReactivityTransform(),
    vue({
      reactivityTransform: true,
    }),
    AutoImport({
      imports: [
        'vue',
        'vue/macros',
        'vue-router',
        'vue-i18n',
        '@vueuse/core',
        'pinia',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar',
          ],
        },
      ],
      dts: 'types/auto-imports.d.ts',
      dirs: [
        'src/stores',
        'src/composables',
      ],
    }),
    Components({
      resolvers: [NaiveUiResolver()],
      dts: 'types/components.d.ts',
      dirs: [
        'src/components',
      ],
    }),
    Unocss(),
  ],
  resolve: {
    alias: {
      '@': baseSrc,
    },
  },
})
