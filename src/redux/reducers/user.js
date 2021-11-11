
const user = (state = { name: '无',level: '0'}, action) => {
  switch(action.type) {
    case 'SET_USER_INFO':
      return {
        ...state,
        ...action.info
      }
    default:
      return state
  }
}

export default user