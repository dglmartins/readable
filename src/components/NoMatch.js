import React from 'react';
import { Link } from 'react-router-dom';

/**
* @description NoMatch component. NoMatch gets called App component on an unmatched Route.
* @returns a <div> with 404 info and a button to return to root.
*/
const NoMatch = () => (
  <div className="error-template">
    <h1>Oops!</h1>
    <h2>404 Not Found</h2>
    <div className="error-details">
      Sorry, an error has occured, Requested page not found!
    </div>
    <div className="error-details">

      {/* link to root */}
      <Link className="back-arrow"
        to="/">
      </Link>
    </div>
  </div>
);

export default NoMatch;
