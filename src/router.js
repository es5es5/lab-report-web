import Vue from 'vue'
import Router from 'vue-router'

// Import routes
import ReportRoutes from './templates/report/routes'
import AlbumRoutes from './templates/album/routes'
import NoticeRoutes from './templates/notice/routes'

Vue.use(Router)

let router = new Router({
  linkActiveClass: 'active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/report/week',
      component: () => import('./components/MainLayout'),
      children: [
        ...ReportRoutes,
        ...AlbumRoutes,
        ...NoticeRoutes
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  let routeMetaTitle = to.meta.title
  if (routeMetaTitle === undefined || routeMetaTitle === '') {
    document.title = '생체대사실험실'
  } else {
    document.title = `${to.meta.title} | 생체대사실험실`
  }
  next()
})

export default router
