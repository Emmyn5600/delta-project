const express = require('express');
const bodyParser = require('body-parser');
const aposToLexForm = require('apos-to-lex-form');
const natural = require('natural');
const SpellCorrector = require('spelling-corrector');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

const tokenizer = new natural.WordTokenizer();
const stemmer = natural.PorterStemmer;
const analyzer = new natural.SentimentAnalyzer('English', stemmer, 'afinn');
const spellCorrector = new SpellCorrector();
spellCorrector.loadDictionary();

function analyzeSentiment(text) {
  text = aposToLexForm(text);
  text = text.toLowerCase();
  const tokens = tokenizer.tokenize(text);
  const correctedTokens = tokens.map((token) => spellCorrector.correct(token));
  const stems = correctedTokens.map((token) => stemmer.stem(token));
  const sentiment = analyzer.getSentiment(stems);
  return sentiment;
}

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/', (req, res) => {
  const text = req.body.text;
  const sentiment = analyzeSentiment(text);
  let emotion = '';
  if (sentiment === 0) {
    emotion = '😐';
  } else if (sentiment > 0) {
    emotion = '😃';
  } else {
    emotion = '😔';
  }
  console.log(text,sentiment);
  res.render('results', { text, sentiment:emotion });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});