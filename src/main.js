// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'normalize.css'
import './static/less/iconfont.less'
import './static/less/border-1px.less'
import {router} from './router'
import plugin from './plugin'
import vuex from './vuex'
import './service/mock'
import components from './components'

Vue.use(plugin)
Vue.use(vuex)
Vue.use(components)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
})