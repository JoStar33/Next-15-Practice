/*************************** Domain & DTO ***************************/
/**사용자 아이템 */
export interface UserListItem {
  /**유저 ID */
  id: number;
  /**유저이름 */
  name: string;
  /**사용자 아이디 */
  username: string;
  /**이메일 */
  email: string;
  phone: string;
  website: string;
  province: string;
  city: string;
  district: string;
}
/******************************* Form ********************************/

/***************************** Request *****************************/

/***************************** Response *****************************/
export type UserListResponse = UserListItem[];