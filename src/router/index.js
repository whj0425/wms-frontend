import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import Inventory from '@/views/Inventory.vue'
import Orders from '@/views/Orders.vue'
import Login from '@/views/Login.vue'
import MainLayout from "@/components/MainLayout.vue";

const routes = [
    {
        path: '/',
        redirect: '/login' // Redirect root to /login
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/app',
        component: MainLayout,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: Dashboard
            },
            {
                path: 'inventory',
                name: 'Inventory',
                component: Inventory
            },
            {
                path: 'orders',
                name: 'Orders',
                component: Orders
            }
        ]
    }


];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    // Check if the route requires authentication
    if (to.meta.requiresAuth && !localStorage.getItem('isAuthenticated')) {
        next({name: 'Login'});
    } else {
        next();
    }
});
export default router;





