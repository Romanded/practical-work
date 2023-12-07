import Home from "@/pages/Home.vue";
import Services from "@/pages/Services.vue";
import { createRouter, createWebHistory } from 'vue-router'
import Work from "@/pages/Work.vue";
import Process from "@/pages/Process";
import About from "@/pages/About.vue";
import Careers from "@/pages/Careers.vue";
import ContactUs from "@/pages/ContactUs.vue";

export const router = createRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/services', component: Services },
        { path: '/work', component: Work },
        { path: '/process', component: Process },
        { path: '/about', component: About },
        { path: '/careers', component: Careers },
        { path: '/contact-us', component: ContactUs },
    ],
    history: createWebHistory()
});