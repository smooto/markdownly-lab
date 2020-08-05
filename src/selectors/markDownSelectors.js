import marked from 'marked';

export const getMarkDowns = state => state.markdown; 

export const getMarkDownsPreview = state => {
  return marked(getMarkDowns(state));
};
