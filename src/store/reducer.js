/**
 * Initial State
 */
const initialState = {
  input: '',
  tasks: [],
};

/**
 * Types
 */
const INPUT_CHANGED = 'INPUT_CHANGED';
const FORM_SUBMITED = 'FORM_SUBMITED';

/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INPUT_CHANGED:
      return {
        ...state,
        input: action.input,
      };
    case FORM_SUBMITED:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          state.input,
        ],
      };
    default:
      return state;
  }
};

/**
 * Action Creators
 */

export const handleInputChanged = input => ({
  type: INPUT_CHANGED,
  input,
});

export const handleSubmit = () => ({
  type: FORM_SUBMITED,
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
