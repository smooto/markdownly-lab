import React from 'react';
import List from '../../components/list/List';
import CreateNew from '../../components/form/CreateNew';
import SearchFiles from '../../components/form/SearchFiles';

const LandingPage = () => {
  return (
    <>
      <CreateNew />
      <SearchFiles />
      <List />
    </>
  );
};


export default LandingPage;

