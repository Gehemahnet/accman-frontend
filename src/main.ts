import { createApp } from 'vue'
import App from './app.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

const app = createApp(App);

app
    .use(PrimeVue, {
        theme: {
            preset: Aura,
            options: {

            }
        }
})
    .mount('#app')