//1 引入vue
import Vue from 'vue';
//2 引入 vueRouter
import VueRouter from  'vue-router';
//3 调用VueRouter
Vue.use(VueRouter);
//4定义路由规则
const routes =[
    //一级路由
    {
        path:'/',
        component:()=>import('./views/Home/index.vue'),
        children:[
            {
                path:'films',
                component:()=>import('./views/Home/films.vue')
            },
            {
                path:'cinemas',
                component:()=>import('./views/Home/cinemas.vue')
            },
            {
                path:'center',
                component:()=>import('./views/Home/center.vue')
            },
            {
                 path:'jingtong',
                 component:()=>import('./views/Home/jingdong.vue')
           }
        ]
    },
    {
        path:'/city',
        component:()=>import('./views/City/index.vue'),
    },
    {
        path:'/film/:FilmId',
        component:()=>import('./views/Film/index.vue'),
    },
    {
        path:'/login',
        component:()=>import('./views/Login/index.vue'),
    },
    {
        path:'/money',
        component:()=>import('./views/Money/index.vue'),
    }
]
const router =new VueRouter({
    routes
});
export default router;
