import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "/Base",
        component: () =>
            import("../views/Base.vue"),
    },
    {
        path: "/Margin0Auto",
        component: () =>
            import("../views/Margin0Auto.vue"),
    },
    {
        path: "/Flex",
        component: () =>
            import("../views/Flex.vue"),
    },
    {
        path: "/TextAlignCenter",
        component: () =>
            import("../views/TextAlignCenter.vue"),
    },
    {
        path: "/PositionAbsolute",
        component: () =>
            import("../views/PositionAbsolute.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
