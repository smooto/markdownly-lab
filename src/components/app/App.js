import React, { useEffect } from 'react';
import Document from '../../containers/Document';
import LandingPage from '../../containers/landingpage/LandingPage.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from '../../hooks/markDownContext';
import { getMarkDowns } from '../../selectors/markDownSelectors';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { setFromLocalStorage } from '../../actions/markDownActions';

export default function App() {
  const state = useSelector(getMarkDowns);
  
  // const dispatch = useDispatch();
  
  // useEffect(() => {
  //   const session = localStorage.getItem('markdownFiles');
  //   !session ? localStorage.setItem('markdownFiles', { id: '001', title: '', body: '' }) : dispatch(setFromLocalStorage(session));
  // }, []);

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
