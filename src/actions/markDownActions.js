export const UPDATE_MARKDOWN = 'UPDATE_MARKDOWN';
export const updateMarkDown = (markdown) => ({
  type: UPDATE_MARKDOWN, 
  payload: markdown
});

export const  CREATE_MARKDOWN = 'CREATE_MARKDOWN';
export const createMarkDown = (title) => ({
  type: CREATE_MARKDOWN, 
  payload: title
});
