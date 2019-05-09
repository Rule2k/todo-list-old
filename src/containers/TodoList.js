/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import TodoList from 'src/components/TodoList';

// Action Creators


const mapStateToProps = (state, ownProps) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

// Container
const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);


/**
 * Export
 */
export default TodoListContainer;
