import React, { useState } from 'react';
import Post from './Post';
import AddPost from './AddPost';

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

  const post = posts.map((post, index) => (
    <Post
      key={index}
      id={index}
      title={post.title}
      body={post.body}
      removePost={removePost}
    />
  ));

  return (
    <div>
      {post}
      <AddPost addPost={addPost} />
    </div>
  );
};

export default Blog;
