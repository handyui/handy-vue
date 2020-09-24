import { createApp } from 'vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import 'ant-design-vue/style.js'
import App from './App.vue'
import './index.css'
// import antd from 'ant-design-vue'
import 'highlight.js/styles/github-gist.css'
// Vue.use(ElementUI)

import router from './router'
import store from './store'
// createApp(App).mount('#app')

import handyVue from '../src/index'
import '../styles/index'

const app = createApp(App)

app.use(handyVue)

app.use(router).use(store).mount('#app')
