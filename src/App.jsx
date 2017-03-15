import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';

function App(props) {
  return (
    <main>
      <Header title={props.title}/>
      <section className="todo-list">
        <div className="todo completed">
          <button className="checkbox icon">
            <i className="material-icons">check_box</i>
          </button>
          <span className="todo-title">Изучить JS</span>
          <button className="delete icon">
            <i className="material-icons">delete</i>
          </button>
        </div>

        <div className="todo">
          <button className="checkbox icon">
            <i className="material-icons">check_box_outline_blank</i>
          </button>
          <span className="todo-title">Изучить React</span>
          <button className="delete icon">
            <i className="material-icons">delete</i>
          </button>
        </div>
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
