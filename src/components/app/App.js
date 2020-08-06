import React from 'react';
import Document from '../../containers/Document';
import LandingPage from '../../containers/landingpage/LandingPage.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <h1>Markdown Editor</h1>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} ></Route>
          <Route path="/:title" component={Document} ></Route>
        </Switch>
      </Router>
    </>
  );
}
