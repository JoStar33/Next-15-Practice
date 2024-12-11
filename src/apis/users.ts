import * as userType from '@/types/users';
import { requests } from '.';

export function getUserList() {
  return requests.get<userType.UserListResponse>('/users');
}
