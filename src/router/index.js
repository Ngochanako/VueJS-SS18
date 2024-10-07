import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FeedBack from '@/views/FeedBack.vue'
import UserPage from '@/views/UserPage.vue'
import Profile from '@/views/Profile.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias:['/home','/home-page'],
      name: 'home',
      component: ()=> import(/*webpackChunkName:"home"*/"@/views/HomeView.vue")
      
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      alias:['/contact','/get-in-touch'],
      component: () => import('../views/Contact.vue'),
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/Search.vue'),
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../views/ListPost.vue'),
    },
    {
      path: '/posts/:id',
      name: 'postDetail',
      component: () => import('../views/PostDetail.vue'),
    },
    {
      path: '/post-not-found',
      name: 'postNotFound',
      component: () => import('../views/PostNotFound.vue'),
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: () => import('../views/FeedBack.vue'),
    },
    {
      path: '/user/:id',
      name: 'user',
      component: () => import('../views/UserPage.vue'),
      redirect:to=>`/profile/${to.params.id}`
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/Profile.vue'),
    },
    {
      path: '/products',
      name: 'listProduct',
      component: () => import('../views/ListProduct.vue'),
    },
    {
      path: '/products/:id',
      name: 'productDetail',
      component: () => import('../views/ProductDetail.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/Settings.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue'),
      children:[
        {
          path: 'users',
          name: 'users',
          component: () => import('../views/User.vue'),
        },
        {
          path: 'setting',
          name: 'setting',
          component: () => import('../views/Setting.vue'),
        },
        {
          path: 'product',
          name: 'product',
          component: () => import('../views/Product.vue'),
        },
      ]
    },
    {
      path: '/logon',
      name: 'logon',
      component: () => import('../views/Logon.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/Dashboard.vue'),
      beforeEnter:(to,from,next)=>{
        const isAuthenticated =true;
        if(isAuthenticated){
          next()
        }else{
          next('/login')
        }
      },
      children:[
        {
          path: 'manager-product',
          name: 'managerProduct',
          component: () => import('../views/ManagerProduct.vue'),
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../views/NotFound.vue'),
    }
  ],
  scrollBehavior:((to,from,savedPosition)=>{
    if(savedPosition){
      return savedPosition;
    }
    // Khi vào PostDetail, cuộn đến giữa trang
    if (to.name === 'postDetail') {
      return { top: window.innerHeight / 2, behavior: 'smooth' };
    }
    if (to.name === 'postNotFound') {
      return { top: 0, behavior: 'smooth' };
    }
    // Mặc định cuộn về đầu trang
    return { top: 0 };
  })
})
//tạo cơ chế bảo vệ router
router.beforeEach((to, from, next) => {
  
  const isLogin=true;
  if(to.path==='/dashboard' && !isLogin){
    next('/logon')
  }else{
    next();
  }
})
export default router
