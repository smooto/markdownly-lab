import marked from 'marked';

// get content for file "in focus"
export const getCurrentMarkDown = state => state.markdown[state.currentMarkDownTitle];

// basic get -- returns whole object
export const getMarkDowns = state => state.markdown;

// gets titles of all documents, returns array
export const getMarkDownTitles = state => {
  return Object.keys(getMarkDowns(state));
};

export const getMarkDownsPreview = state => {
  return marked(getMarkDowns(state));
};

// landing page: array of all titles

// inidividual editor pages: content for one specific title
// (formatted preview)
