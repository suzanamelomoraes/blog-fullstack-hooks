const express = require('express');
const router = express.Router();
const pool = require('../database/config');

// * GETS

// GET all posts
router.get('/posts', (request, response) => {
  pool.query('SELECT * FROM posts', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
});

// GET post by id
router.get('/post/:id', async (request, response) => {
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

// * POSTS

// POST a new post
router.post('/post', async (request, response) => {
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
router.post('/comment', async (request, response) => {
  const { postId: post_id, comment } = request.body;

  pool.query(
    'INSERT INTO comments (post_id, comment, date_created) VALUES ($1, $2, Now())',
    [post_id, comment],
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

// * DELETES

// DELETE a post
router.delete('/post', async (request, response) => {
  const id = request.body.id;
  pool.query('DELETE FROM posts WHERE id = $1', [id], (error) => {
    if (error) {
      throw error;
    }
    response
      .status(204)
      .json({ status: 'success', message: 'Post deleted successfully.' });
  });
});

// DELETE comments by post_id - when a post is deleted
router.delete('/comments', async (request, response) => {
  const id = request.body.id;
  pool.query('DELETE FROM comments WHERE post_id = $1', [id], (error) => {
    if (error) {
      throw error;
    }
    response
      .status(204)
      .json({ status: 'success', message: 'Comment deleted successfully.' });
  });
});

// DELETE a comment by id
router.delete('/comment/:id', async (request, response) => {
  const id = request.body.id;
  pool.query('DELETE FROM comments WHERE id = $1', [id], (error) => {
    if (error) {
      throw error;
    }
    response
      .status(204)
      .json({ status: 'success', message: 'Comment deleted successfully.' });
  });
});

module.exports = router;
