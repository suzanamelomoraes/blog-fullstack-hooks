import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, List, ListItemText, Divider } from '@material-ui/core';

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
  },
});

const BlogTitles = ({ posts }) => {
  const classes = useStyles();

  const postTitles = posts.map((post) => (
    <p key={post.id}>
      {' '}
      <Link className={classes.link} to={`/posts/${post.id}`}>
        {post.title}
      </Link>{' '}
      <Divider />
    </p>
  ));

  return (
    <div>
      <Paper elevation={0}>
        <List>
          <ListItemText primary={postTitles} />
        </List>
      </Paper>
    </div>
  );
};

export default BlogTitles;
