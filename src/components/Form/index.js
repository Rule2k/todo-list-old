
import React from 'react';
import PropsTypes from 'prop-types';

const Form = ({ input, handleInputChanged, handleSubmit }) => {
  const inputHasChanged = (event) => {
    console.log(event.target.value);
    handleInputChanged(event.target.value);
  };
  const formHasBeenSubmited = (event) => {
    event.preventDefault();
    handleSubmit();
  };
  return (
    <div id="form" onSubmit={formHasBeenSubmited}>
      <form>
        <input type="text" value={input} onChange={inputHasChanged} />
      </form>
    </div>
  );
};

Form.propTypes = {
};

export default Form;
