import React from 'react';
import {
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
  Grid,
} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import moment from 'moment';

const DelButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 10,
    padding: '6px 12px',
    lineHeight: 1.5,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
    },
  },
})(Button);

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 5,
    marginBottom: 5,
  },
});

const Comment = ({ comment, removeComment }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container>
          <Grid xs={10}>
            <Typography variant='body2' component='p' align='left'>
              - {comment.comment}
            </Typography>
          </Grid>
          <Grid xs={2}>
            <Typography
              variant='body2'
              component='p'
              color='textSecondary'
              gutterBottom
            >
              {moment(comment.date_created).format('MMM Do YY')}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <Grid container direction='column' alignItems='flex-end'>
        <CardActions>
          <DelButton
            size='small'
            color='secondary'
            onClick={() => removeComment(comment.id)}
          >
            Delete this comment
          </DelButton>
        </CardActions>
      </Grid>
    </Card>
  );
};

export default Comment;
