
import React from 'react';
import PropsTypes from 'prop-types';

const TodoList = ({ tasks }) => (
  <div id="todolist">
    <li>
      {tasks.map(task => (
        <ul key={task}>{task}</ul>
      ))}
    </li>
  </div>
);

TodoList.propTypes = {
};

export default TodoList;
