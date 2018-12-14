const express = require('express');
const app = express();
const request = require('request');

const port = 8080;

const mongoose = require('mongoose');
const mongodbUri = 'mongodb://buzzlead:buzzlead123@ds037508.mlab.com:37508/imoveis-buzzlead';

mongoose.connect(mongodbUri, {useNewUrlParser: true}, (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('Mongoose connection ready.');
  }
});

const Imovel = mongoose.model('Imovel',
  {
    cep: String,
    logradouro: String,
    complemento: String,
    bairro: String,
    localidade: String,
    uf: String
  });  

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

app.get('/api/imoveis', (req, res) => {
  Imovel.find({}, (err, imoveis) => {
    if (err) return console.log(err);

    res.send(imoveis);
  });
});

app.post('/api/imoveis', (req, res) => {
  const imovelParams = req.params.imovel;
  const imovel = new Imovel({
      cep: imovelParams.cep,
      logradouro: imovelParams.logradouro,
      complemento: imovelParams.complemento,
      bairro: imovelParams.bairro,
      localidade: imovelParams.localidade,
      uf: imovelParams.uf
    }
  );
  imovel.save().then(console.log('Novo imóvel indicado'));
});

app.listen(port, () => {
  console.log(`Server is running at localhost:${port}`);
});
