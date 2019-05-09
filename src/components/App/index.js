/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */
import Count from 'src/containers/Count';
import TodoList from 'src/containers/TodoList';
import Form from 'src/containers/Form';
import './app.scss';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <Count />
    <Form />
    <TodoList />
  </div>
);

/**
 * Export
 */
export default App;
