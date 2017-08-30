import React from 'react';

/**
* @description Spinner component. Spinner gets called by App component while app is getting all posts, categories and comments.
* @returns a <div> with a spinner
*/
const Spinner = () => (
  <div className="spinner-container">
    <div className="spinner"></div>
  </div>
);

export default Spinner;
