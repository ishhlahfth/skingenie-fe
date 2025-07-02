import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line import/extensions
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/custom.scss';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/aos/aos.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './styles/main.css';

const app = createApp(App);
app.use(store).use(router).mount('#app');
