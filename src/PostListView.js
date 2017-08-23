import React from 'react';
import Post from './Post';

const PostListView = (props) => (
  <div>
    {props.posts.map((post) => (
      <Post post={post} key={post.id}/>
    ))}
  </div>
);

export default PostListView;
