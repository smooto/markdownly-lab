import React from 'react';
import styles from 'github-markdown-css/github-markdown.css';
import { useSelector } from '../../hooks/markDownContext';
import { getMarkDownsPreview } from '../../selectors/markDownSelectors';
import { useParams } from 'react-router-dom';

const Preview = () => {
  const { id } = useParams();
  const __html = useSelector(getMarkDownsPreview, +id);

  return <div className={styles['markdown-body']} dangerouslySetInnerHTML={{ __html }}></div>;
};

export default Preview;
