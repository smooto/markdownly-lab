import React, { useReducer } from 'react';
import { markDownContext } from '../hooks/markDownContext';
import reducer, { initialState } from '../reducers/markDownReducer';

const markDownProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <markDownContext.Provider value={{ state, dispatch }}>
      {children}
    </markDownContext.Provider>
  );
};

export default markDownProvider;
