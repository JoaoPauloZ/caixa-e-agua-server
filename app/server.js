var express = require('express');
// Criando uma instância do express
var app = express();
// Porta do server
var port = 3000;

app.get('/api/caixa-e-agua/ranking/save/:user/:points', savePoints);

function savePoints(req, res) {
   const user = req.params.user;
   const points = req.params.points;

   if (!user || !points) {
      return res.status(400).send("Usuário ou dados não informados.");
   }

   console.log("usuário = " + user);
   console.log("points = " + points);

   // Do something with the data
   return res.status(200).send("Dados salvos com sucesso");
}

// Iniciando o servidor
app.listen(port, function () {
	console.log('Server escutando na porta ' + port + '!');
});