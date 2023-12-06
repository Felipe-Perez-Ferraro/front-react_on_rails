import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editPost, fetchPosts, fetchPostsDetails } from '../redux/posts/postsSlice';

function EditPostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const post = useSelector((state) => state.posts.post);

  useEffect(() => {
    dispatch(fetchPostsDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    setTitle(post.title || '');
    setBody(post.body || '');
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(editPost({ id, postData: { title, body } }));
    await dispatch(fetchPosts());
    navigate('/');
  };

  return (
    <div>
      <h2>Edit post</h2>
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
          <button type="submit">Update post</button>
        </div>
      </form>
    </div>
  );
}

export default EditPostForm;
