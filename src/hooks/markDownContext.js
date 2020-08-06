import React, { useContext } from 'react';

export const markDownContext = React.createContext();

export const useDispatch = () => {
  const { dispatch } = useContext(markDownContext);
  return dispatch;
};

export const useSelector = (selectorFn, ...args) => {
  const { state } = useContext(markDownContext);
  return selectorFn(state, ...args);
};
