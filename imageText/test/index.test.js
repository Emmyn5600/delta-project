// require the module
const getImageText = require('../index');


describe('getImageText', () => {
  it('should return text from image', async () => {
    const text = await getImageText('testimage.png', 'eng', false);
    expect(text).toEqual(`
It was the best of
times, it was the worst
of times, it was the age
of wisdom, it was the
age of foolishness...`);
  }); 
}
);
// Path: test/index.test.js