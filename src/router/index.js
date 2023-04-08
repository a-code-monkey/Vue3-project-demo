import { createRouter,createWebHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue'

const routes = [
    
    {
        path: '/pageA',
        name: 'pageA',
        component: () => import('@/views/pageA/index.vue')
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;