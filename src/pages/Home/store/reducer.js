import { CHANGE_LIST } from './constant'
const defaultState = {
  name: 'ly',
  age: '10',
  list: []
}
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LIST:

      return {
        ...state,
        list: action.list
      }

    default:
      return state;
  }
}
export default reducer