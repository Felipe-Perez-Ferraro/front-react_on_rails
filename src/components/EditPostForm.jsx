import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  editPost,
  fetchPosts,
  fetchPostsDetails,
} from '../redux/posts/postsSlice';

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
    <section className="flex justify-center my-5">
      <article className="max-w-lg flex flex-col gap-y-5 w-full">
        <h2 className="font-bold text-xl text-center">Edit post</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-3 border border-slate-950 p-2 bg-slate-200"
        >
          <div>
            <input
              type="text"
              id="titleInput"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              className="border border-slate-950 rounded p-1 outline-none w-full"
              required
            />
          </div>
          <div>
            <textarea
              id="bodyInput"
              value={body}
              placeholder="Body"
              onChange={(e) => setBody(e.target.value)}
              className="border border-slate-950 rounded p-1 outline-none w-full"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-600 text-white font-semibold px-2 py-1"
            >
              Update post
            </button>
          </div>
        </form>
      </article>
    </section>
  );
}

export default EditPostForm;
