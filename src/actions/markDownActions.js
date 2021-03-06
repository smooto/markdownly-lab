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

export const SET_CURRENT_MARKDOWN_ID = 'SET_CURRENT_MARKDOWN_ID';
export const setCurrentMarkDownId = (id) => ({
  type: SET_CURRENT_MARKDOWN_ID,
  payload: id
});

export const SET_FROM_LOCALSTORAGE = 'SET_FROM_LOCALSTORAGE';
export const setFromLocalStorage = (session) => ({
  type: SET_FROM_LOCALSTORAGE,
  payload: session
});
