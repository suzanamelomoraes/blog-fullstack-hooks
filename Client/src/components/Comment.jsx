import React from 'react';
import { Button } from '@material-ui/core';
import moment from 'moment';

const Comment = ({ comment, removeComment }) => {
  return (
    <div>
      {comment.comment}
      <p>{moment(comment.date_created).format('MMM Do YY')}</p>
      <Button color='secondary' onClick={() => removeComment(comment.id)}>
        Delete comment
      </Button>
    </div>
  );
};

export default Comment;
