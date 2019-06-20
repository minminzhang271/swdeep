import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// import Toast from "@/components/Toast";
// import Loading from "@/components/Loading";
// import ServiceError from "@/components/ServiceError";


Vue.config.productionTip = false

Vue.prototype.$http = axios;
Vue.config.productionTip = false;


// Vue.use(Toast);
// Vue.use(Loading);
// Vue.use(ServiceError);


router.beforeEach((to, from, next) => {
  /* 路由发生变化时，动态设置页面title */
  if (to.meta.title) {
      document.title = to.meta.title;
  }
  document.querySelector("html").setAttribute("to", to.name);
  next();
});
router.afterEach((to, from) => {
  //new ShareJSSDK().setDefaultPageShare();
});

new Vue({
  router,
  render: h => h(App),
  data: {
      // 空的实例放到根组件下，所有的子组件都能调用
      Bus: new Vue()
  }
}).$mount('#app');
 
