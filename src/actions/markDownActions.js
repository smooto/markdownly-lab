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

export const SET_CURRENT_MARKDOWN_TITLE = 'SET_CURRENT_MARKDOWN_TITLE';
export const setCurrentMarkDownTitle = (title) => ({
  type: SET_CURRENT_MARKDOWN_TITLE, 
  payload: title
}); 
