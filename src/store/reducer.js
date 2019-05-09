/**
 * Initial State
 */
const initialState = {
  input: '',
};

/**
 * Types
 */
const INPUT_CHANGED = 'INPUT_CHANGED';

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

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
