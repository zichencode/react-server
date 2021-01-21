import { CHANGE_LIST } from './constant'
const defaultState = {
  name: 'ly',
  age: '10',
  list: []
}
const reducer = (state = defaultState, action) => {
  console.log(action.type, 'csss');
  switch (action.type) {
    case CHANGE_LIST:
      console.log(action.type, 'csss11111');

      return {
        ...state,
        list: action.list
      }

    default:
      return state;
  }
}
export default reducer