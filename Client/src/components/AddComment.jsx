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
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const AddComment = ({ addComment }) => {
  const { register, handleSubmit, errors, control } = useForm({
    mode: 'all',
  });
  const classes = useStyles();

  const onSubmit = (comment, e) => {
    addComment(comment);
    e.target.reset();
  };

  return (
    <div>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component='h1' variant='h5'>
            Add a comment
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <Controller
              as={TextField}
              control={control}
              variant='outlined'
              margin='normal'
              multiline
              rows={4}
              required
              inputProps={{ minLength: 2, maxLength: 255 }}
              fullWidth
              id='comment'
              label='Comment'
              name='comment'
              autoFocus
              innerRef={register({
                required: true,
              })}
              error={errors.title}
              defaultValue=''
            />

            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Add comment
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default AddComment;
