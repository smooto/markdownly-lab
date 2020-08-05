import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Editor.css';
import { useMarkDownState, useDispatch, useSelector  } from '../../hooks/markDowncontext';
// import { updateMarkDown } from '../../actions/markDownActions';
import { getMarkDowns } from '../../selectors/markDownSelectors';


const Editor = () => {
  const state = useSelector(getMarkDowns);
  console.log('editor state', state);
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

// Editor.propTypes = {
//   markdown: PropTypes.string.isRequired,
//   // updateMarkdown: PropTypes.func.isRequired
// };

export default Editor;
