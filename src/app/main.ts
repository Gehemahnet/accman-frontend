import { createApp } from "vue"
import App from "./app.vue"
import PrimeVue from "primevue/config"
import Aura from "@primevue/themes/aura"
import router from "./router"

const app = createApp(App)

app
  .use(router)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {

      },
    },
  })
  .mount("#app")
