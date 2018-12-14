const express = require('express');
const app = express();
const request = require('request');

const port = 8080;

app.use(express.static(__dirname + '/app')); 

app.get('/', (req, res) => {
  res.redirect('/');
});

app.get('/api/busca/:logradouro', (req, res) => {
  const logradouro = req.params.logradouro;

  request.get(`https://viacep.com.br/ws/go/goiania/${logradouro}/json`,
    (error, response, body) => {
      if(error) {
        return console.log(err);
      }
      res.send(JSON.parse(body));
    });
});

app.listen(port, () => {
  console.log(`Server is running at localhost:${port}`);
});