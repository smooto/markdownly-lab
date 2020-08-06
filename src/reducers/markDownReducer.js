export const initialState = {
  currentMarkDownTitle: 'title',
  markdown: {
    title: 'content',
    'another title': 'content'
  },
};

export default function reducer(state, action) {
  switch(action.type){
    case 'UPDATE_MARKDOWN':
      return { ...state, markdown: action.payload };
    default:
      return state;
  }
}
