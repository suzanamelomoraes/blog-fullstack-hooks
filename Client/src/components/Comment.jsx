import React from 'react';

const Comment = ({ comment, removeComment }) => {
  return (
    <div>
      {comment.comment}
      <button onClick={() => removeComment(comment.id)}>Delete comment</button>
    </div>
  );
};

export default Comment;
