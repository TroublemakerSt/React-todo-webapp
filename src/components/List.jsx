import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Todo from './Todo';

function List(props) {
  return (
    <ReactCSSTransitionGroup
      component="section"
      className="todo-list"
      transitionName="slide"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}>
      {!props.loading && props.todos.length ?
        props.todos.map(todo =>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onDelete={props.onDelete}
            onToggle={props.onToggle}
            onEdit={props.onEdit}
          />)
        :
        <div className="loading">Загрузка...</div>
      }
    </ReactCSSTransitionGroup>
  );
}

List.propTypes = {
  todos: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      title: React.PropTypes.string.isRequired,
      completed: React.PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onDelete: React.PropTypes.func.isRequired,
  onToggle: React.PropTypes.func.isRequired,
  onEdit: React.PropTypes.func.isRequired,
};

export default List;
