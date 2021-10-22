import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";

// Hack to get WebKit browsers to play nice
new Audio('audio/1-second-of-silence.mp3').play();

createApp(App).use(store).mount("#app");
