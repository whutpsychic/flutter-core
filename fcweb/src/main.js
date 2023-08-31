import './style/global.css'
import './style/common.scss'

import { createApp } from 'vue'
import { Icon } from 'vant'

import App from './App.vue'
import router from './router'
import rtComponents from './components/index'


import 'highlight.js/styles/stackoverflow-light.css'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);

const app = createApp(App)

app.use(router)
app.use(Icon)
app.use(rtComponents)
app.use(hljsVuePlugin)

app.mount('#app')
