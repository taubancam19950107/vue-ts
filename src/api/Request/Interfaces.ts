import User from '@/models/User'
import Company from '@/models/Company'

interface Pagination {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}

interface UserList extends Pagination {
  ad: Company;
  data: User[];
}

export {
  UserList
}
