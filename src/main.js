import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import ElementUI from "element-ui";
import vuetify   from './plugins/vuetify'
// import store     from './plugins/store'
import Print from 'vue-print-nb' 
// import vdnd from 'vue-smooth-dnd'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import PrettyCheckbox from 'pretty-checkbox-vue';
Vue.use(PrettyCheckbox);

// import JsonCSV from 'vue-json-csv'
// Vue.use(JsonCSV) 

import JsonCSV from 'vue-json-csv'
Vue.use(JsonCSV) 

import axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios, axios)

// import vuedraggable from 'vuedraggable'
Vue.use(Print); //註冊 
// Vue.use(vdnd); //註冊 
// Vue.use(vuedraggable); //註冊 
Vue.config.productionTip = false  

// import Cookies from 'js-cookie';
// Vue.use(Cookies); 



new Vue({
  // store,
  axios,
  router,
  JsonCSV,
  // draggable,
  vuetify, 
  print,
  render: h => h(App)
}).$mount('#app')