import React from 'react';
import styles from './Editor.css';
import { useDispatch, useSelector  } from '../../hooks/markDownContext';
import { getCurrentMarkDown } from '../../selectors/markDownSelectors';
import { useParams } from 'react-router-dom';


const Editor = () => {
  const { id } = useParams();
  const markdown = useSelector(getCurrentMarkDown, +id);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    dispatch({
      type: 'UPDATE_MARKDOWN',
      payload: { id: +id, body: target.value }
    });
  };

  return (
    <textarea className={styles.Editor} value={markdown.body} onChange={handleChange} />
  );
};



export default Editor;
