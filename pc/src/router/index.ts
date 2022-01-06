import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import( '../views/Home.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/user',
    name: 'User',
    component: () => import( '../views/About.vue'),
    meta: {
      title: '个人中心'
    }
  },
  {
    path: '/cookie',
    name: 'Cookie',
    component: () => import( '../views/cookie/cookie.vue'),
    meta: {
      title: '厨艺爱好'
    }
  },
  {
    path: '/cookiedetail',
    name: 'Cookiedetail',
    component: () => import( '../views/cookie/detail.vue'),
    meta: {
      title: '详细做法'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  if (typeof(to.meta.title) === "string" ) {//meta设置title
    document.title = to.meta.title
  }
  next();
});
export default router
