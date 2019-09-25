import Vue from 'vue'
import Router from 'vue-router'

// Import routes
import ReportRoutes from './templates/report/routes'
import AlbumRoutes from './templates/album/routes'
import NoticeRoutes from './templates/notice/routes'

Vue.use(Router)

export default new Router({
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
