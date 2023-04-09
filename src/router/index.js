import { createRouter,createWebHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue'

const routes = [
    
    {
        path: '/pageA',
        name: 'pageA',
        component: () => import('@/views/pageA/index.vue')
    },
    {
        path: '/pageB',
        name: 'pageB',
        component: () => import('@/views/pageB/index.vue')
    },
    {
        path: '/pageC',
        name: 'pageC',
        component: () => import('@/views/pageC/index.vue')
    },
    {
        path: '/pageD',
        name: 'pageD',
        component: () => import('@/views/pageD/index.vue')
    }       
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;