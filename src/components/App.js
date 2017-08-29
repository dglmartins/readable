import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import '../App.css';
import CreatePost from './CreatePost';
import PostListView from './PostListView';
import PostView from './PostView';
import Header from './Header';
import UpdatePost from './UpdatePost';
import UpdateComment from './UpdateComment';
import Spinner from './Spinner';
import NoMatch from './NoMatch';
import { spinnerOnOff } from '../actions/spinner';
import { getCommentCount } from '../actions/posts';
import { getPostsCategoriesAndCommentsThunk } from '../actions/thunkActions';

class App extends Component {

  constructor(props) {
    super(props);
    //synchronous dispatch
    props.spinnerOnOff(true);
    //multiple asynchronous dispatches resolve with Promise.all
    props.getPostsCategoriesAndCommentsThunk()
      .then((postIdAndCommentCountArray) => {
      //synchronous dispatch
        for (const post of postIdAndCommentCountArray) {
          props.getCommentCount(post);
        }
        //synchronous dispatch
        props.spinnerOnOff(false);
    })
      .catch((error) => {
        props.spinnerOnOff(false);
        props.history.push('/ServerError');
      });
  }

  render() {

    return (
      <div>
        {this.props.spinner.spinnerOn && (
          <Spinner/>
        )}
        <Route path="/" component={Header}/>
        <Switch>
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
          {this.props.categories.map((category) => (
            <Route
              key={category.name}
              exact path={`/${category.name}/:post_id`}
              render={({ match }) => (
                <PostView
                  post={this.props.posts.filter((post) => (post.id === match.params.post_id && post.category === category.name))[0]}
                />)
              }
            />
          ))}
          <Route exact path='/updatePost/:post_id' render={({ match }) => (
             <UpdatePost
               post={this.props.posts.filter((post) => (post.id === match.params.post_id))[0]}/>
          )}/>
          <Route exact path='/updateComment/:comment_id' render={({ match }) => (
             <UpdateComment
               comment={this.props.comments.filter((comment) => (comment.id === match.params.comment_id))[0]}
             />
          )}/>
          <Route exact path="/createPost" component={CreatePost}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    );
  }
}

function mapStateToProps ({ posts, categories, spinner, comments }) {
  return {
    posts: Object.keys(posts).map((post) => posts[post]).filter((post) => (post.deleted === false)),
    categories,
    spinner,
    comments: Object.keys(comments).map((comment) => comments[comment]).filter((comment) => (comment.deleted === false))
  };
}

function mapDispatchToProps (dispatch) {
  return {
    spinnerOnOff: (data) => dispatch(spinnerOnOff(data)),
    getCommentCount: (data) => dispatch(getCommentCount(data)),
    getPostsCategoriesAndCommentsThunk: () => dispatch(getPostsCategoriesAndCommentsThunk())
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
