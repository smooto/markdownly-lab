import marked from 'marked';

// get content for file "in focus"
export const getCurrentMarkDown = (state, id) => state.markdownArray.find(markdown => markdown.id === id);

// basic get -- returns whole object
export const getMarkDowns = state => state.markdownArray;

// gets titles of all documents, returns array
export const getMarkDownTitles = state => {
  return state.markdownArray;
};

export const getMarkDownsPreview = (state, id) => {
  const currentMarkDown = getCurrentMarkDown(state, id);
  return marked(currentMarkDown.body);
};
