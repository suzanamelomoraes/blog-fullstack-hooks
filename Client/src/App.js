import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Container } from '@material-ui/core';
import Blog from './components/Blog';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Container>
        <Blog />
      </Container>
    </Router>
  );
}

export default App;
