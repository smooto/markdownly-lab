const { getMarkDowns } = require('./markDownSelectors');

describe('markdown selectors', () => {
  it('returns a list of markdown strings', () => {
    const state = { markdown: 'here is a string!!!' };

    const markdown = getMarkDowns(state);

    expect(markdown).toEqual('here is a string!!!');
  });
});
