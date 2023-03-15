const express = require('express');
const multer = require('multer');
const { PythonShell } = require('python-shell');
var bodyParser = require('body-parser');
var path = require('path');
const app = express();

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
      cb(null, 'uploaded_file.pdf')
  }
})

const upload = multer({ storage });
app.get('/', (req, res) => {
  res.render('index', { text: "" });
});


app.post('/',upload.single('pdfFile'), async (req, res) => {
  const options = {
    pythonPath: '/usr/bin/python3', // change this to the path of your Python executable
  };
  const text = await PythonShell.run('reader.py', null);
  return res.status(200).render('index', { text: text })
});

app.listen(5000, () => {
  console.log('Server listening on port 3000');
});
