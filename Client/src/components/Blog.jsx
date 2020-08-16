import React, { useState, useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { Modal, Button } from '@material-ui/core';
import axios from 'axios';
import AddPost from './AddPost';
import BlogTitles from './BlogTitles';
import Post from './Post';

const Blog = () => {
  const history = useHistory();

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
    <div>
      <div>
        <Route path='/'>
          <BlogTitles posts={posts} />

          <Button variant='contained' color='primary' onClick={showAddPost}>
            Add post
          </Button>
        </Route>
        <Modal open={showForm} onClose={closeAddPost}>
          <AddPost addPost={addPost} />
        </Modal>
      </div>
      <div>
        <Route path='/posts/:id'>
          <Post removePost={removePost} />
        </Route>
      </div>
    </div>
  );
};

export default Blog;
