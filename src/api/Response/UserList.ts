import Pagination from "./Pagination";
import Company from "./Company";
import User from "./User";

export default interface UserList extends Pagination {
  ad: Company;
  data: User[];
}
