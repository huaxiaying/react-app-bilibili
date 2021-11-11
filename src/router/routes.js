/* 配置类似vue-router的路由表，以后仅维护本文件 */
import Home from '../views/home/Home';
import Mine from '../views/mine/Mine';
import Users from '../views/users/Users';
import ReduxDemo from '../views/reduxdemo/reduxdemo';
import Login from '../views/login/Login';
import Back from '../views/back/Back';

export const appRoutes = [
  {
    path: '/login',
    name: '登录',
    component: Login,
    meta: {
      role: [ 'system', 'user' ]
    }
  },
  {
    path: '/home',
    name: '主页',
    component: Home,
    meta: {
      role: [ 'system', 'user' ]
    }
  },
  {
    path: '/mine',
    name: '个人设置',
    component: Mine,
    meta: {
      role: [ 'system', 'user' ]
    }
  },
  {
    path: '/users',
    name: '收藏',
    component: Users,
    meta: {
      role: [ 'system', 'user' ]
    }
  },
  {
    path: '/redux',
    name: '测试',
    component: ReduxDemo,
    meta: {
      role: [ 'system', 'user']
    }
  },
  {
    path: '/',
    name: '返回',
    component:Back,
    meta: {
      role: [ 'system', 'user' ]
    }
  },
]
