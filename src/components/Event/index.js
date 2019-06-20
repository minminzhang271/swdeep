import Event from './events.js';
var EVT = {};
EVT.install = function(Vue, options) {
  if (typeof(Vue.prototype.$EVT) !== 'undefined' ) {
    return
  }
  Vue.prototype.$EVT = new Event()
};
export default EVT;