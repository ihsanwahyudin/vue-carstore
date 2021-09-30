import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// import './assets/vendors/box-icons/css/boxicons.min.css'

// const app = createApp(App)
// app.use(VueSweetalert2)
// app.use(router)
// app.mount('#app')
createApp(App).use(VueSweetalert2).use(router).mount('#app')