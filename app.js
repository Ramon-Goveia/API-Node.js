const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

require('./models/home');
const Home = mongoose.model('Home');

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", 'GET, PUT, POST, DELETE');
  res.header("Access-Control-Allow-Headers", 'X-PINGOTHER, Content-Type, Authorization');
  app.use(cors());
  next();
});

app.use(
  // '/file' para ocultar caminho
  '/temp/uploads',
  express.static(path.resolve(__dirname, 'temp','uploads'))
);

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
  Home.findOne({}).then((home) => {
    if(home.portUmFileName){
      var portUmFileName = "http://localhost:8080/temp/uploads/home/" + home.portUmFileName;
    }else{
      var portUmFileName = "http://localhost:8080/temp/uploads/home/portolio.jpg";
    }
    if(home.portDoisFileName){
      var portDoisFileName = "http://localhost:8080/temp/uploads/home/" + home.portDoisFileName;
    }else{
      var portDoisFileName = "http://localhost:8080/temp/uploads/home/portolio.jpg";
    }
    if(home.portTresFileName){
      var portTresFileName = "http://localhost:8080/temp/uploads/home/" + home.portTresFileName;
    }else{
      var portTresFileName = "http://localhost:8080/temp/uploads/home/portolio.jpg";
    }
    if(home.portQuatroFileName){
      var portQuatroFileName = "http://localhost:8080/temp/uploads/home/" + home.portQuatroFileName;
    }else{
      var portQuatroFileName = "http://localhost:8080/temp/uploads/home/portolio.jpg";
    }
    if(home.portCincoFileName){
      var portCincoFileName = "http://localhost:8080/temp/uploads/home/" + home.portCincoFileName;
    }else{
      var portCincoFileName = "http://localhost:8080/temp/uploads/home/portolio.jpg";
    }
    if(home.portSeisFileName){
      var portSeisFileName = "http://localhost:8080/temp/uploads/home/" + home.portSeisFileName;
    }else{
      var portSeisFileName = "http://localhost:8080/temp/uploads/home/portolio.jpg";
    }
    

    return res.json({
      home,
      portUmFileName,
      portDoisFileName,
      portTresFileName,
      portQuatroFileName,
      portCincoFileName,
      portSeisFileName
    });
  }).catch((err) => {
    return res.status(400).json({
      error: true,
      message: "Nenhum registro encontrado!"
    });
  });
});

app.post('/home', async (req, res) => {
  const dados = {
    "topTitle":"Temos a solução que sua empresa precisa!",
	"topSubTitle":"This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.",
	"topTextBtn":"ENTRE EM CONTATO",
	"topLinkBtn":"http://localhost:3000/",
	"servTitle":"Serviços",
  "servSubTitle":"Featured content or information",
  "servUmIcone":"code",
  "servUmTitle":"Serviço 1",
  "servUmDesc":"Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.",
  "servDoisIcone":"mobile-alt",
  "servDoisTitle":"Serviço 2",
  "servDoisDesc":"Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
  "servTresIcone":"bullhorn",
  "servTresTitle":"Serviço 3",
 	"servDescDesc":"Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
  "portTitle":"Portifólio",
  "portSubTitle":"Featured content or information",
  "portUmOriginalName":"portolio_um.jpg",
  "portUmFileName":"portolio_um.jpg",
  "portUmTitle":"Card title",
  "portUmSubTitle":"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  "portDoisOriginalName":"portolio_dois.jpg",
  "portDoisFileName":"portolio_dois.jpg",
  "portDoisTitle":"Card title",
  "portDoisSubTitle":"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  "portTresOriginalName":"portolio_tres.jpg",
  "portTresFileName":"portolio_tres.jpg",
  "portTresTitle":"Card title",
  "portTresSubTitle":"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  "portQuatroOriginalName":"portolio_quatro.jpg",
  "portQuatroFileName":"portolio_quatro.jpg",
  "portQuatroTitle":"Card title",
  "portQuatroSubTitle":"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  "portCincoOriginalName":"portolio_cinco.jpg",
  "portCincoFileName":"portolio_cinco.jpg",
  "portCincoTitle":"Card title",
  "portCincoSubTitle":"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  "portSeisOriginalName":"portolio_seis.jpg",
  "portSeisFileName":"portolio_seis.jpg",
  "portSeisTitle":"Card title",
  "portSeisSubTitle":"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  };

  const homeExist = await Home.findOne({});
  if(homeExist){
    return res.status(400).json({
      error: true,
      message: "Erro: A paágina home já possui um registro!"
    });
  };

  Home.create(dados, (err) => {
    if(err) return res.status(400).json({
      error: true,
      message: "Erro ao se conectar com BD"
    });
  });

  return res.json({
    error: true,
    message: "Conteúdo registrado com sucesso!"
  });
});
 
app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});