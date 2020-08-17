import React, { useState, useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { Modal, Button, Container, Grid, Paper } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import AddPost from './AddPost';
import BlogTitles from './BlogTitles';
import Post from './Post';
import Header from './Header';

const AddButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
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
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  blog: {
    display: 'flex',
    flexDirection: 'row',
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: 1,
  },
}));

const Blog = () => {
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    getPosts();
  }, []);

  const [posts, setPosts] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const getPosts = () => {
    axios
      .get('http://localhost:3002/posts')
      .then((res) => setPosts(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  const addPost = ({ title, body }) => {
    axios
      .post('http://localhost:3002/post', { title, body })
      .then((res) => getPosts())
      .catch((err) => {
        console.log(err);
      });

    closeAddPost();
  };

  const removePost = (id) => {
    axios
      .delete('http://localhost:3002/comments', { data: { id: id } })
      .then((res) =>
        axios.delete('http://localhost:3002/post', { data: { id: id } })
      )
      .then((res) => getPosts())
      .catch((err) => {
        console.log(err);
      })
      .then(() => setTimeout(() => history.replace('/'), 700));
  };

  const showAddPost = () => {
    setShowForm(true);
  };

  const closeAddPost = () => {
    setShowForm(false);
  };

  return (
    <>
      <Container maxWidth='lg'>
        <Header />
        <Grid container className={classes.blog}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Route path='/'>
                <Grid>
                  <BlogTitles posts={posts} />
                </Grid>

                <Grid>
                  <AddButton
                    fullWidth
                    variant='outlined'
                    color='primary'
                    onClick={showAddPost}
                  >
                    Add post
                  </AddButton>
                </Grid>
              </Route>
            </Paper>
            <Modal open={showForm} onClose={closeAddPost}>
              <AddPost addPost={addPost} />
            </Modal>
          </Grid>
          <Grid item xs={9}>
            <Route path='/posts/:id'>
              <Post removePost={removePost} />
            </Route>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Blog;
