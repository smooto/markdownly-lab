export const initialState = {
  currentMarkDownTitle: 'title',
  markdownArray: [{

    title: 'content',
    'another title': 'content'
    // body: ''
    // id: Date.now()
  }],
};

// to update the current markdown, spread state, state.markdownArray.map(markdown(this is a markdown object within array) => if markdown.id === state.currentId return ...markdown, body: action.payload else return markdown)
// markdown will always create a new array, so when we map above, it will create new array 

export default function reducer(state, action) {
  switch(action.type){
    case 'UPDATE_MARKDOWN':
      return { ...state, markdown: { ...state.markdown, } };
    case 'CREATE_MARKDOWN':
      return { ...state, markdown: { ...state.markdown, [action.payload]: '' } };
    case 'SET_CURRENT_MARKDOWN_TITLE': 
      return { ...state, currentMarkDownTitle: action.payload };
    default:
      return state;
  }
}
