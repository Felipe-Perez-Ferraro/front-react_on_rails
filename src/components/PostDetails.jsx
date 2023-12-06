import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPostsDetails } from '../redux/posts/postsSlice';

function PostDetails() {
  const { post } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPostsDetails(id));
  }, [dispatch, id]);

  return (
    <section className="flex justify-center my-5">
      <article className="border border-slate-900 rounded bg-slate-100 p-2 w-72">
        <h2 className="text-3xl font-bold text-center mb-4">{post.title}</h2>
        <p>{post.body}</p>
      </article>
    </section>
  );
}

export default PostDetails;
