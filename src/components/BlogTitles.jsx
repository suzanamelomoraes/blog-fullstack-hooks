import React from 'react';
import { Link } from 'react-router-dom';

const BlogTitles = ({ posts }) => {
  const postTitles = posts.map((post) => (
    <h2 key={post.id}>
      {' '}
      <Link to={`/posts/${post.id}`}>{post.title}</Link>{' '}
    </h2>
  ));

  return <div>{postTitles}</div>;
};

export default BlogTitles;
