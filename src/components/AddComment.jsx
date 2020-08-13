import React from 'react';
import { useForm } from 'react-hook-form';

const AddComment = ({ addComment }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (comment, e) => {
    addComment(comment);
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='comment'>Add a comment</label>
          <input
            name='comment'
            placeholder='Add your comment here...'
            ref={register({ required: true })}
          />
          {errors.comment && 'Comment is required'}
        </div>
        <input type='submit' />
      </form>
    </div>
  );
};

export default AddComment;
