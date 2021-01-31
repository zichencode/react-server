import { LOGIN_TYPE } from './constant'
const defaultState = {
  isLogin: false
}
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_TYPE:
      return {
        ...state,
        isLogin: action.isLogin
      }

    default:
      return state;
  }
}
export default reducer