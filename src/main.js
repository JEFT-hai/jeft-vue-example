/*
 * @Author: your name
 * @Date: 2022-02-18 19:52:32
 * @LastEditTime: 2022-02-19 18:47:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \jeft-vue-demo\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import jVue from 'jeft-vue';

Vue.use(jVue);

Vue.config.productionTip = false

import './assets/style/normalize.css';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
