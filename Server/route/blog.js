const express = require('express');
const router = express.Router();
const pool = require('../database/config');

// GET all posts
router.get('/posts', (request, response) => {
  pool.query('SELECT * FROM posts', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
});

// GET posts by id
router.get('/posts/:id', async (request, response) => {
  const id = request.params.id;

  pool.query('SELECT * FROM posts WHERE id=$1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
});

// GET comments by post Id
router.get('/comments/:id', async (request, response) => {
  const id = request.params.id;

  pool.query(
    'select * from comments where post_id = $1',
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
});

// POST a new post
router.post('/addPost', async (request, response) => {
  const { title, body } = request.body;
  pool.query(
    'INSERT INTO posts (title, body, date_created) VALUES ($1, $2, Now())',
    [title, body],
    (error) => {
      if (error) {
        throw error;
      }
      response.status(201).json({ status: 'success', message: 'Post added.' });
    }
  );
});

// POST a new comment
router.post('/addComment', async (request, response) => {
  const { postId, comment } = request.body;
  pool.query(
    'INSERT INTO comments (post_id, comment, date_created) VALUES ($1, $2, Now())',
    [postId, comment],
    (error) => {
      if (error) {
        throw error;
      }
      response
        .status(201)
        .json({ status: 'success', message: 'Comment added.' });
    }
  );
});

module.exports = router;
