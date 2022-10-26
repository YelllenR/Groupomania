/** Import module of vue router
 * 1. function one: createRouter to navigate from page to page
 * 2. function two: createWebHistory to keep history of page
 */
import { createRouter, createWebHistory } from 'vue-router'


// Importing the Home file to use for the routes
import Home from '../pages/Home.vue'
import Posts from '../pages/Posts.vue'


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

// router.beforeEach((to, from, next) => {

// })
export default router;