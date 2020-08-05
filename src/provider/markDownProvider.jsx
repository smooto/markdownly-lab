import React, { useReducer } from 'react';
import { MarkDownContext } from '../hooks/markDowncontext';
import reducer, { initialState } from '../reducers/markDownReducer';

const markDownProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MarkDownContext.Provider value={{ state, dispatch }}>
      {children}
    </MarkDownContext.Provider>
  );
};

export default markDownProvider;
