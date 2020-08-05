import React, { useContext } from 'react'; 

export const MarkDownContext = React.createContext();

export const useDispatch = () => {
  const { dispatch } = useContext(MarkDownContext); 
  return dispatch; 
};

export const useSelector = selectorFn => {
  const { state } = useContext(MarkDownContext); 
  return selectorFn(state);
};
