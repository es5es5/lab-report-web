const WeekReportListRoutes = [{
  path: 'week',
  name: 'WeekReportList',
  meta: {
    title: '주간업무보고'
  },
  component: () => import('./views/WeekReportList')
}]

export default WeekReportListRoutes
