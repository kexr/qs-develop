import Vue from 'vue'
import App from './App.vue'
import router from './router'
import components from './components'
import configComponents from './configComponents'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad, {
  preLoad: 1,
  loading: require('./assets/logo.png'),
  attempt: 2,
})

Vue.config.productionTip = false
Vue.use(components)
Vue.use(configComponents)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
