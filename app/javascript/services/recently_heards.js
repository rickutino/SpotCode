import Api from './api';

const RecentlyHeardsService = {
  create: (id) => Api.post(`/album/${id}/recently_heards`),
}

export default RecentlyHeardsService;