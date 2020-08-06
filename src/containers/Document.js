import React, { useEffect } from 'react';
import Preview from '../components/markdown/Preview';
import Editor from '../components/markdown/Editor';
import styles from './Document.css';
import { useParams } from 'react-router-dom';
import { useDispatch } from '../hooks/markDownContext';
import { setCurrentMarkDownId } from '../actions/markDownActions';

const Document = () => {
  return (
    <div className={styles.Document}>
      <Editor />
      {/* <Preview  /> */}

    </div>
  );
};

export default Document;
