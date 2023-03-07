const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

const api_key = 'f116e8aa34dab3d00338878f4d963574';
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  const response = await fetch(`https://api.currencyscoop.com/v1/latest?api_key=${api_key}`);
  const data = await response.json();
  const currencies = Object.keys(data.response.rates);
  res.render('index', { currencies });
});












const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));