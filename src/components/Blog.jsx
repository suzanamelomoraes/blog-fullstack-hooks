import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Posts from './Posts';
import AddPost from './AddPost';
import BlogTitles from './BlogTitles';
import Post from './Post';
import Axios from 'axios';

const Blog = () => {
  useEffect(() => {
    Axios.get('http://localhost:3002/posts').then((res) => setPosts(res.data));
  }, []);

  const [posts, setPosts] = useState([]);

  const [form, setShowForm] = useState({ showForm: false });

  const addPost = ({ title, body }) => {
    const newPosts = [...posts, { title, body }];
    setPosts(newPosts);
  };

  const removePost = (id) => {
    const newPosts = [...posts];
    newPosts.splice(id, 1);
    setPosts(newPosts);
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
          path='/posts'
          exact
          component={(props) => (
            <Posts {...props} posts={posts} removePost={removePost} />
          )}
        />

        <Route path='/post/:id' component={Post} />
      </Router>
    </div>
  );
};

export default Blog;
