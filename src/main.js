import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "./router";
import store from './store';
// import * as VueRouter from 'vue-router'
import './style.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(store)
// app.use(VueRouter)

app.mount('#app')