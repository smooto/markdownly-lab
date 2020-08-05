import React from 'react';
import styles from 'github-markdown-css/github-markdown.css';
import { useSelector } from '../../hooks/markDownContext';
import { getMarkDownsPreview } from '../../selectors/markDownSelectors';

const Preview = () => {

  const __html = useSelector(getMarkDownsPreview);
  return <div className={styles['markdown-body']} dangerouslySetInnerHTML={{ __html }}></div>;
};

export default Preview;
