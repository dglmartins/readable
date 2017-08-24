import React, { Component } from 'react';
import './App.css';
import PostListView from './PostListView';
import PostView from './PostView';
import Header from './Header';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAllPosts, addCommentCountToPost } from './actions/posts';
import { getAllCategories } from './actions/categories';
import { getCommentsOfPost } from './actions/comments';
import { Route } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);
    Promise.all([props.getAllPosts(), props.getAllCategories()]).then(([postsArray, categoriesArray]) => {
      Promise.all(postsArray.map((post) =>  props.getCommentsOfPost(post))).then((postIdAndCommentCountArray) => {
        for (const post of postIdAndCommentCountArray) {
          props.addCommentCountToPost({postId: post.id, commentCount: post.commentCount})
        }
      });
    });
  }

  render() {
    return (
      <div>
        <Header/>
        <Route exact path='/' render={() => (
           <PostListView
             category="all"
             posts={this.props.posts}/>
        )}/>
        {this.props.categories.map((category) => (
          <Route
            key={category.name}
            exact path={`/${category.name}`}
            render={() => (
              <PostListView
                category={category.name}
                posts={this.props.posts.filter((post) => (post.category === category.name))}
              />)
            }
          />
        ))}
        {/* {this.props.categories.map((category) => ( */}
          <Route
            exact path="/:category/:post_id"
            render={({ match }) => {
              console.log(this.props.posts.filter((post) => (post.id === match.params.post_id && post.category === match.params.category))[0])
              return <PostView
                post={this.props.posts.filter((post) => (post.id === match.params.post_id && post.category === match.params.category))[0]}
              />}
            }
          />

        {/* <Route path='/:category' render={({match}) => (
           <PostListView posts={this.props.posts.filter((post) => (post.category === match.params.category))}/>
        )}/> */}
      </div>
    );
  }
}

function mapStateToProps ({ posts, categories }) {
  return {
    posts: Object.keys(posts).map((post) => posts[post]),
    categories: categories
  };
}

function mapDispatchToProps (dispatch) {
  return {
    getAllPosts: () => dispatch(getAllPosts()),
    getAllCategories: () => dispatch(getAllCategories()),
    getCommentsOfPost: (data) => dispatch(getCommentsOfPost(data)),
    addCommentCountToPost: (data) => dispatch(addCommentCountToPost(data))

  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
