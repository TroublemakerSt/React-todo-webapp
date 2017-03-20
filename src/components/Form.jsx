import React from 'react';

import Button from './Button';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <form className="todo-form">
        <input type="text" placeholder="What you need to do?" />

        <Button type="submit">Add</Button>
      </form>
    );
  }
}

Form.propTypes = {

};

export default Form;
