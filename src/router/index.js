import { createRouter,createWebHistory } from 'vue-router';

/** Burada Routes Eklenecek Viewları Ekliyoruz */
import Home from '@/views/home/Home.vue'

/** Girilen Urllerden Hangi View Görüntüleneceğini Belirliyoruz */
const routes = [
    {
        path: '/',
        component: Home,
        name:'home'
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router