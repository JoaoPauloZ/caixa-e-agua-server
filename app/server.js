var express = require('express');
// Criando uma instância do express
var app = express();
// Porta do server
var port = 3000;

var score = require('./score');

app.post('/api/caixa-e-agua/ranking/save', score.savePoints);

app.get('/api/caixa-e-agua/ranking', score.getPoints);

app.post('/api/caixa-e-agua/ranking/delete', score.deleteUser);

// Iniciando o servidor
app.listen(port, function () {
	console.log('Server escutando na porta ' + port + '!');
});