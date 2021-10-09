import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
// Vendors
// import './assets/vendors/jQuery/jquery-3.6.0.min.js'
// import './assets/vendors/dropify/dropify.js'
// import './assets/vendors/dropify/dropify.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// My Asset
import './assets/styles/main.css'
import './assets/js/function.jquery.js'

// import './assets/vendors/box-icons/css/boxicons.min.css'

// const app = createApp(App)
// app.use(VueSweetalert2)
// app.use(router)
// app.mount('#app')
createApp(App)
.use(VueSweetalert2)
.use(router)
.mount('#app')