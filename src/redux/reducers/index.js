import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import user from './user';
import { selectedSubreddit, postsBySubreddit } from './seniorAsync';

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  user,
  selectedSubreddit,
  postsBySubreddit
})

export default todoApp;