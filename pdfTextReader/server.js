const express = require('express');
const multer = require('multer');
const { PythonShell } = require('python-shell');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/', multer().single('pdfFile'), (req, res) => {
  const filename = req.file.path;
  const options = {
    pythonPath: '/usr/bin/python3', // change this to the path of your Python executable
    args: [filename]
  };
  PythonShell.run('pdf_extractor.py', options, (err, result) => {
    if (err) throw err;
    const text = result[0];
    res.render('index', { text });
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
