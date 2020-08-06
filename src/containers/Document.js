import React, { useEffect } from 'react';
import Preview from '../components/markdown/Preview';
import Editor from '../components/markdown/Editor';
import styles from './Document.css';
import { useParams } from 'react-router-dom';
import { useDispatch } from '../hooks/markDownContext';
import { setCurrentMarkDownTitle } from '../actions/markDownActions';

const Document = () => {
  const { id }  = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentMarkDownTitle(id));
  }, []);

  return (
    <div className={styles.Document}>
      <Editor />
      <Preview  />

    </div>
  );
};

export default Document;
