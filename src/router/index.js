/** Import module of vue router
 * 1. function one: createRouter to navigate from page to page
 * 2. function two: createWebHistory to keep history of page
 */
import { createRouter, createWebHistory } from 'vue-router'


// importing router from the router file
import Home from '../pages/Home.vue'
import Posts from '../pages/Posts.vue'
import LoginForm from '../components/LoginForm.vue'
import SignupForm from '../components/SignupForm.vue'





const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,

    },
    {
        name: 'Posts',
        path: '/posts',
        component: Posts,

    },
    {
        name: "Login",
        path: '/Login',
        component: LoginForm,

    },
    {
        name: 'SignupForm',
        path: '/Signup',
        component: SignupForm,

    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})




export default router;