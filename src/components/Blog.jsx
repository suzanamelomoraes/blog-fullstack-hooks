import React, { useState } from 'react';
import Post from './Post';

const Blog = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Post One', body: 'This is my first post' },
    { id: 2, title: 'Post Two', body: 'This is my second post' },
    { id: 3, title: 'Post Three', body: 'This is my third post' },
  ]);

  const post = posts.map((post) => (
    <Post key={post.id} id={post.id} title={post.title} body={post.body} />
  ));

  return <div>{post}</div>;
};

export default Blog;
