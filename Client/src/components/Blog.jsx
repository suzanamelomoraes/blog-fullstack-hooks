import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddPost from './AddPost';
import BlogTitles from './BlogTitles';
import Post from './Post';
import axios from 'axios';

const Blog = () => {
  useEffect(() => {
    getPosts();
  }, []);

  const [posts, setPosts] = useState([]);

  const [form, setShowForm] = useState({ showForm: false });

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
      .post('http://localhost:3002/posts', { title, body })
      .then((res) => getPosts())
      .catch((err) => {
        console.log(err);
      });
  };

  const removePost = (id) => {
    axios
      .delete('http://localhost:3002/comments', { data: { id: id } })
      .then((res) =>
        axios.delete('http://localhost:3002/posts', { data: { id: id } })
      )
      .then((res) => getPosts())
      .catch((err) => {
        console.log(err);
      });
  };

  const showAddPost = () => {
    const updateFormStatus = { ...form };
    updateFormStatus.showForm = true;
    setShowForm(updateFormStatus);
  };

  return (
    <div>
      <Router>
        <BlogTitles posts={posts} />

        <button onClick={showAddPost}>Add post</button>
        {form.showForm && <AddPost addPost={addPost} />}

        <Route
          path='/posts/:id'
          render={(props) => <Post {...props} removePost={removePost} />}
        />
      </Router>
    </div>
  );
};

export default Blog;
