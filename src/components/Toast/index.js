import ToastVue from './Toast.vue';
var Toast = {};
Toast.install = function(Vue, options) {
  console.log(options);
  let len = document.getElementsByClassName('toast-alert').length;
  if (len) {
    return;
  }
  let toastTpl = Vue.extend(ToastVue);
  let $vm = new toastTpl();
  let tpl = $vm.$mount().$el;
  document.body.appendChild(tpl);
  Vue.prototype.$toast = {
    show(options) {
      if (typeof options === 'string') {
        $vm.text = options;
      } else if (typeof options === 'object') {
        Object.assign($vm, options);
      }
      $vm.show = true;
    },
    hide() {
      $vm.show = false;
    }
  };
};
export default Toast;
