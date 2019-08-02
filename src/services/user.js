import request from '../utils/request';
import config from '../utils/config';

export async function login({ username, password, remember }) {
  const formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);
  formData.append('remember', remember);
  return request(`${config.baseURL}/app/system//doAuth.htm`, {
    method: 'post',
    body: formData,
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

export async function doLoginPage() {
  return request(`${config.baseURL}/app/system/doLogin.htm`, {
    method: 'get',
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
