import axios from 'axios';

let globalPagesHttpPendingHttp = [];  // 本页面（对应当前路由）的所有请求pending列表
let cancelToken = axios.CancelToken;
const service = axios.create({
  timeout: 120000,
  headers: {
    "Cache-Control": 'no-cache'
  },
  cancelToken: new cancelToken(function(cancel){
    globalPagesHttpPendingHttp.push(cancel)
  })
})
/* 
   清除上条路由中的所有无效请求，
   情景：路由从a页面跳转至b页面，则在a页面尚未完成的请求应该属于无效请求；可以清除已节省资源；
 */
//  let clearPreRouteHttp = () => {
//    if(globalPagesHttpPendingHttp.length) {
//      globalPagesHttpPendingHttp.forEach(item => {
//        item();  // 执行清除方法
//      }) 
//    }
//  }
/* 在路由切换的时候，可以调用此方法 */


let globalHttpPendingList = []; // 所有的请求记录
/* 清除重复请求 */
const clearRepeatPendingHttp = (config) => {
  globalHttpPendingList.forEach((item, index) => {
    if (item.flag !== '/api/my/info/heatbeat' && item.flag === `${config.url}&${config.method}&${config.data}`) {
      // 除心跳之外的其他请求允许执行取消请求；
      item.cancel();  // 执行取消请求
      globalHttpPendingList.splice(index, 1);
    }
  })
}

/* 添加请求拦截 */
service.interceptors.request.use(function (config) {
  clearRepeatPendingHttp(config); // 取消重复请求
  /* 建立请求列表 */
  config.cancelToken = new cancelToken((cancel) => {
    if (config.method.toUpperCase() === 'POST') {
      globalHttpPendingList.push({
        flag: `${config.url}&${config.method}&${config.data}`,
        cancel: cancel, // 存储请求记录的取消方法；
      })
    }

    if (config.method.toUpperCase() === 'GET') {
      config.params = {
        t: Date.parse(new Date()) / 1000, // 避免使用缓存数据
        ...config.params
      }
      globalHttpPendingList.push({
        flag: `${config.url}&${config.method}&${config.data}`,
        cancel: cancel, // 存储请求记录的取消方法；
      })
    }
  })
  const app_token = 'xxxx'; // 获取token方法（一般从本地或者数据存储中获取）
  if (app_token) {
    config.headers.common['X-Token'] = app_token;
    config.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    config.headers.common['Access-Control-Allow-Origin'] = '*';
  }
  return config;
}, function (error) {
  console.error('error', error)
  return Promise.reject(error);
})


/* 添加响应拦截 */
service.interceptors.response.use(function (res) {
  clearRepeatPendingHttp(res.config); // 清除已经完成的请求；
  return res
}, function (error) {
  console.error('error', error);
  return Promise.reject(error)
})



export default service;