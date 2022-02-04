import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/Home";
import Register from "@/components/Auth/Register";
import Login from "@/components/Auth/Login";
import Category from '@/components/Category/Show.vue'
import Post from '@/components/Post/Show.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/category/:slug',
            name: 'category.show',
            component: Category,
        },
        {
            path: '/post/:slug',
            name: 'post.show',
            component: Post,
        }
    ]
})