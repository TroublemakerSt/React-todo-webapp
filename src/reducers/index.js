import { combineReducers } from 'redux';

import todos, * as fromTodos from './todo';
import { default as filter } from './filter';
import { default as error } from './error';
import loading from './loading';

const reducer = combineReducers({
  todos: todos,
  filter: filter,
  error: error,
  loading: loading,
});

export default reducer;

export function getFilteredTodos(state) {
  return fromTodos.getFilteredTodos(state.todos, state.filter);
}
