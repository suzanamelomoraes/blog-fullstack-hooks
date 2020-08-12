import React from 'react';

const Post = ({ id, title, body, comment, removePost }) => {
  return (
    <div>
      <h4>{title}</h4>
      <p>{body}</p>
      <button onClick={() => removePost(id)}>Delete post</button>
      {comment && <p>{comment}</p>}
    </div>
  );
};

export default Post;
