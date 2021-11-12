import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import env from "./static/env.js"

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.config.globalProperties.$env = env
app.mount("#app")
