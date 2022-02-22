import { createApp } from 'vue';
import PerfectScrollbar from 'vue3-perfect-scrollbar';

import App from './App.vue';
import router from './router';
import store from './store';
import { buttonDirective } from './directives';
import { globalComponents } from './includes';

import './assets/css/tailwind.css';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';
import './assets/css/main.css';

createApp(App)
  .use(store)
  .use(router)
  .use(globalComponents)
  .use(PerfectScrollbar)
  .directive('button', buttonDirective)
  .mount('#app');
