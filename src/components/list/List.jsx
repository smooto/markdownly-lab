import React from 'react';
import { useSelector, useDispatch } from '../../hooks/markDownContext';
import { getMarkDownTitles } from '../../selectors/markDownSelectors';
import { Link } from 'react-router-dom';
import { setCurrentMarkDownTitle } from '../../actions/markDownActions';

const List = () => {
  const markDownTitles = useSelector(getMarkDownTitles);
  const dispatch = useDispatch();

  const handleClick = (title) => {
    dispatch(setCurrentMarkDownTitle(title));
  };

  const markDownElements = markDownTitles.map((title, i) => (
    <li key={i}>
      <Link to={`/${title}`} onClick={title => handleClick(title)}> <p>{title}</p></Link>
      <button>delete!!!</button>
    </li>
  ));


  return (
    <ul>
      <p>This is the list</p>
      {markDownElements}
    </ul>
  );
};

export default List;
