import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import router from '@/router'
import '@/assets/styles/index.css'
import i18n from '@/locales'
import '@/router/routerGuard'

const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.body.appendChild(meta)

const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(i18n)
app.mount('#app')
