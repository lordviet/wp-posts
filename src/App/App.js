import React from 'react';
import './App.css';
import Posts from '../Posts/Posts';
import PostScroll from '../PostScroll/PostScroll';
import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Posts} />
          <Route path='/post/:id' component={PostScroll} />
          <Route path='/*' component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
