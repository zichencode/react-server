import { LOGIN_TYPE } from './constant'

export const getLoginStatus = () => {
  return (dispatch, getState, request) => {
    return request.get('/api/isLogin').then(res => {
      dispatch({
        type: LOGIN_TYPE,
        isLogin: res.data.data
      })
    })
  }
}

export const login = () => {
  return (dispatch, getState, request) => {
    return request.get('/api/login').then(res => {
      dispatch({
        type: LOGIN_TYPE,
        isLogin: res.data.data
      })
    })
  }
}

export const logout = () => {
  return (dispatch, getState, request) => {
    return request.get('/api/logout').then(res => {
      dispatch({
        type: LOGIN_TYPE,
        isLogin: res.data.data
      })
    })
  }
}