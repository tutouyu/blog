import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  axios.defaults.withCredentials = true;
  const instance = axios.create({
    baseURL: 'http://101.34.250.195:3000/',
    timeout: 5000,
  })

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    if (config.url == "/articles/set" || config.url == "/anime/set" || config.url == "/music/set" || config.url == "/game/set" || config.url == "/edite" || config.url == "/type/set" && !window.localStorage.getItem('token')) {
      throw new axios.Cancel('Operation canceled by the user.');
    }
    else {
      return config
    }
  }, err => {
    console.log(err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)
}
