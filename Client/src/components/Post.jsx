import React, { useState, useEffect } from 'react';
import Comment from './Comments';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import moment from 'moment';

const Post = ({ removePost }) => {
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3002/post/${id}`)
      .then((res) => setPost(res.data[0]))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const [post, setPost] = useState({});
  console.log('post', post);

  return (
    <div>
      <h4>{post.title}</h4>
      <p>{moment(post.date_created).format('MMM Do YY')}</p>
      <p>{post.body}</p>
      <button onClick={() => removePost(id)}>Delete post</button>
      <Comment postId={id} />
    </div>
  );
};

export default Post;
