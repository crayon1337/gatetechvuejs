import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/Home";
import Register from "@/components/Auth/Register";
import Login from "@/components/Auth/Login";
import Category from '@/components/Category/Show'
import Post from '@/components/Post/Show.vue'
import Settings from "@/components/Misc/Settings";
import Users from "@/components/Dashboard/Users";
import AdminCategories from '@/components/Dashboard/Categories/Index';
import CreateCategory from '@/components/Dashboard/Categories/Create';
import UpdateCategory from '@/components/Dashboard/Categories/Update';
import AdminPosts from '@/components/Dashboard/Posts/Index';
import NotFound from "@/components/Misc/NotFound";

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
            path: '/category/:id/:slug',
            name: 'category.show',
            component: Category,
        },
        {
            path: '/post/:slug',
            name: 'post.show',
            component: Post,
        },
        {
            path: '/settings',
            name: 'settings',
            component: Settings
        },
        {
            path: '/admin/users',
            name: 'admin.users',
            component: Users
        },
        {
            path: '/admin/categories',
            name: 'admin.categories',
            component: AdminCategories
        },
        {
            path: 'admin/categories/create',
            name: 'admin.categories.create',
            component: CreateCategory,
        },
        {
            path: 'admin/categories/update/:slug',
            name: 'admin.categories.update',
            component: UpdateCategory,
        },
        {
            path: '/admin/posts',
            name: 'admin.posts',
            component: AdminPosts
        },
        {
            path: '*',
            name: '404',
            component: NotFound
        }
    ]
})