import React, { Component } from 'react';
import './App.css';
import PostListView from './PostListView';
import Header from './Header';
import SortSelect from './SortSelect';
import * as ReadableApi from './ReadableApi';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAllPosts } from './actions/posts';
import { getAllCategories } from './actions/categories';

class App extends Component {

  componentWillMount() {
    ReadableApi.getAllPosts().then((results) => {
      this.props.getAllPosts(results);
    });
    ReadableApi.getAllCategories().then((results) => {
      this.props.getAllCategories(results);
    });
  }

  render() {
    return (
      <div>
        <Header/>
        <SortSelect />
        <PostListView />
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getAllPosts: (data) => dispatch(getAllPosts(data)),
    getAllCategories: (data) => dispatch(getAllCategories(data))
  };
}

export default withRouter(connect(null, mapDispatchToProps)(App));
