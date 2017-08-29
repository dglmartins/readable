import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeSortByProp, changeSortByOrder } from '../actions/sortBy';

const SortSelect = (props) => (
  <section className="dropdown-container">
    <select onChange={(e) => props.changeSortByProp(e.target.value)} name="sortByProp" className="select-dropdown-input" value={props.sortBy.prop}>
      {props.sortBy[props.sortOptions].map((sortOption) => (
        <option key={sortOption.prop} value={sortOption.prop}>sort by {sortOption.name}</option>
      ))}
    </select>
    <select onChange={(e) => props.changeSortByOrder(e.target.value)}name="sortByOrder" className="select-dropdown-input" value={props.sortBy.order}>
      <option value="ascend">ascending</option>
      <option value="descend">descending</option>
    </select>
  </section>
);

function mapStateToProps ({ sortBy }) {
  return {
    sortBy
  };
}

function mapDispatchToProps (dispatch) {
  return {
    changeSortByProp: (data) => dispatch(changeSortByProp(data)),
    changeSortByOrder: (data) => dispatch(changeSortByOrder(data))
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SortSelect));
