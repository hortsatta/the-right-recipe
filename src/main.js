import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';
import { buttonDirective } from './directives';
import { globalComponents } from './includes';

import './assets/css/tailwind.css';
import './assets/css/main.css';

createApp(App)
  .use(store)
  .use(router)
  .use(globalComponents)
  .directive('button', buttonDirective)
  .mount('#app');
