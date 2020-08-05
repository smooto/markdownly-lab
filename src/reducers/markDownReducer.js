export const initialState = { 
  markdown: '',
};

export default function reducer(state, action) {
  switch(action.type){
    case 'UPDATE_MARKDOWN':
      return { ...state, markdown: action.payload };
    default: 
      return state;
  }
}
