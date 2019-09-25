import PaperNoticeListRoutes from '../paper/routes'
import LabNoticeListRoutes from '../lab/routes'

const NoticeMenuRoutes = [{
  path: 'notice',
  redirect: 'notice/paper',
  name: 'NoticeMenu',
  component: () => import('../NoticeLayout'),
  children: [
    ...PaperNoticeListRoutes,
    ...LabNoticeListRoutes
  ]
}]

export default NoticeMenuRoutes
