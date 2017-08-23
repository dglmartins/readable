export const ADD_COMMENTS_TO_STORE = 'ADD_COMMENTS_TO_STORE';

export function addCommentsToStore(comments) {
  return {
    type: ADD_COMMENTS_TO_STORE,
    comments
  }
};
