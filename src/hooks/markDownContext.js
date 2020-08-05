import React, { useContext } from 'react'; 

export const markDownContext = React.createContext();

export const useMarkDownState = () => {
  const { state } = useContext(markDownContext); 
  return state; 
};

export const useDispatch = () => {
  const { dispatch } = useContext(markDownContext); 
  return dispatch; 
};

export const useSelector = selectorFn => {
  const { state } = useContext(markDownContext); 
  return selectorFn(state);
};
