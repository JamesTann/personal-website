import Home from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', name: 'Home', component: Home },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/NotFoundView.vue'),
    },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})
