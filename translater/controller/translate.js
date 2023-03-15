const { translate } = require( '@vitalets/google-translate-api');

const translateText = async (req, res) => {
  const { input, target } = req.body;
  console.log(input, target);
  try {
    const {text} = await translate(input, { to: target });
    console.log(text);
    res.render('index', { error: '' , translation: text });
  } catch (error) {
    console.error(error);
    res.render('index', { error: 'Error translating text.', translation: ' ' });
  }
}