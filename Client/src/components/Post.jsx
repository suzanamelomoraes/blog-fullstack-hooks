import React, { useState, useEffect } from 'react';
import Comment from './Comments';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Post = ({ removePost }) => {
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3002/posts/${id}`)
      .then((res) => setPost(res.data[0]))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const [post, setPost] = useState({});

  return (
    <div>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      <button onClick={() => removePost(post.id)}>Delete post</button>
      <Comment postId={id} />
    </div>
  );
};

export default Post;
