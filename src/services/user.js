import request from '../utils/request';
import config from '../utils/config';

export async function login({ username, password }) {
  const param = {
    username,
    password,
  };
  return request(`${config.cxt}/system/app/user/login`, {
    method: 'post',
    body: JSON.stringify(param),
  });
}


//
export async function getMapboxMarkerData({ url }) {
  return request(url, {
    method: 'get',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
