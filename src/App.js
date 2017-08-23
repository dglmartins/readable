import React, { Component } from 'react';
import './App.css';
import PostListView from './PostListView';
import Header from './Header';
import SortSelect from './SortSelect';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAllPosts } from './actions/posts';
import { getAllCategories } from './actions/categories';
import { getCommentsOfPost } from './actions/comments';
import { Route } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);
    Promise.all([props.getAllPosts(), props.getAllCategories()]).then(([postsArray, categoriesArray]) => {
      Promise.all(postsArray.map((post) =>  props.getCommentsOfPost(post))).then((commentsArray) => {console.log(commentsArray)});
    });
  }

  render() {
    return (
      <div>
        <Header/>
        <SortSelect />
        <Route exact path='/' render={() => (
           <PostListView posts={this.props.posts}/>
        )}/>
        <Route path='/:category' render={({match}) => (
           <PostListView posts={this.props.posts.filter((post) => (post.category === match.params.category))}/>
        )}/>
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
    getAllPosts: () => dispatch(getAllPosts()),
    getAllCategories: () => dispatch(getAllCategories()),
    getCommentsOfPost: (data) => dispatch(getCommentsOfPost(data))

  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
