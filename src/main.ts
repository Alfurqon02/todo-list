import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'lenis/dist/lenis.css'
import './assets/motion.css'
import './assets/cyber-journey.css'
import './assets/portfolio.css'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')
