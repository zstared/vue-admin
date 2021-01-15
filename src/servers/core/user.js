import request from "../request";

/**用户登录 */
export async function login(params) {
  return await request.post("/core/user/login", params);
}

/**获取当前用户信息 */
export async function getCurrentUser() {
  return await request.get("/core/user/current");
}

/**修改当前用户信息 */
export async function updateCurrentUser(params) {
  return await request.post("/core/user/updateCurrent", params);
}

/**修改用户密码 */
export async function updatePassword(params) {
  return await request.post("/core/user/updatePassword", params);
}

/**获取用户列表 */
export async function getUserList(params) {
  return await request.get("/core/user/pageList", params);
}

/**新增用户 */
export async function create(params) {
  return await request.post("/core/user/create", params);
}

/**编辑用户 */
export async function update(params) {
  return await request.post("/core/user/update", params);
}

/**禁用/启用用户 */
export async function updateState(params) {
  return await request.post("/core/user/updateState", params);
}

/**删除用户 */
export async function deleteUser(params) {
  return await request.post("/core/user/delete", params);
}

/**判断账号是否存在 */
export async function existAccount(params) {
  return await request.post("/core/user/existAccount", params);
}

/**判断手机号是否存在 */
export async function existMobile(params) {
  return await request.post("/core/user/existMobile", params);
}

/**获取用户权限 */
export async function getUserPermission(params) {
  return await request.get("/core/user/permission", params);
}

/**用户赋权限 */
export async function savePermission(params) {
  return await request.post("/core/user/relateResource", params);
}
