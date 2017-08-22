import React from 'react';

const SortSelect = (props) => (
  <section className="dropdown-container">
    <select name="sortBy" className="select-dropdown-input">
      <option value="byVotes">sort by votes</option>
      <option value="byDate">sort by most recent</option>
    </select>
  </section>
);

export default SortSelect;
