import React from 'react';
import { useSelector } from '../../hooks/markDownContext';
import { getMarkDowns } from '../../selectors/markDownSelectors';
import { Link } from 'react-router-dom';

const List = () => {
  const markDownFiles = useSelector(getMarkDowns);

  const markDownElements = markDownFiles.map(({ markdown }, i) => (
    <li key={i}>
      <Link to={`/${i}`}> <p>{markdown.title}</p></Link>
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
