import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);


const IndexPage = () =>
    import( /* webpackChunkName: "index_page" */ './views/Index.vue');

const TestPage = () =>
    import( /* webpackChunkName: "test_page" */ './views/Test.vue');
const ArrayPage = () =>
    import( /* webpackChunkName: "array_page" */ './views/Array/Index.vue');
const ClassPage = () =>
    import( /* webpackChunkName: "class_page" */ './views/Class/Index.vue');
const AysncPage = () =>
    import( /* webpackChunkName: "aysnc_page" */ './views/Aysnc/Index.vue');
const ListPage = () =>
    import( /* webpackChunkName: "list_page" */ './views/List/Index.vue');

const PrinciplePage = () =>
    import( /* webpackChunkName: "principle_page" */ './views/Principle/Index.vue');



export default new Router({
    mode: "history",
    base: "/m/swdeep",
    // fallback: false,
    routes: [
        {
            path: "/",
            redirect: { name: "IndexPage" }
        },
        {
            path: "/index",
            name: "IndexPage",
            meta: {
                title: "首页 "
            },
            component: IndexPage
        },
        {
            path: "/test",
            name: "TestPage",
            meta: {
                title: "test "
            },
            component: TestPage
        },
       /**
        * array
        */
        {
            path: "/array",
            name: "ArrayPage",
            meta: {
                title: "array"
            },
            component: ArrayPage
        },

        /** 
         * Class
        */
        {
            path: "/class",
            name: "ClassPage",
            mate: {
                title: "class"
            },
            component: ClassPage,
        },
        /** 
         * Aysnc
        */

        {
            path: "/aysnc",
            name: "AysncPage",
            meta: {
                title: "aysnc"
            },
            component: AysncPage,
        },



        /**
         *  list
         *  
         */
        {
            path: "/list",
            name: "ListPage",
            meta: {
                title: "list"
            },
            component: ListPage,

        },
        {
            path: "/list/lifecycle",
            name: "LifecyclePage",
            meta: {
                title: "lifecycle"
            },
            component: () => import( /* webpackChunkName: "Lifecycle_page" */ './views/List/Lifecycle.vue'),
        },
        /**
         * PrinciplePage
         *  */
        {
            path: "/principle",
            name: "PrinciplePage",
            meta: {
                title: "principle"
            },
            component: PrinciplePage,
        },
        {
            path: "/principle/event",
            name: "EventPage",
            meta: {
                title: "event"
            },
            component: () => import( /* webpackChunkName: "event_page" */ './views/Principle/Event.vue')


        },
        {
            path: "/principle/pubsub",
            name: "PubsubPage",
            meta: {
                title: "pubsub"
            },
            component: () => import( /* webpackChunkName: "event_page" */ './views/Principle/Pubsub.vue')


        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }

});
