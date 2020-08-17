import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Comment from './Comment';
import AddComment from './AddComment';

const AddButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 12,
    padding: '6px 12px',
    lineHeight: 1.5,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

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
      .then(() => setTimeout(() => history.replace('/'), 700));
  };

  const showComments = comments.map((eachComment, index) => (
    <Comment key={index} comment={eachComment} removeComment={removeComment} />
  ));

  return (
    <div>
      <Grid>
        <Grid container direction='column' alignItems='flex-start'>
          <AddButton size='small' color='primary' onClick={showAddComment}>
            Add comment
          </AddButton>
        </Grid>
        {showForm && (
          <AddComment addComment={addComment} setShowForm={setShowForm} />
        )}

        <Grid>{showComments}</Grid>
      </Grid>
    </div>
  );
};

export default Comments;
