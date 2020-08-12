import React, { useState } from 'react';
import Post from './Post';
import AddPost from './AddPost';

const Blog = () => {
  const [posts, setPosts] = useState([
    { title: 'Post One', body: 'This is my first post' },
    { title: 'Post Two', body: 'This is my second post' },
    { title: 'Post Three', body: 'This is my third post' },
  ]);

  const addPost = (post) => {
    const newPost = { title: post.title, body: post.body };
    const newPosts = [...posts, { newPost }];
    setPosts(newPosts);
  };

  const post = posts.map((post, index) => (
    <Post
      key={post.index}
      id={post.index}
      title={post.title}
      body={post.body}
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
