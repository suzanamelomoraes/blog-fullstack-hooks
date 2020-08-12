import React from 'react';

const Post = ({ id, title, body, comment }) => {
  return (
    <div>
      <h4>{title}</h4>
      <p>{body}</p>
      {comment && <p>{comment}</p>}
    </div>
  );
};

export default Post;
