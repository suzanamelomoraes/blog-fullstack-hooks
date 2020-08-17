# Blog

- Full Stack Blog application where the user can create a post, read and delete, also add and delete comments.

### Technologies:

- React-Hooks (no classes) and Hook-forms
- Express.JS
- PostgreSQL
- Material UI

The frontend environment of this project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Prepare database:

### Connect to database:

```bash
$ psql -h localhost -U postgres -d postgres
```

### Create a new role:

```bash
postgres=# CREATE ROLE blog_user WITH LOGIN PASSWORD 'password';
postgres=# ALTER ROLE blog_user CREATEDB;
```

### Logout of the root user (postgres) and connect with new user:

```bash
$ psql -h localhost -d postgres -U blog_user
```

or

```bash
$ psql postgresql://blog_user:password@localhost:5432/blogs_api
```

### Create a new database and connect to it:

```bash
postgres=# CREATE DATABASE books_api;
postgres=# \c blogs_api
```

### Create tables:

```sql
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  body VARCHAR(400) NOT NULL,
  date_created TIMESTAMP
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    post_id INT,
    comment VARCHAR(255) NOT NULL,
    date_created TIMESTAMP,
    CONSTRAINT fk_blog
      FOREIGN KEY(post_id)
    REFERENCES posts(id)
);
```
