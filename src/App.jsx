import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Todo from './components/Todo';

function App(props) {
  return (
    <main>
      <Header title={props.title}/>
      <section className="todo-list">
        <Todo title={"Buy tickets"} completed={true} />
        <Todo title={"Rent car"} completed={true} />
      </section>
    </main>
  );
}

App.propTypes = {
  title: React.PropTypes.string,
};

App.defaultProps = {
  title: 'React Todo',
};

const dom = ReactDOM.render(<App />, document.querySelector('#root'));
