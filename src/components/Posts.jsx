import React from 'react';
import Post from './Post';

const Posts = ({ posts, removePost }) => {
  const post = posts.map((post, index) => (
    <Post
      key={index}
      id={index}
      title={post.title}
      body={post.body}
      removePost={removePost}
    />
  ));
  return <div>{post}</div>;
};

export default Posts;
