import React from 'react';
import { useForm } from 'react-hook-form';

const AddPost = ({ addPost }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (post, e) => {
    addPost(post);
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='title'>Title</label>
          <input
            name='title'
            placeholder='Add your title'
            ref={register({ required: true })}
          />
          {errors.title && 'Title is required'}
        </div>
        <div>
          <label htmlFor='Body'>Body</label>
          <textarea
            name='body'
            placeholder='Tell your thoughts...'
            ref={register({ required: true })}
          />
          {errors.body && 'Title is required'}
        </div>
        <input type='submit' />
      </form>
    </div>
  );
};

export default AddPost;
