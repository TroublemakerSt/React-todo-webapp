import React from 'react';

import FilterLink from './FilterLink';

function Filter(props) {
  return (
    <div className="todo-filter">
      <FilterLink
        icon="list"
        active={props.activeFilter === 'ALL'}
        onClick={() => props.onSetFilter('ALL')}
      />

      <FilterLink
        icon="check_box"
        active={props.activeFilter === 'COMPLETED'}
        onClick={() => props.onSetFilter('COMPLETED')}
      />

      <FilterLink
        icon="check_box_outline_blank"
        active={props.activeFilter === 'UNCOMPLETED'}
        onClick={() => props.onSetFilter('UNCOMPLETED')}
      />
    </div>
  );
}

Filter.propTypes = {
  activeFilter: React.PropTypes.string.isRequired,
  onSetFilter: React.PropTypes.func.isRequired,
};

export default Filter;
