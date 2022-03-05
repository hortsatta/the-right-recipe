import { createApp } from 'vue';
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import VueTippy from 'vue-tippy';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import App from './App.vue';
import router from './router';
import { store } from './store';
import { buttonDirective } from './directives';
import { globalComponents, firebaseConfig } from './includes';

import './assets/css/tailwind.css';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';
import 'tippy.js/dist/tippy.css';
import './assets/css/main.css';

// Initialize Firebase
initializeApp(firebaseConfig);

let app;
const auth = getAuth();
onAuthStateChanged(auth, () => {
  if (app) { return; }
  app = createApp(App)
    .use(store)
    .use(router)
    .use(globalComponents)
    .use(PerfectScrollbar)
    .use(VueTippy)
    .directive('button', buttonDirective)
    .mount('#app');
});
