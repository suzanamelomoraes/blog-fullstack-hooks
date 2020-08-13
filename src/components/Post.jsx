import React, { useState } from 'react';
import AddComment from './AddComment';
import Comment from './Comments'

const Post = ({ id, title, body, removePost }) => {
  const [comments, setComments] = useState([
    { comment: 'Love it', postId: 1 },
    { comment: 'Amazing', postId: 1 },
    { comment: 'Weel done', postId: 2 },
  ]);
  const [form, setShowForm] = useState({ showForm: false });

  const addComment = ({ comment }) => {
    const newComments = [...comments, { comment, postId: id }];
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
      eachComment.postId === id && <Comment key={index} comment={eachComment.comment} />
  );

  return (
    <div>
      <h4>{title}</h4>
      <p>{body}</p>
      <button onClick={() => removePost(id)}>Delete post</button>
      <button onClick={showAddComment}>Add comment</button>
      {form.showForm && <AddComment addComment={addComment} />}

      {showComments}
    </div>
  );
};

export default Post;
