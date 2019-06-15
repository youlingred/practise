import Vue from "vue";
import App from "./App.vue";
import router from './router'
Vue.use(router)
new Vue({
//   template: "<div>{{ hi }}</div>",
//   data() {
//     return {
//       hi: "hello"
//     };
//   },
//   template: "<App/>",
//   components: { App },
router,
  render: (h)=>h('div',['index',h(App)])
}).$mount("#app");
