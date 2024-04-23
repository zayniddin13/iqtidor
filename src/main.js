import "./assets/main.css";

import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./router";
import i18n from "./locales/i18n";
import VueScrollTo from "vue-scrollto";

const app = createApp(App);

app.use(VueScrollTo);
app.use(router);
app.use(i18n);

app.mount("#app");
