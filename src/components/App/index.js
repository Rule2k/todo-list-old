/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */
import Count from 'src/components/Count';
import TodoList from 'src/components/TodoList';
import Form from 'src/containers/Form';
import './app.scss';

/**
 * Code
 */
const App = () => (
  <div id="App">
    <Count />
    <Form />
    <TodoList />
  </div>
);

/**
 * Export
 */
export default App;
