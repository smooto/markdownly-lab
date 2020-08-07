import React, { useEffect } from 'react';
import Document from '../../containers/Document';
import LandingPage from '../../containers/landingpage/LandingPage.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from '../../hooks/markDownContext';
import { getMarkDowns } from '../../selectors/markDownSelectors';
import { setFromLocalStorage } from '../../actions/markDownActions';

export default function App() {
  const state = useSelector(getMarkDowns);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    const session = localStorage.getItem('markdownFiles');
    const parsedSession = JSON.parse(session);
    !parsedSession ? localStorage.setItem('markdownFiles', { id: '001', title: '', body: '' }) : dispatch(setFromLocalStorage(parsedSession));
  }, []);

  useEffect(() => {
    // const state = useSelector(getMarkDowns);
    localStorage.setItem('markdownFiles', JSON.stringify(state));
  }, [state]);

  // useeffect -- any state change, set local storage for all state
  // reducer -- localstorage get (determine existing vs. default)
  return (
    <>
      <h1>Markdown Editor</h1>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} ></Route>
          <Route path="/:id" component={Document} ></Route>
        </Switch>
      </Router>
    </>
  );
}
