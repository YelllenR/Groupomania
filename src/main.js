import { createApp } from 'vue'
// import 'vue-moment'
import './scss/style.css'
import App from './App.vue'

// importing router from the router file
import router from './router'

import { createPinia } from 'pinia'

const pinia = createPinia();


// Creating the App imported, using router to navigate and mount
createApp(App)
    .use(router)
    .use(pinia)
    // .use(('vue-moment'))
    .mount('#app')


