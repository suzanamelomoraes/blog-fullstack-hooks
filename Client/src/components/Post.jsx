import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Typography, Grid, Paper, Divider } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import moment from 'moment';
import Comments from './Comments';

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

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 14,
  },
  boxtitle: {
    marginBottom: 20,
  },
  body: {
    marginTop: 20,
    marginBottom: 20,
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

const Post = ({ removePost }) => {
  const classes = useStyles();
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3002/post/${id}`)
      .then((res) => setPost(res.data[0]))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const [post, setPost] = useState({});

  return (
    <div>
      <Grid container className={classes.root}>
        <Paper className={classes.paper}>
          <Grid>
            <Typography
              className={classes.title}
              color='textSecondary'
              gutterBottom
              align='left'
            >
              {moment(post.date_created).format('MMM Do YY')}
            </Typography>
          </Grid>
          <Grid className={classes.boxtitle}>
            <Typography variant='h4' component='h2'>
              {post.title}
            </Typography>
          </Grid>
          <Divider />
          <Grid className={classes.body}>
            <Typography component='p' align='left'>
              {post.body}
            </Typography>
          </Grid>
          <Grid container direction='column' alignItems='flex-end'>
            <DelButton
              size='small'
              color='secondary'
              onClick={() => removePost(id)}
            >
              Delete this post
            </DelButton>
          </Grid>
          <Divider />
          <Grid>
            <Comments postId={id} />
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};

export default Post;
