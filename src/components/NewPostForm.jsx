import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPost, fetchPosts } from '../redux/posts/postsSlice';

function NewPostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createPost({ title, body }));
    await dispatch(fetchPosts());
    navigate('/');
  };

  return (
    <div>
      <h2>New post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="titleInput"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <textarea
            id="bodyInput"
            value={body}
            placeholder="Body"
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Create post</button>
        </div>
      </form>
    </div>
  );
}

export default NewPostForm;
