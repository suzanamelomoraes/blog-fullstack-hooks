import React, { useState } from 'react';
import Post from './Post';
import AddPost from './AddPost';

const Blog = () => {
  const [posts, setPosts] = useState([
    { title: 'Post One', body: 'This is my first post', comment: 'Loved it!' },
    { title: 'Post Two', body: 'This is my second post', comment: '' },
    { title: 'Post Three', body: 'This is my third post', comment: '' },
  ]);

  const addPost = ({ title, body, comment }) => {
    const newPosts = [...posts, { title, body, comment }];
    setPosts(newPosts);
  };

  const post = posts.map((post, index) => (
    <Post
      key={index}
      id={index}
      title={post.title}
      body={post.body}
      comment={post.comment}
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
