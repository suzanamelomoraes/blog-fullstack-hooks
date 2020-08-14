import React, { useState } from 'react';
import AddComment from './AddComment';

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([
    { comment: 'Love it', postId: 1 },
    { comment: 'Amazing', postId: 1 },
    { comment: 'Weel done', postId: 2 },
  ]);
  const [form, setShowForm] = useState({ showForm: false });

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

  const showComments = comments.map(
    (eachComment, index) =>
      eachComment.postId === postId && <p key={index}>{eachComment.comment}</p>
  );

  return (
    <div>
      <button onClick={showAddComment}>Add comment</button>
      {form.showForm && <AddComment addComment={addComment} />}

      {showComments}
    </div>
  );
};

export default Comments;
