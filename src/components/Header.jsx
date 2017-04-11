import React from 'react';

import Stats from './stats';
import Stopwatch from './stopwatch';

function Header({ todos }) {
  return (
    <header>
      <Stats todos={todos} />
      <h1>ToDo Tasks</h1>
      <Stopwatch />
    </header>
  );
}

Header.propTypes = {
  todos: React.PropTypes.array.isRequired,
};

export default Header;
