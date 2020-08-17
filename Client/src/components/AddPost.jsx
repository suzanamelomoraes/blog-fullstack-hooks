import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    width: 400,
    border: '2px solid #000',
    borderRadius: 5,
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '90%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const AddPost = ({ addPost }) => {
  const { register, handleSubmit, errors, control } = useForm({
    mode: 'all',
  });
  const classes = useStyles();

  const onSubmit = (post, e) => {
    addPost(post);
    e.target.reset();
  };

  return (
    <div>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component='h1' variant='h5'>
            Add a post
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <Controller
              as={TextField}
              control={control}
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='title'
              label='Title'
              name='title'
              autoFocus
              inputProps={{ minLength: 2, maxLength: 30 }}
              innerRef={register({
                required: true,
              })}
              error={errors.title}
              defaultValue=''
            />

            <Controller
              as={TextField}
              control={control}
              variant='outlined'
              margin='normal'
              multiline
              rows={5}
              required
              inputProps={{ minLength: 2, maxLength: 400 }}
              fullWidth
              id='body'
              label='Post body'
              name='body'
              innerRef={register({
                required: true,
              })}
              defaultValue=''
            />

            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
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
