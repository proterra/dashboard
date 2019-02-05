// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import CarbonComponentsVue from '@carbon/vue/src/index'

// Require the main Sass manifest file
require('./assets/sass/main.scss')
Vue.use(CarbonComponentsVue)
Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
