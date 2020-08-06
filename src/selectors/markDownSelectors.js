import marked from 'marked';

export const getCurrentMarkDown = state => state.markdown[state.currentMarkDownTitle];

export const getMarkDowns = state => state.markdown;

export const getMarkDownsPreview = state => {
  return marked(getMarkDowns(state));
};
