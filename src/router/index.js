/** Import module of vue router
 * 1. function one: createRouter to navigate from page to page
 * 2. function two: createWebHistory to keep history of page
 */
 import { createRouter, createWebHistory } from 'vue-router'


 // Importing the Home file to use for the routes
 import Home from '../pages/Home.vue'
 
 const router = createRouter({
     history: createWebHistory(),
     routes: [
         {
             path:'/', 
             component: Home
         }, 
         {
             path:'/posts', 
             component: () => import('../pages/Posts.vue')
         }
     ]
 })

 export default router;