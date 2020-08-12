import React, { useState } from 'react';

const Blog = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Post One', body: 'This is my first post' },
    { id: 2, title: 'Post Two', body: 'This is my second post' },
    { id: 3, title: 'Post Three', body: 'This is my third post' },
  ]);
  return <div>Post</div>;
};

export default Blog;
