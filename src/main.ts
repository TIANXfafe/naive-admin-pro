import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import router from '@/router'

const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.body.appendChild(meta)

const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
