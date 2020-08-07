export const initialState = {
  // currentMarkDownId: '001',
  markdownArray: [{
    id: '001',
    title: '',
    body: ''
  }],
};

export default function reducer(state, action) {
  switch(action.type){
    case 'UPDATE_MARKDOWN':
      return { ...state, markdownArray: state.markdownArray.map(markdown => {
        return {
          id: markdown.id,
          title: markdown.title,
          body: (markdown.id === action.payload.id) ? action.payload.body : markdown.body
        };
      }) };

    case 'CREATE_MARKDOWN':
      return { ...state,
        markdownArray:  state.markdownArray.concat({
          id: action.payload.id, title: action.payload.title, body: '' }) };

    case 'SET_CURRENT_MARKDOWN_ID':
      return { ...state, currentMarkDownId: action.payload };

    case 'SET_FROM_LOCALSTORAGE':
      return { ...state, markdownArray: action.payload };

    default:
      return state;
  }
}
