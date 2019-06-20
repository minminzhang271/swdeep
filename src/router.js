import Vue from "vue";
import Router from "vue-router";

//首页
const IndexPage = () =>
    import ( /* webpackChunkName: "index_page" */ './views/Index.vue');
 
//test
const TestPage = () =>
    import ( /* webpackChunkName: "test_page" */ './views/Test.vue');
Vue.use(Router);

export default new Router({
    mode: "history",
    base: '/m',
    // fallback: false,
    routes: [
        {
            path: "/",
            redirect: { name: "IndexPage" }
        },
        {
            path: "/index.html",
            name: "IndexPage",
            meta: {
                title: "首页 "
            },
            component: IndexPage
        },
        {
            path: "/test.html",
            name: "TestPage",
            meta: {
                title: "test "
            },
            component: TestPage
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }

});
