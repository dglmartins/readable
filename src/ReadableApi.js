const api = 'http://localhost:5001';

let token = localStorage.token;

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  'Authorization': token
};

export const getAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .catch((error) => console.log(error));

export const getPostsOfCategory = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())
    .catch((error) => console.log(error));

export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .catch((error) => console.log(error));

export const createPost = (body) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(res => res.json())
    .catch((error) => console.log(error));

export const getPost = (postId) =>
  fetch(`${api}/posts/${postId}`, { headers })
    .then(res => res.json())
    .catch((error) => console.log(error));

export const upVotePost = (postId) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-type': 'application/json'
    },
    body: JSON.stringify({option: "upVote"})
  })
    .then(res => res.json())
    .catch((error) => console.log(error));

export const downVotePost = (postId) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-type': 'application/json'
    },
    body: JSON.stringify({option: "downVote"})
  })
    .then(res => res.json())
    .catch((error) => console.log(error));

export const updatePost = (body, postId) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(res => res.json())
    .catch((error) => console.log(error));

export const removePost = (postId) =>
  fetch(`${api}/posts/${postId}`, { method: 'DELETE', headers })
    .then(res => res.json())
    .catch((error) => console.log(error));

export const getCommentsOfPost = (postId) =>
  fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json())
    .catch((error) => console.log(error));

export const createComment = (body) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(res => res.json())
    .catch((error) => console.log(error));

export const getComment = (commentId) =>
  fetch(`${api}/comments/${commentId}`, { headers })
  .then(res => res.json())
  .catch((error) => console.log(error));

export const upVoteComment = (commentId) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-type': 'application/json'
    },
    body: JSON.stringify({option: "upVote"})
  })
    .then(res => res.json())
    .catch((error) => console.log(error));

export const downVoteComment = (commentId) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-type': 'application/json'
    },
    body: JSON.stringify({option: "downVote"})
  })
    .then(res => res.json())
        .catch((error) => console.log(error));

export const updateComment = (body, commentId) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(res => res.json())
    .catch((error) => console.log(error));

export const removeComment = (commentId) =>
  fetch(`${api}/comments/${commentId}`, { method: 'DELETE', headers })
    .then(res => res.json())
    .catch((error) => console.log(error));
