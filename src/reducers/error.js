import { HANDLE_ERROR } from '../actions';

function reducer(error = null, action) {
  switch (action.type) {
    case HANDLE_ERROR:
      return action.error;
      
    default:
      return error;
  }
}

export default reducer;
