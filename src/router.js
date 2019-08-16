// 1 引入vue
import Vue from "vue"
// 2 引入 vueRouter
import VueRouter from "vue-router"
// 引入页面进度条
import NProgress from "nprogress"
import "nprogress/nprogress.css"
// 3 调用VueRouter
Vue.use(VueRouter)
// 4定义路由规则
const routes = [
  // 一级路由
  {
    path: "/",
    component: () => import("./views/Home/index.vue"),

    redirect: "/films",
    meta: {
      title: "首页"
    },
    // 二级路由
    children: [
      {
        path: "films",
        component: () => import("./views/Home/films.vue"),
        meta: {
          title: "电影页面"
        }
      },
      {
        path: "cinemas",
        component: () => import("./views/Home/cinemas.vue"),
        meta: {
          title: "影院页"
        }
      },
      {
        path: "center",
        component: () => import("./views/Home/center.vue"),
        meta: {
          title: "个人中心"
        }
      },
      {
        path: "jingtong",
        component: () => import("./views/Home/jingdong.vue"),
        meta: {
          title: "京东页"
        }
      }
    ]
  },
  {
    path: "/city",
    component: () => import("./views/City/index.vue"),
    meta: {
      title: "城市选择页"
    }
  },
  {
    path: "/film/:FilmId",
    component: () => import("./views/Film/index.vue"),
    meta: {
      title: "电影详情页"
    }
  },
  {
    path: "/login",
    component: () => import("./views/Login/index.vue"),
    meta: {
      title: "登陆页"
    }
  },
  {
    path: "/money",
    name: "Money",
    component: () => import("./views/Money/index.vue"),
    meta: {
      // 传入title 为了给页面的标题设置名字
      title: "钱包页",
      // 这里设置一个条件判断当前组件需不需要登录 需要就加上
      needLogin: true
    }
  }
]
const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  NProgress.start()
  console.log(window.login)
  if (to.meta.needLogin) {
    // 需要登陆
    if (window.login === true) {
      // 存在登陆状态直接登陆
      next()
    } else {
      //   next("/login")
      // 1我想将我要去的地方的路径携带在url是上 方便登陆完成的时候拿到我要去的页面
      next(`/login?red=${to.path}`)
      // 2 将信息存储在localstorsge 里
      // localStorage.setItem("path", to.path)
      // next("/login")
    }
  } else {
    next()
  }
})
router.afterEach((to, from, next) => {
  // 这里使用document.title 实现每个页面title 部分不同的变化
  document.title = to.meta.title
  NProgress.done()
})

export default router
