import { request } from './request';

export function check_log(user, pass) {
  return request({
    url: '/logins',
    type: "post",
    params: {
      username: user,
      password: pass,
    }
  })
}

export function getAuthority(uid) {
  return request({
    url: '/authority',
    type: 'post',
    params: {
      userId: uid
    }
  })
}