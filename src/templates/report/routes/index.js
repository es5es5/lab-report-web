import WeekReportListRoutes from '../week/routes'
import PaperListRoutes from '../paper/routes'

const ReportMenuRoutes = [{
  path: 'report',
  redirect: 'report/week',
  name: 'ReportMenu',
  component: () => import('../ReportLayout'),
  children: [
    ...WeekReportListRoutes,
    ...PaperListRoutes
  ]
}]

export default ReportMenuRoutes
