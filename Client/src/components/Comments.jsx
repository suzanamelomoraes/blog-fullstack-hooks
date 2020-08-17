import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import axios from 'axios';
import Comment from './Comment';
import AddComment from './AddComment';

const Comments = ({ postId }) => {
  const history = useHistory();

  useEffect(() => {
    getComments();
  }, [postId]);

  const [comments, setComments] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const getComments = () => {
    axios
      .get(`http://localhost:3002/comments/${postId}`)
      .then((res) => setComments(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  const addComment = ({ comment }) => {
    axios
      .post('http://localhost:3002/comment', { postId, comment })
      .then((res) => getComments())
      .catch((err) => {
        console.log(err);
      });

    setShowForm(false);
  };

  const showAddComment = () => {
    setShowForm(true);
  };

  const removeComment = (id) => {
    axios
      .delete(`http://localhost:3002/comment/${id}`, { data: { id: id } })
      .then((res) => getComments())
      .catch((err) => {
        console.log(err);
      })
      .then(() => setTimeout(() => history.replace(`/`), 700));
  };

  const showComments = comments.map((eachComment, index) => (
    <Comment key={index} comment={eachComment} removeComment={removeComment} />
  ));

  return (
    <div>
      <Button color="primary" onClick={showAddComment}>Add comment</Button>
      {showForm && <AddComment addComment={addComment} />}

      {showComments}
    </div>
  );
};

export default Comments;
