import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeSortByProp, changeSortByOrder, resetSortBy } from './services/sortByActions';

/**
* @description SortSelect component. SortSelect gets called by PostListView and CommentsListView components.
* @returns a <section> with the selector for choosing the props to order by and the order.
* @param {object} props - Two prop passed from parent: {string} props.sortOptions that tells the component if we are sorting posts or comments and {object} props.sortyBy, sortBy Redux state. Also recives three functions that dispatch actions from mapDispatchToProps. One function resets the sortBy prop and order to voteScore and descend, another changes the prop that is being sorted, and the last changes the order.
*/

class SortBy extends Component {

  // on componentDidMount dispatch resetSortBy action which resets sortBy prop and order.
  componentDidMount() {
    this.props.resetSortBy();
  }

  render () {
    return (
      <section className="dropdown-container">

        {/* selects the prop, on change dispatches the action to change prop in sortBy Redux state */}
        <select onChange={(e) => this.props.changeSortByProp(e.target.value)} name="sortByProp" className="select-dropdown-input" value={this.props.sortBy.prop}>

          {/* maps over each sortOptions in sortBy Redux state to display the props to sort by */}
          {this.props.sortBy[this.props.sortOptions].map((sortOption) => (
            <option key={sortOption.prop} value={sortOption.prop}>sort by {sortOption.name}</option>
          ))}
        </select>

        {/* selects the order, on change dispatches the action to change order in sortBy Redux state */}
        <select onChange={(e) => this.props.changeSortByOrder(e.target.value)}name="sortByOrder" className="select-dropdown-input" value={this.props.sortBy.order}>
          <option value="ascend">ascending</option>
          <option value="descend">descending</option>
        </select>
      </section>
    );
  }
};

//maps dispatch of changeSortByProp and changeSortByOrder actions to props
function mapDispatchToProps (dispatch) {
  return {
    changeSortByProp: (data) => dispatch(changeSortByProp(data)),
    changeSortByOrder: (data) => dispatch(changeSortByOrder(data)),
    resetSortBy: () => dispatch(resetSortBy())
  };
}

export default withRouter(connect(null, mapDispatchToProps)(SortBy));
