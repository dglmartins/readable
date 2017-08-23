import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Post from './Post';


class PostListView extends Component {

  render() {
    return (
      <div>
        {this.props.posts.map((post) => (
          <Post post={post} key={post.id}/>
        ))}
      </div>
    );
  }
};

function mapStateToProps ({ posts }) {
  return {
    posts: Object.keys(posts).map((post) => posts[post])
  };
}

export default withRouter(connect(mapStateToProps)(PostListView));
