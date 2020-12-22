import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import React from 'react';
import Auth from './components/google-auth'
import upload from './components/upload-image'
import show_image from './components/show_image'

function App() {
  return ( 
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route path="/upload" component={upload} />
        <Route path="/show-image" component={show_image} />

      </Switch>
    </div>
  </Router>
  );
}

export default App;
