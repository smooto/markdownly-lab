import marked from 'marked';

// get content for file "in focus"
export const getCurrentMarkDown = state => state.markdownArray.filter(markdown => {
  if(markdown.id === state.currentMarkDownId) {
    return markdown;
  }
});

// basic get -- returns whole object
export const getMarkDowns = state => state.markdownArray;

// gets titles of all documents, returns array
export const getMarkDownTitles = state => {
  return state.markdownArray.map(markdown =>  markdown.title);
};

export const getMarkDownsPreview = state => {
  const currentBody = getCurrentMarkDown(state).body;
  return marked(currentBody);
};

// landing page: array of all titles

// inidividual editor pages: content for one specific title
// (formatted preview)
