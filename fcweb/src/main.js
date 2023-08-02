import './style/global.css'
import './style/common.scss'

import { createApp } from 'vue'
import { Icon } from 'vant'

import App from './App.vue'
import router from './router'
import rtComponents from './components/index'

const app = createApp(App)

app.use(router)
app.use(Icon)
app.use(rtComponents)

app.mount('#app')
