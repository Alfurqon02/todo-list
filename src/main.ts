import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'lenis/dist/lenis.css'
import './assets/main.css'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')
