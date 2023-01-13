import Home from "@/views/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: "/", name: "Home", component: Home },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("@/views/NotFound.vue"),
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
