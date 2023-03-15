const express = require('express');
const multer = require('multer');
const { PythonShell } = require('python-shell');
const fs = require('fs');
const app = express();

app.set('view engine', 'ejs');

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
      cb(null, 'uploaded_file.pdf')
  }
})

const upload = multer({ storage });
app.get('/', (req, res) => {
  res.render('index');
});


app.post('/extract',upload.single('pdfFile'), async (req, res) => {
  const options = {
    pythonPath: '/usr/bin/python3', // change this to the path of your Python executable
  };
  const text = await PythonShell.run('reader.py', null);
  return res.status(200).send(text);
});

app.listen(5000, () => {
  console.log('Server listening on port 3000');
});
