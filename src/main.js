import { createApp } from 'vue'

import './scss/style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

import router from './router'

// Creation of Pinia to be used by the APP.
const pinia = createPinia();

// Creating the App imported, using router to navigate and mount
createApp(App)
    .use(router)
    .use(pinia)

    .mount('#app')

