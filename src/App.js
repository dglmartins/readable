import React, { Component } from 'react';
import './App.css';
import CreatePost from './CreatePost';
import PostListView from './PostListView';
import PostView from './PostView';
import Header from './Header';
import EditPost from './EditPost'
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import { spinnerOnOff } from './actions/spinner';
import Spinner from './Spinner';
import NoMatch from './NoMatch';
import { getPostsCategoriesAndCommentsThunk } from './actions/thunkActions';

class App extends Component {

  constructor(props) {
    super(props);
    //synchronous dispatch
    props.spinnerOnOff(true);
    //multiple asynchronous dispatches
    props.getPostsCategoriesAndCommentsThunk().then((postIdAndCommentCountArray) => {
      //synchronous dispatch
      props.spinnerOnOff(false);
    });
  }

  render() {
    console.log(this.props)

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
          <Route exact path='/editPost/:post_id' render={({ match }) => (
             <EditPost
               post={this.props.posts.filter((post) => (post.id === match.params.post_id))[0]}/>
          )}/>
          <Route exact path="/createPost" component={CreatePost}/>
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
    comments: Object.keys(comments).map((comment) => comments[comment])
  };
}

function mapDispatchToProps (dispatch) {
  return {
    spinnerOnOff: (data) => dispatch(spinnerOnOff(data)),
    getPostsCategoriesAndCommentsThunk: () => dispatch(getPostsCategoriesAndCommentsThunk())
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
