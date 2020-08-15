import React, { useState, useEffect } from 'react';
import AddComment from './AddComment';
import axios from 'axios';

const Comments = ({ postId }) => {
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
    const newComments = [...comments, { comment, postId }];
    setComments(newComments);
    const updateFormStatus = { ...form };
    updateFormStatus.showForm = false;
    setShowForm(updateFormStatus);
  };

  const showAddComment = () => {
    const updateFormStatus = { ...form };
    updateFormStatus.showForm = true;
    setShowForm(updateFormStatus);
  };

  const showComments = comments.map((eachComment, index) => (
    <p key={index}>{eachComment.comment}</p>
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
