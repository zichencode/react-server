import { CHANGE_LIST } from './constant'

export const getHomeList = () => {
  return (dispatch,getState, request) => {
    return request.get('/api/list').then(res => {
      dispatch({
        type: CHANGE_LIST,
        list: res.data.data
      })
    })
  }
}