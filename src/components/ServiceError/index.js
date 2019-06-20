import ServiceError from './ServiceError.vue';
const serviceError = {};
serviceError.install = function(Vue, options) {
  console.log(options);
  let len = document.getElementsByClassName('error-loading').length;
  if (len) {
    return;
  }
  let errorTpl = Vue.extend(ServiceError);
  let $vm = new errorTpl();
  let tpl = $vm.$mount().$el;
  document.body.appendChild(tpl);
  Vue.prototype.$error = {
    show() {
      $vm.errorLoading = true;
    },
    hide() {
      $vm.errorLoading = false;
    }
  };
};
export default serviceError;
