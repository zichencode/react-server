import { CHANGE_LIST } from './constant'

export const getTransList = () => {
  return (dispatch,getState, request) => {
    return request.get('/api/trans').then(res => {
      dispatch({
        type: CHANGE_LIST,
        data: res.data.data
      })
    })
  }
}