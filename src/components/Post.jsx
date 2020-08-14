import React, { useState, useEffect } from 'react';
import Comment from './Comments';
import Axios from 'axios';

const Post = ({ removePost, match }) => {
  useEffect(() => {
    Axios.get(`http://localhost:3002/posts/${match.params.id}`)
      .then(
        (res) => setPost(res.data[0])
        // console.log(res.data[0])
      )
      .catch((err) => {
        console.log(err);
      });
  }, [match.params.id]);

  const [post, setPost] = useState({});



  return (
    <div>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      <button onClick={() => removePost(post.id)}>Delete post</button>
    <Comment postId={post.id} />
    </div>
  );
};

export default Post;
