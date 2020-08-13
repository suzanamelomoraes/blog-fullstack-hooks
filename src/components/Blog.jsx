import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Posts from './Posts';
import AddPost from './AddPost';
import BlogTitles from './BlogTitles';
import Post from './Post';

const Blog = () => {
  const [posts, setPosts] = useState([
    { title: 'Post One', body: 'This is my first post' },
    { title: 'Post Two', body: 'This is my second post' },
    { title: 'Post Three', body: 'This is my third post' },
  ]);

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
        <Route
          path='/'
          exact
          component={(props) => <BlogTitles {...props} posts={posts} />}
        />

        <button onClick={showAddPost}>Add post</button>
        {form.showForm && <AddPost addPost={addPost} />}

        <Route
          path='/posts'
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
