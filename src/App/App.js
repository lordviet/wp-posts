import React from 'react';
import './App.css';
import Posts from '../Posts/Posts';
import PostScroll from '../PostScroll/PostScroll';
import Header from '../Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={Posts} />
          <Route path='/post/:id' component={PostScroll} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
