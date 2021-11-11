/* Actions */
import service from '@api/service';
/* 
  基础篇，为同步类型的action
  高级篇，包含异步数据流
 */

/* 基础篇 */
export const ADD_TODO = "ADD_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_USER_INFO = "SET_USER_INFO";

/* 基础篇 */
let nextTodoId = 0;
export const addTodo = text => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}

export const toggleTodo = id => {
  return { 
    type: TOGGLE_TODO,
    id
  }
}

export const setUserInfo = (info) => {
  return {
    type: SET_USER_INFO,
    info
  }
}


/* 高级篇 */
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';
export const REQUEST_POST = 'REQUEST_POST';
export const RECEIVE_POST = 'RECEIVE_POST';

/* 
  以下定义的是同步action函数，通过Redux Thunk中间件
  将同步action创建函数和网络请求结合。通过使用制定的中间件，
  action创建函数可以返回action对象外，还可以返回函数，这时候
  这种action创建函数就成为了thunk；
  当action创建函数返回函数的时候，这个函数会被Redux Thunk middleware执行。
  这个函数可以执行API请求，dispatch action；
 */
export const selectSubreddit = (subreddit) => {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
}

export const invalidateSubreddit = (subreddit) => {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}

export const requestPost = (subreddit) => {
  return {
    type: REQUEST_POST,
    subreddit
  }
}

export const receivePost = (subreddit, json)=> {
  return { 
    type: RECEIVE_POST,
    subreddit,
    posts: json.data,
    receivedAt: Date.now()
  }
}

 
export function fetchPosts(subreddit) {
  return function(dispatch) {
    dispatch(requestPost(subreddit))
    const uuid = '7f1118513d454b05862e898aab974f8a';
    return service(`/api/apply/public/${uuid}`)
      .then(res => res, err => console.error('err', err))
      .then( json =>  dispatch(receivePost(subreddit, json)))
  }

}

