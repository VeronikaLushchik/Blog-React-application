import React, { useEffect, useState } from 'react';
import { addPost, deletePost, getPosts } from '../../api/posts';
import './PostsList.scss';
import { NewPostForm } from '../NewPostForm';

type Props = {
  selectedPostId: number;
  selectPost: (postId :number) => void;
};

export const PostsList: React.FC<Props> = (props) => {
  const { selectedPostId, selectPost } = props;
  const [posts, setPosts] = useState([] as Post[]);

  useEffect(() => {
    getPosts()
      .then(response => setPosts(response));
  }, []);

  const handleChange = (id: number) => {
    if (selectedPostId === id) {
      selectPost(0);
    } else {
      selectPost(id);
    }
  };

  const addNewPost = (newPost: Partial<Post>) => {
    addPost(newPost as Post)
      .then(() => getPosts())
      .then(response => setPosts(response));
  };

  const deletePostFromServer = (postId: number) => {
    deletePost(postId)
      .then(() => getPosts())
      .then(response => setPosts(response));
  };

  return (
    <>
      <div className="PostsList">
        <h2>Posts:</h2>
        <NewPostForm
          onAdd={addNewPost}
        />

        <ul className="PostsList__list">
          {posts.map(post => (
            <li className="PostsList__item" key={post.id}>
              <div>
                {post.title}
              </div>
              <div className="PostsList__buttons">
                <button
                  type="button"
                  className="PostsList__button button"
                  onClick={() => deletePostFromServer(post.id)}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="PostsList__button button"
                  onClick={() => handleChange(post.id)}
                >
                  {selectedPostId === post.id
                    ? 'Close'
                    : 'Open' }
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
