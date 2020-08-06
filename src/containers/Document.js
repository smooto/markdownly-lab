import React from 'react';
import Preview from '../components/markdown/Preview';
import Editor from '../components/markdown/Editor';
import styles from './Document.css';
import { useParams } from 'react-router-dom';
import { useDispatch } from '../hooks/markDownContext';

const Document = () => {
  const { title }  = useParams();
  // const { dispatch } = useDispatch();

  

  return (
    <div className={styles.Document}>
      <Editor title={title}/>
      <Preview  />

    </div>
  );
};

export default Document;
