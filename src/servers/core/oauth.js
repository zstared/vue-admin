import request from "../request";

/**登录 */
export async function login(params) {
    return await request.post('/core/oauth/login', params);
}

/**注销 */
export async function logout() {
    return await request.post('/core/oauth/logout');
}
