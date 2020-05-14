import React from 'react';
import './App.css';
import Posts from '../Posts/Posts';
import Post from '../Post/Post';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Posts} />
          <Route path='/post/:id' component={Post} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
