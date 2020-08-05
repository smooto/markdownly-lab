import React from 'react';
import marked from 'marked';
import styles from 'github-markdown-css/github-markdown.css';
import { useSelector } from '../../hooks/markDowncontext';
import { getMarkDowns } from '../../selectors/markDownSelectors';

const Preview = () => {

  const state = useSelector(getMarkDowns);
  const __html = marked(state);
  return <div className={styles['markdown-body']} dangerouslySetInnerHTML={{ __html }}></div>;
};

export default Preview;
