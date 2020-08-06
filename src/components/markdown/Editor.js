import React from 'react';
import styles from './Editor.css';
import { useDispatch, useSelector  } from '../../hooks/markDownContext';
import { getCurrentMarkDown } from '../../selectors/markDownSelectors';


const Editor = () => {
  const state = useSelector(getCurrentMarkDown);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    dispatch({ 
      type: 'UPDATE_MARKDOWN', 
      payload: target.value
    });
  };

  return (
    <textarea className={styles.Editor} value={state.markdown} onChange={handleChange} />
  );
};



export default Editor;
