import { request } from './api';

export const addPost = async (newPost: Post) => {
  return request('posts', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newPost),
  });
};

export const getPosts = async () => {
  return request('posts', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });
};

export const getPostDetails = async (postId: number) => {
  return request(`posts/${postId}?_embed=comments`);
};

export const deletePost = async (postId: number) => {
  return request(`posts/${postId}`, { method: 'DELETE' });
};
