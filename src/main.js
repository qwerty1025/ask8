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

import VueRadioButton from "vue-radio-button";
Vue.use(VueRadioButton);

// import JsonCSV from 'vue-json-csv'
// Vue.use(JsonCSV) 

import JsonCSV from 'vue-json-csv';
Vue.use(JsonCSV) ;

import CheckboxRadio from 'vue-checkbox-radio'; 
Vue.use(CheckboxRadio);

import dayjs from 'dayjs';
Vue.prototype.dayjs = dayjs; 

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

// https://www.npmjs.com/package/vue-sweetalert2
// main.js 
// import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
// import 'sweetalert2/dist/sweetalert2.min.css';

// Vue.use(VueSweetalert2);



import Swal from 'sweetalert2';
window.Swal = Swal; 

new Vue({
  // store, 
  axios,
  router,
  JsonCSV,
  // draggable,
  vuetify, 
  print,
  VueRadioButton,
  render: h => h(App)
}).$mount('#app')