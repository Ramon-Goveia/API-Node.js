const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('./models/home');
const Home = mongoose.model('Home');

//Conexão BD
mongoose.connect('mongodb://localhost/db-node', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Conexão com BD realizada com sucesso!");
}).catch((err) => {
  console.log("Erro ao se conectar com BD!" + err);
});
 
app.get('/home', (req, res) => {
  res.json({
    error: false,
    message: "Informações da Home-Page"
  });
});

app.post('/home', (req, res) => {
  Home.create(req.body, (err) => {
    if(err) return res.status(400).json({
      error: true,
      message: "Erro ao se conectar com BD"
    })
  })

  return res.json({
    error: true,
    message: "Conteúdo registrado com sucesso!"
  })
})
 
app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});