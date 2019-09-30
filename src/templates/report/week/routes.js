let meta = { title: '주간업무보고' }

const WeekReportListRoutes = [{
  path: 'week',
  name: 'WeekReportList',
  meta,
  component: () => import('./views/WeekReportList')
}, {
  path: 'week/create',
  name: 'WeekReportCreate',
  meta,
  component: () => import('./views/WeekReportCreate')
}, {
  path: 'week/update/:reportId',
  name: 'WeekReportUpdate',
  meta,
  component: () => import('./views/WeekReportUpdate')
}]

export default WeekReportListRoutes
