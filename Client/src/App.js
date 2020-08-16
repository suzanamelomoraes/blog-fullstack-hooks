import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Blog from './components/Blog';

const history = createBrowserHistory();

function App() {
  
  return (
    <Router history={history}>
      <div className='App'>
        <Blog />
      </div>
    </Router>
  );
}

export default App;
