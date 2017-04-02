import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [ ],
    };

    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    axios.get('/api/todos')
      .then(response => response.data)
      .then(todos => this.setState({ todos }))
      .catch(this.handleError);
  }

  handleStatusChange(id) {
    axios.patch(`/api/todos/${id}`)
    .then(response => {
      const todos = this.state.todos.map(todo => {
        if (todo.id !== id) {
          return todo;
        }

        return Object.assign({}, todo, {
          completed: !todo.completed,
        });
      });

      this.setState({ todos });
    })
    .catch(this.handleError);
  }

  handleDelete(id) {
    axios.delete(`/api/todos/${id}`)
    .then(() => {
      const index = this.state.todos.findIndex(todo => todo.id === id);
      const todos =  [
        ...this.state.todos.slice(0, index),
        ...this.state.todos.slice(index + 1),
      ];

      this.setState({ todos });
    })
    .catch(this.handleError);
  }

  handleEdit(id, title) {
    axios.put(`/api/todos/${id}`, { title })
    .then(response => {
      const todos = this.state.todos.map(todo => {
        if (todo.id !== id) {
          return todo;
        }

        return Object.assign({}, todo, {
          title,
        });
      });

      this.setState({ todos });
    })
    .catch(this.handleError);
  }

  handleAdd(title) {
    axios.post('/api/todos', { title })
      .then(response => response.data)
      .then(todo => {
        let todos = [...this.state.todos, todo];

        this.setState({ todos });
      })
      .catch(this.handleError);
  }

  handleError(error) {
    console.log(error);
  }

  render() {
    return (
      <main>
        <Header title={this.props.title} todos={this.state.todos} />

        <List
          state={this.state}
          onStatusChange={this.handleStatusChange}
          onDelete={this.handleDelete}
          onEdit={this.handleEdit}
        />

        <Form onAdd={this.handleAdd} />
      </main>
    );
  }
}

App.propTypes = {
  title: React.PropTypes.string,
};

App.defaultProps = {
  title: 'React Todo',
};

export default App;
