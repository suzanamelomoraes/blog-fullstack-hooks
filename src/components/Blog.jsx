import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Posts from './Posts';
import AddPost from './AddPost';
import BlogTitles from './BlogTitles';

const Blog = () => {
  const [posts, setPosts] = useState([
    { title: 'Post One', body: 'This is my first post' },
    { title: 'Post Two', body: 'This is my second post' },
    { title: 'Post Three', body: 'This is my third post' },
  ]);

  const addPost = ({ title, body }) => {
    const newPosts = [...posts, { title, body }];
    setPosts(newPosts);
  };

  const removePost = (id) => {
    const newPosts = [...posts];
    newPosts.splice(id, 1);
    setPosts(newPosts);
  };

  return (
    <div>
      <BlogTitles posts={posts} />
      <Posts posts={posts} removePost={removePost} />
      <AddPost addPost={addPost} />
    </div>
  );
};

export default Blog;
