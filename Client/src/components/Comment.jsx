import React from 'react';

const Comment = ({ id, comment, removeComment }) => {
  return (
    <div>
      {comment}
      <button onClick={() => removeComment(id)}>Delete comment</button>
    </div>
  );
};

export default Comment;
