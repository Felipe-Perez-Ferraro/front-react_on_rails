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
    <section className="flex justify-center my-5">
      <article className="max-w-lg flex flex-col gap-y-5 w-full">
        <h2 className="font-bold text-xl text-center">New post</h2>
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
            <button type="submit" className="bg-green-600 text-white font-semibold px-2 py-1">
              Create post
            </button>
          </div>
        </form>
      </article>
    </section>
  );
}

export default NewPostForm;
