import axios from 'axios'
import { CHANGE_LIST } from './constant'

export const getHomeList = () => {
  return (dispatch) => {
    return axios.get('http://localhost:3006/list').then(res => {
      console.log(dispatch , 'pch');
      dispatch({
        type: CHANGE_LIST,
        list: res.data.data
      })
    })
  }
}