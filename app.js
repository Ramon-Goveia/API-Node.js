const express = require('express');
const app = express();
 
app.get('/home', (req, res) => {
  res.json({
    error: false,
    message: "Informações da Home-Page"
  })
});
 
app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080")
})