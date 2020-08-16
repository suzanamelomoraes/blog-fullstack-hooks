import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Comment from './Comment';
import AddComment from './AddComment';

const Comments = ({ postId }) => {
  const history = useHistory();

  useEffect(() => {
    getComments();
  }, [postId]);

  const [comments, setComments] = useState([]);
  const [form, setShowForm] = useState({ showForm: false });

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

    const updateFormStatus = { ...form };
    updateFormStatus.showForm = false;
    setShowForm(updateFormStatus);
  };

  const showAddComment = () => {
    const updateFormStatus = { ...form };
    updateFormStatus.showForm = true;
    setShowForm(updateFormStatus);
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
    <Comment
      key={index}
      id={eachComment.id}
      comment={eachComment.comment}
      removeComment={removeComment}
    />
  ));

  return (
    <div>
      <button onClick={showAddComment}>Add comment</button>
      {form.showForm && <AddComment addComment={addComment} />}

      {showComments}
    </div>
  );
};

export default Comments;
