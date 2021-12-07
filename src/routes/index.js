import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router';
export default createRouter({
  //history: createWebHistory(),
  history: createWebHistory('/'),
  mode:history,
  scrollBehavior(){
    return {top : 0};
  },
  routes:[
    {
      path:'/',
      redirect : '/login'
    },
    {
      path:'/login',
      component : () => import ('@/views/Login.vue'),
    },
    {
      path:'/header',
      component : () => import ('@/views/Header.vue'),
    },
    // {//에러, 잘못된 접근페이지
    //   path:'*',
    //   //component:''
    // }
  ]
})