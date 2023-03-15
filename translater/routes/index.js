
const express = require('express');
const router = express.Router();

const { translateText } = require('../controller/translate');

router.get('/', (req, res) => {
  res.render('index', { error: '', translation: '' });
})

router.post('/translate', translateText);

module.exports = router;

// Path: controllers/translate.js