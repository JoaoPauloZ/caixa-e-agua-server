var scoreDao = require('../utils/scoreDao');

var score = {

   savePoints: function (req, res) {
      // Obtendo string com os dados do usuario
      var user = req.headers['user'];
      // Convertendo a string para JSON
      user = JSON.parse(user);
      // Verificando se todos os dados necessarios foram informados
      if (!user.id || !user.name || user.points < 0) {
         console.log("Alguns dados não foram informados.");
         return res.status(400).send("Alguns dados não foram informados.");
      }

      console.log("usuário ID = " + user.id);
      console.log("nome = " + user.name);
      console.log("points = " + user.points);

      // Do something with the data
      scoreDao.saveScoreUser(user);
      console.log("Dados salvos com sucesso");
      return res.status(200).send("Dados salvos com sucesso");
   },

   getPoints: function (req, res) {

   }
};

module.exports = score;