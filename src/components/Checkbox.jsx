import React from 'react';

class Checkbox extends React.Component {
  constructor() {
    super();

    this.state = {
      checked: true,
    };
  }

  render() {
    return (
      <button className="checkbox icon">
        <i className="material-icons">{this.state.checked ? 'check_box' :
          'check_box_outline_blank'}</i>
      </button>
    );
  }
}

export default Checkbox;
