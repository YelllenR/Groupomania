import { createApp, markRaw } from 'vue'
import './scss/style.css'
import App from './App.vue'

// importing router from the router file
import router from './router'

import { createPinia } from 'pinia'

const pinia = createPinia();

pinia.use(({ store }) => {
    store.$router = markRaw(router)
});

// Creating the App imported, using router to navigate and mount
createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')


