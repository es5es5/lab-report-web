import Vue from 'vue'
import Router from 'vue-router'

// Import routes
import ReportRoutes from './templates/report/routes'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('./components/MainLayout'),
      children: [
        ...ReportRoutes
      ]
    }
  ]
})
