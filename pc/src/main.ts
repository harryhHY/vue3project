import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入element
import { globalRegister } from './global' //导入



createApp(App).use(store).use(router).use(globalRegister).mount('#app')
