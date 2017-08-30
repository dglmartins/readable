import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import CreatePost from './features/posts/CreatePost';
import PostListView from './features/posts/PostListView';
import PostView from './features/posts/PostView';
import Header from './features/header';
import UpdatePost from './features/posts/UpdatePost';
import UpdateComment from './features/posts/comments/UpdateComment';
import Spinner from './features/spinner';
import NoMatch from './features/noMatch';
import { spinnerOnOff } from './features/spinner/services/spinnerActions';
import { getCommentCount } from './features/posts/services/postsActions';
import { getPostsCategoriesAndCommentsThunk } from './services/getAllThunkActions';

/**
* @description App component. Uses constructor to get all posts, comments and categories from api into the app. Displays a Header, a conditional spinner, and uses Switch to navigate all routes and to 404 if wrong path or server error. Uses specific Routes to call PostListView, PostView, UpdatePost, UpdateComment, CreatePost and NoMatch components depending on path. App gets called in index.js to display App in root div. Passes categories, comments and posts to PostListView, passes a single post to PostView and UpdatePost, passes a single comment to UpdateComment.
*/

class App extends Component {

  /**
  * @description - turns on spinner in Redux store with spinnerOnOff action. Then gets all posts, categories and comments with thunk action that uses Promise.all. Then if no error,  adds a comment count property to each post in Redux store, then turns off spinner. If error with the api (such as server not started), redirects to '/ServerError', which renders the NoMatch component.
  */
  constructor(props) {
    super(props);
    //synchronous dispatch sets spinnerOnOff to true in Redux store (showing spinner)
    props.spinnerOnOff(true);

    //multiple asynchronous dispatches resolve with Promise.all and return an array of objects containing each post id and the comment count.
    props.getPostsCategoriesAndCommentsThunk().then((postIdAndCommentCountArray) => {

      //multiple synchronous dispatches add comment count property to each post in Redux store.
      for (const post of postIdAndCommentCountArray) {
        props.getCommentCount(post);
      }

      //synchronous dispatch sets spinnerOnOff to false in Redux store (hiding spinner)
      props.spinnerOnOff(false);

    //catches api error
    }).catch((error) => {

      //synchronous dispatch sets spinnerOnOff to false in Redux store (hiding spinner)
      props.spinnerOnOff(false);

      //redirects to /ServerError, which renders the NoMatch component
      props.history.push('/ServerError');
    });
  }

  render() {

    return (
      <div>
        {/* Header always shows */}

        <Header categories={this.props.categories}/>


        {/* Renders Spinner if spinner: {spinnerOn: true} in Redux store */}
        {this.props.spinner.spinnerOn && (
          <Spinner/>
        )}

        {/* Switch for all other routes */}
        <Switch>

          {/* Renders PostListView in root view, passing all posts in mapStateToProps and category="all".*/}
          <Route exact path='/' render={() => (
             <PostListView
               category="all"
               posts={this.props.posts}
               comments={this.props.comments}
             />

          )}/>

          {/* Creates a route for each category (Default creates 3 Routes /react, /redux, /udacity). Code handles more categories if added to server code, that is why categories.map, not hard coded 3 Routes. For each /category Route Renders PostListView, passing posts in mapStateToProps filtered by the category and passing the name of the category */}
          {this.props.categories.map((category) => (
            <Route
              key={category.name}
              exact path={`/${category.name}`}
              render={() => (
                <PostListView
                  category={category.name}
                  posts={this.props.posts.filter((post) => (post.category === category.name))}
                  comments={this.props.comments}
                />)
              }
            />
          ))}

          {/* Creates a route for each category that dynamically take a post_id param.(Default creates 3 Routes /react/:post_id, /redux/:post_id, /udacity/:post_id). Code handles more categories if added to server code, that is why categories.map, not hard coded 3 dynamic Routes. For each /category Route Renders PostView, passing comments of that post and a single post which is the first and only element (if post exists) of posts in mapStateToProps filtered by post.category === category.name and post.id === match.params.post_id */}
          {this.props.categories.map((category) => (
            <Route
              key={category.name}
              exact path={`/${category.name}/:post_id`}
              render={({ match }) => (
                <PostView
                  post={this.props.posts.filter((post) => (post.id === match.params.post_id && post.category === category.name))[0]}
                  comments={this.props.comments.filter((comment) => (comment.parentId === match.params.post_id))}
                />)
              }
            />
          ))}

          {/* Renders UpdatePost in /updatePost/:post_id, passing in a single post which is the first and only element (if post exists) of posts in mapStateToProps filtered by the post.id === match.params.post_id */ }
          <Route exact path='/updatePost/:post_id' render={({ match }) => (
             <UpdatePost
               post={this.props.posts.filter((post) => (post.id === match.params.post_id))[0]}/>
          )}/>

          {/* Renders UpdateComment in /updateComment/:comment_id, passing in a single comment which is the first and only element (if comment exists) of comments in mapStateToProps filtered by the comment.id === match.params.post_id */ }
          <Route exact path='/updateComment/:comment_id' render={({ match }) => (
             <UpdateComment
               comment={this.props.comments.filter((comment) => (comment.id === match.params.comment_id))[0]}
             />
          )}/>

          {/* Renders CreatePost in /createPost */}
          <Route exact path="/createPost" render={() => (
             <CreatePost categories={this.props.categories}/>
          )}/>

          {/* Renders NoMatch in all non-matching paths */}
          <Route component={NoMatch}/>
        </Switch>
      </div>
    );
  }
}

//maps posts, categories, spinner and comments to props as arrays. Note that although posts and comments are returned as object of arrays from api, I have stored them as objects of objects in Redux state
function mapStateToProps ({ posts, categories, spinner, comments }) {
  return {
    posts: Object.keys(posts).map((post) => posts[post]).filter((post) => (post.deleted === false)),
    categories,
    spinner,
    comments: Object.keys(comments).map((comment) => comments[comment])
  };
}

//maps dispatch of spinnerOnOff, getCommentCount and getPostsCategoriesAndCommentsThunk actions to props
function mapDispatchToProps (dispatch) {
  return {
    spinnerOnOff: (data) => dispatch(spinnerOnOff(data)),
    getCommentCount: (data) => dispatch(getCommentCount(data)),
    getPostsCategoriesAndCommentsThunk: () => dispatch(getPostsCategoriesAndCommentsThunk())
  };
}

//uses withRouter and connect mapStateToProps, mapDispatchToProps to export App
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
