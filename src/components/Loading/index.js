import LoadingVue from './Loading.vue';
const Loading = {};
Loading.install = function(Vue, options) {
  console.log(options);
  let len = document.getElementsByClassName('jrm-loading-box').length;
  if (len) {
    return;
  }
  let loadingTpl = Vue.extend(LoadingVue);
  let $vm = new loadingTpl();
  let tpl = $vm.$mount().$el;
  document.body.appendChild(tpl);
  Vue.prototype.$loading = {
    show() {
      $vm.showLoading = true;
    },
    hide() {
      $vm.showLoading = false;
    }
  };
};
export default Loading;
