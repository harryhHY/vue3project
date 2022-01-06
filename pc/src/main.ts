import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入element
import { globalRegister } from './global' //导入

//引入pinia
import { createPinia } from 'pinia';
// App.use(createPinia());



createApp(App).use(store).use(router).use(createPinia()).use(globalRegister).mount('#app')
