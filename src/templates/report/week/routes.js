const WeekReportListRoutes = [{
  path: 'week',
  name: 'WeekReportList',
  meta: {
    title: '주간업무보고'
  },
  component: () => import('./views/WeekReportList')
}, {
  path: 'week/create',
  name: 'WeekReportCreate',
  meta: {
    title: '주간업무보고'
  },
  component: () => import('./views/WeekReportCreate')
}]

export default WeekReportListRoutes
