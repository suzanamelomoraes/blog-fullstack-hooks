import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const AddPost = ({ addPost }) => {
  const { register, handleSubmit, errors } = useForm();
  const classes = useStyles();

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
            ref={register({
              required: 'Title is required.',
              minLength: {
                value: 2,
                message: 'Title must exceed 2 characters',
              },
              maxLength: {
                value: 30,
                message: 'Your title cannot exceed 30 characters',
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name='title'
            render={({ messages }) => {
              console.log('messages', messages);
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                  ))
                : null;
            }}
          />
        </div>
        <div>
          <label htmlFor='Body'>Body</label>
          <textarea
            name='body'
            placeholder='Tell your thoughts...'
            ref={register({
              required: 'Title is required.',
              minLength: {
                value: 10,
                message: 'Title must exceed 10 characters',
              },
              maxLength: {
                value: 400,
                message: 'Your title cannot exceed 400 characters',
              },
            })}
          />

          <ErrorMessage
            errors={errors}
            name='body'
            render={({ messages }) => {
              console.log('messages', messages);
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                  ))
                : null;
            }}
          />
        </div>

        <input type='submit' />
      </form>

      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component='h1' variant='h5'>
            Add a post
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoFocus
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
            />

            <Button
              type='submit'
              fullWidth
              variant='contained'
              className={classes.submit}
            >
              Add post
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default AddPost;
