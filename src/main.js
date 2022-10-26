import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import './scss/style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

// importing router from the router file
import Home from './pages/Home.vue'
import Posts from './pages/Posts.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'Home',
            path: '/',
            component: Home
        },
        {
            name: 'Posts',
            path: '/posts',
            component: Posts
        }
    ]
})



const pinia = createPinia();

// Creating the App imported, using router to navigate and mount
createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')


