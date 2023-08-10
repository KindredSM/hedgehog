import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router/routes";
import { createPinia } from "pinia";

const pinia = createPinia();

createApp(App).use(pinia).use(router).use(VueAxios, axios).mount("#app");
