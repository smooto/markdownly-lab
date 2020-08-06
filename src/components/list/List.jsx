import React from 'react';
import { useSelector } from '../../hooks/markDownContext';
import { getMarkDownTitles } from '../../selectors/markDownSelectors';
import { Link } from 'react-router-dom';

const List = () => {
  const markDownTitles = useSelector(getMarkDownTitles);

  const markDownElements = markDownTitles.map((title, i) => (
    <li key={i}>
      <Link to={`/${i}`}> <p>{title}</p></Link>
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
