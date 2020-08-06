import React, { useState, useEffect } from 'react';
import { useDispatch } from '../../hooks/markDownContext';
import { createMarkDown } from '../../actions/markDownActions';

export default function CreateNew()  {
  const [title, setTitle] = useState('');
  // const [id, setId] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createMarkDown({ id: Date.now(), title }));
    setTitle('');
  };

  // useEffect(() => {
  //   setId(Date.now());
  // }, [title]);

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a new markdown file</h2>
      <input type="text" value={title} onChange={({ target }) => setTitle(target.value)}></input>
      <button>Go</button>
    </form>
  );
}
