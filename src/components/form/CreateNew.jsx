import React, { useState } from 'react';
import { useDispatch } from '../../hooks/markDownContext';
import { createMarkDown } from '../../actions/markDownActions';

export default function CreateNew()  {
  const [title, setTitle] = useState('');
  // const { state } = useSelector(); 
  const dispatch = useDispatch(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createMarkDown(title));
    setTitle('');
  };

  // const handleChange = ({ target }) => {
  //   setTitle(target.value);
  // }; 

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a new markdown file</h2>
      <input type="text" value={title} onChange={({ target }) => setTitle(target.value)}></input>
      <button>Go</button>
    </form>
  );
}
