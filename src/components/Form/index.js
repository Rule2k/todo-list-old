
import React from 'react';
import PropsTypes from 'prop-types';

const Form = ({ input, handleInputChanged }) => {
  const inputHasChanged = (event) => {
    console.log(event.target.value);
    handleInputChanged(event.target.value);
  };
  return (
    <div id="form">
      <form>
        <input type="text" value={input} onChange={inputHasChanged} />
      </form>
    </div>
  );
};

Form.propTypes = {
};

export default Form;
