import React, { useContext } from 'react'; 

export const MarkDownContext = React.createContext();

export const useMarkDownState = () => {
  const { state } = useContext(MarkDownContext); 
  return state; 
};

export const useDispatch = () => {
  const { dispatch } = useContext(MarkDownContext); 
  return dispatch; 
};

