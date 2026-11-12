import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'lenis/dist/lenis.css'
import './assets/main.css'
import './assets/portfolio.css'
import './assets/flagship.css'
import './assets/particle-journey.css'
import './assets/motion.css'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')
