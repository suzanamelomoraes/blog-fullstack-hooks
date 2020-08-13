import React from 'react';
import {Link} from 'react-router-dom';

const BlogTitles = ({ posts }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <h2 key={index}> <Link to={`post/${index}`} >{post.title}</Link> </h2>
      ))}
    </div>
  );
};

export default BlogTitles;
