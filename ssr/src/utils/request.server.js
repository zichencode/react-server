import axios from 'axios'

// 请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

const instance = req => {
  return axios.create({
    baseURL: 'http://localhost:3006',
    headers: {
      cookie: req.get('cookie') || ''
    }
  })
}

export default instance;