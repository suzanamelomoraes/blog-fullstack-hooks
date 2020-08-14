require('dotenv').config();

const { Pool } = require('pg');
const isEnvironment = process.env.NODE_ENV === 'environment';

const connection = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const pool = new Pool({
  connection: isEnvironment ? process.env.DATABASE_URL : connection,
  ssl: isEnvironment,
});

module.exports = {pool};
