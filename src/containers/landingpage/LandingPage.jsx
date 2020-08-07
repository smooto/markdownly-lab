import React from 'react';
import List from '../../components/list/List';
import CreateNew from '../../components/form/CreateNew';
import SearchFiles from '../../components/form/SearchFiles';

const LandingPage = () => {
  return (
    <>
      <h3>About Markdownly:</h3>
      <p>Hello and welcome to Markdownly! Markdownly is an application that lets you create multiple markdown files, save them for later to edit, and allow you to search through your titles and content to find your work for later.</p>
      <p>To get started, you can plug in a new title for your Markdown and hit the Submit button to get started. If you already have multiple markdown files saved, you can also search by title or keywords within your markdown files, and select from the list to go directly to that Markdown file you choose! Once in your Markdown file, you can edit, add to it, or even delete it if you choose.</p>
      <p>Be sure to also check out our About Me page to learn more about the Developers that helped create this app.</p>
      <CreateNew />
      <SearchFiles />
      <List />
    </>
  );
};


export default LandingPage;

