import React from 'react';
import List from '../../components/list/List';
import CreateNew from '../../components/form/CreateNew';
import SearchFiles from '../../components/form/SearchFiles';
// import PropTypes from 'prop-types';

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

