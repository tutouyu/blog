import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/icon/iconfont.css'
import { Button, Pagination, Input, Drawer, Menu, Upload, Table, Dialog, Row, Col } from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import VueQuillEditor from 'vue-quill-editor'
import xss from 'xss'
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme
import VueCookies from 'vue-cookies'
import VueLazyload from 'vue-lazyload'
import VueVirtualScroller from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

Vue.use(VueVirtualScroller)
Vue.use(VueLazyload)
Vue.use(Pagination);
Vue.use(Button);
Vue.use(Input);
Vue.use(Drawer);
Vue.use(Menu);
Vue.use(Upload);
Vue.use(Table);
Vue.use(Dialog);
Vue.use(Row);
Vue.use(Col);
// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '@/assets/img/lazy/error.jpeg',
  loading: '@/assets/img/lazy/loading.gif',
  attempt: 1
})
Vue.use(VueCookies)

// xss
Object.defineProperty(Vue.prototype, '$xss', {
  value: xss
})
Vue.use(VueQuillEditor, /* { default global options } */)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
if (top.location.hostname !== top.location.hostname) {
  alert("您正在访问不安全的页面，即将跳转到安全页面！");
  top.location.href = self.location.href;
}