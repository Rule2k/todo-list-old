
import React from 'react';
import PropsTypes from 'prop-types';

const Count = ({ tasks }) => (
  <div id="count">
    <p>{tasks.length} tâches</p>
  </div>
);

Count.propTypes = {
};

export default Count;
