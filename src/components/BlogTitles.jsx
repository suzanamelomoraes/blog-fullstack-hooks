import React from 'react';

const BlogTitles = ({ posts }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <h2 key={index}>{post.title}</h2>
      ))}
    </div>
  );
};

export default BlogTitles;
