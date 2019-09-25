import WeekReportListRoutes from '../week/routes'

const ReportMenuRoutes = [{
  path: 'report',
  redirect: 'report/week',
  name: 'ReportMenu',
  component: () => import('../../../components/MainLayout'),
  children: [
    ...WeekReportListRoutes
  ]
}]

export default ReportMenuRoutes
