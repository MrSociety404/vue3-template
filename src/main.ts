import { createApp } from 'vue';
import { I18n } from './middleware/i18n';
import router from './router';
import App from './App.vue';
import './assets/css/index.css';
import './assets/scss/main.scss';

const i18n = I18n.setupI18n();
const app = createApp(App);

app.use(i18n);
app.use(router);
app.mount('#app');
