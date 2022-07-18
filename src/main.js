import { createApp } from 'vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'

library.add(fas);

createApp(App)
    .use(router,Vuelidate)
    .component('fa',FontAwesomeIcon)
    .mount('#app')
