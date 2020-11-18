import axios from '@/api/axios';

/**
 * 更新用户名
 * @param params
 */
export const patchUserName = (params: User) => {
  return axios.patch(`/user/username`, {
    ...params,
  });
};

/**
 * 更新用户密码
 * @param user
 * @param password
 *
 */
export const patchPassword = (user: User, password: string) => {
  return axios.patch(`/user/password?password=${password}`, {
    ...user,
  });
};

/**
 * 用户名模糊搜索用户
 * @param username
 */
export function getUsersByName(username: string) {
  return axios.get(`/user/findByName?username=${username}`);
}

/**
 * 用户头像上传
 * @param params
 */
export function setUserAvatar(params: FormData) {
  return axios.post(`/user/avatar`, params, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

/**
 * 删除用户
 * @param params
 */
export function deleteUser(params: any) {
  return axios.delete(`/user`, { params: params });
}