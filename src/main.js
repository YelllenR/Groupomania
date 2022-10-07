import { createApp } from 'vue'
import './style.css'

// import './scss/style.css'
import App from './App.vue'

// importing router from the router file
import router from './router'


// Creating the App imported, using router to navigate and mount
createApp(App).use(router).mount('#app');
