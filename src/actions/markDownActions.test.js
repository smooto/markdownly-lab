const { updateMarkDown, UPDATE_MARKDOWN } = require('./markDownActions');

describe('Markdown Action Tests', () => {

  it('updates the markdown', () => {
    const action = updateMarkDown('Give us a Badge'); 

    expect(action).toEqual({ 
      type: UPDATE_MARKDOWN, 
      payload: 'Give us a Badge'
    });

  });


});
