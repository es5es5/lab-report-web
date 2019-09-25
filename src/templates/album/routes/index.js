import TravelAlbumListRoutes from '../travel/routes'
import LabAlbumListRoutes from '../lab/routes'

const AlbumMenuRoutes = [{
  path: 'album',
  redirect: 'album/travel',
  name: 'AlbumMenu',
  component: () => import('../AlbumLayout'),
  children: [
    ...TravelAlbumListRoutes,
    ...LabAlbumListRoutes
  ]
}]

export default AlbumMenuRoutes
