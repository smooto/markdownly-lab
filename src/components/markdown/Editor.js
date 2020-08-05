import React from 'react';
import PropTypes from 'prop-types';
import styles from './Editor.css';
import { useMarkDownState, useDispatch } from '../../hooks/markDowncontext';
// import { updateMarkDown } from '../../actions/markDownActions';


const Editor = () => {
  const { state } = useMarkDownState();
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    dispatch({ 
      type: 'UPDATE_MARKDOWN', 
      payload: target.value
    });
  };

  <textarea className={styles.Editor} value={state.markdown} onChange={handleChange} />;
};

// Editor.propTypes = {
//   markdown: PropTypes.string.isRequired,
//   // updateMarkdown: PropTypes.func.isRequired
// };

export default Editor;
