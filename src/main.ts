import { createApp } from 'vue'
import './style.css'
import '@fontsource/open-sans'
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/500-italic.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/open-sans/700-italic.css'
import App from './App.vue'
import {createPinia} from "pinia";

const pinia = createPinia()

let app = createApp(App);
app.use(pinia);
app.mount('#app')
