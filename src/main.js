import { createApp } from 'vue'
import App from './App.vue'
// createApp(App).mount('#app')
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './page/home.vue';
import RestaurantPage from './page/Restaurant.vue';


const routes = [
    { path: '/', component: Home },
    { name: 'Restaurant', path: '/restaurant/:name', component: RestaurantPage },
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const VueApp = createApp(App);

VueApp.use(router)


VueApp.mount('#app')
