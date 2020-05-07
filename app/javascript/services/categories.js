import Api from './api';

const CategoriesService = {
  show: () => Api.get(`/categories/${id}`)
}

export default CategoriesService;