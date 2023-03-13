// require the module
const getImageText = require('../index');


describe('getImageText', () => {
  it('should return text from image', async () => {
    const text = await getImageText('testimage.png', 'eng', false);
    // remove all newlines
    const textWithoutNewlines = text.replace(/\n/g, '');
    expect(textWithoutNewlines).toMatch(`It was the best oftimes, it was the worstof times, it was the ageof wisdom, it was theage of foolishness...`);
  }); 
}
);
// Path: test/index.test.js