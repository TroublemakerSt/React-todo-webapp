import { HANDLE_ERROR } from '../actions';

function reducer(error = null, action) {
  console.log('In reducer', action.type === HANDLE_ERROR);
  switch (action.type) {
    case HANDLE_ERROR:
      console.log(action);
      return action.error;

    default:
      return error;
  }
}

export default reducer;
