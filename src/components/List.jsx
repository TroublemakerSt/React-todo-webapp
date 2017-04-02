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
      {props.state.todos.map(todo =>
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          onStatusChange={props.onStatusChange}
          onDelete={props.onDelete}
          onEdit={props.onEdit}
        />)
      }
    </ReactCSSTransitionGroup>
  );
}

export default List;
