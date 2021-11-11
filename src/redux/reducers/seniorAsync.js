/* 高级篇 = 异步 */

import { 
    SELECT_SUBREDDIT, 
    INVALIDATE_SUBREDDIT, 
    REQUEST_POST,
    RECEIVE_POST
  } from '../action';


export const selectedSubreddit = (state = 'reactjs', action) => {
  switch(action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit
    default: 
      return state
  }
}

const posts = (state={ isFetching: false, didInvalidate: false, items:[]},action) => {
  switch(action.type) {
    case INVALIDATE_SUBREDDIT:
      return Object.assign({}, state, { didInvalidate: true});
    case REQUEST_POST:
      return Object.assign({}, state, {isFetching: true, didInvalidate: false});
    case RECEIVE_POST:
      return Object.assign({}, state, { isFetching: false, didInvalidate: false, items: action.posts, lastUpdated: action.receivedAt });
    default:
      return state
  }
}

export const postsBySubreddit = (state={}, action) => {
  switch(action.type) {
    case INVALIDATE_SUBREDDIT:
    case REQUEST_POST:
    case RECEIVE_POST:
      return Object.assign({}, state, {
        [action.subreddit]: posts(state[action.subreddit],action)
      })
    default:
      return state
  }
}

