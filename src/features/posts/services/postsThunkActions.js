import { votePostUp, votePostDown, deletePost, createPost, updatePost } from './postsActions';

//other post thunks
export function votePostUpThunk (postId) {
  return function(dispatch, getState, ReadableApi) {
    return ReadableApi.votePostUp(postId)
      .then((post) => {
        dispatch(votePostUp(post.id));
    });
  };
};

export function votePostDownThunk (postId) {
  return function(dispatch, getState, ReadableApi) {
    return ReadableApi.votePostDown(postId)
      .then((post) => {
        dispatch(votePostDown(post.id));
    });
  };
};

export function deletePostThunk (postId) {
  return function(dispatch, getState, ReadableApi) {
    return ReadableApi.deletePost(postId)
      .then(() => {
        dispatch(deletePost(postId))
        return postId;
    });
  };
};

export function createPostThunk (post) {
  return function(dispatch, getState, ReadableApi) {
    return ReadableApi.createPost(post)
      .then((post) => {
        dispatch(createPost(post))
    })
  };
};

export function updatePostThunk (update) {
  return function(dispatch, getState, ReadableApi) {
    return ReadableApi.updatePost(update.body, update.id)
      .then((post) => {
        dispatch(updatePost(post))
    });
  };
};
