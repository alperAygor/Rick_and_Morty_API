import { createApp,provide } from 'vue'
import App from './App.vue'
import {store} from "./store/index"
import "./assets/style.css"
import {router} from './router'
const app = createApp(App);
app.use(router);
app.use(store)
app.mount('#app');
