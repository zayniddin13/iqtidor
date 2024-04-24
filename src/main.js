import "./assets/main.css";

import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./router";
import i18n from "./locales/i18n";
import VueScrollTo from "vue-scrollto";
import { MaskInput } from "vue-3-mask";
import Vue3Marquee from "vue3-marquee";
const app = createApp(App);
app.use(Vue3Marquee);
app.use(VueScrollTo);
app.use(router);
app.use(i18n);
app.component("MaskInput", MaskInput);
app.mount("#app");
