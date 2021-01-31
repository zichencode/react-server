import { CHANGE_LIST } from './constant'
const defaultState = {
  data: []
}
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LIST:

      return {
        ...state,
        data: action.data
      }

    default:
      return state;
  }
}
export default reducer