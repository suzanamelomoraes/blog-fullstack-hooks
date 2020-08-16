import React from 'react';
import moment from 'moment';

const Comment = ({ comment, removeComment }) => {
  return (
    <div>
      {comment.comment}
      <p>{moment(comment.date_created).format('MMM Do YY')}</p>
      <button onClick={() => removeComment(comment.id)}>Delete comment</button>
    </div>
  );
};

export default Comment;
