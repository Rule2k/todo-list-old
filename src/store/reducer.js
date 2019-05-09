/**
 * Initial State
 */
const initialState = {
  input: '',
};

/**
 * Types
 */
const DO_SOMETHING = 'DO_SOMETHING';
const INPUT_CHANGED = 'INPUT_CHANGED';

/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DO_SOMETHING:
      return {
        ...state,
        clic: state.clic + 1,
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const doSomething = () => ({
  type: DO_SOMETHING,
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
