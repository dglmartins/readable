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
import { getCommentsOfPost } from './actions/comments';

class App extends Component {

  constructor(props) {
    super(props);
    ReadableApi.getAllPosts().then((posts) => {
      props.getAllPosts(posts);
      for (const post of posts) {
        ReadableApi.getCommentsOfPost(post.id).then((comments) => {
          props.getCommentsOfPost(comments);
        });
      }
    });
    ReadableApi.getAllCategories().then((categories) => {
      props.getAllCategories(categories);
    });
  }

  render() {
    return (
      <div>
        <Header/>
        <SortSelect />
        <PostListView posts={this.props.posts}/>
      </div>
    );
  }
}

function mapStateToProps ({ posts }) {
  return {
    posts: Object.keys(posts).map((post) => posts[post])
  };
}

function mapDispatchToProps (dispatch) {
  return {
    getAllPosts: (data) => dispatch(getAllPosts(data)),
    getAllCategories: (data) => dispatch(getAllCategories(data)),
    getCommentsOfPost: (data) => dispatch(getCommentsOfPost(data))

  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
