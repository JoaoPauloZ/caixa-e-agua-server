var scoreDao = require('../utils/scoreDao');

var score = {

   savePoints: function (req, res) {
      // Obtendo string com os dados do usuario
      var user = req.headers['user'];
      // Verificar se foi informado o usuário
      if (user) {
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
         scoreDao.saveScoreUser(user, function (err, result) {
				if (!err) {
					console.log("Dados salvos com sucesso");
					return res.status(200).json({
						msg: "Dados salvos com sucesso!",
						idUser: result.insertedId,
						err: err
					});
				} else {
					console.log("Erro Salvando dados");
					console.log(err);
         		return res.status(400).json({
						msg: "Erro, dados não salvos.",
						idUser: "",
						err: err
					});
				}
         });
      } else {
         console.log("Dados do usuário não informados");
         return res.status(400).send("Dados do usuário não informados");
      }
   },

   getPoints: function (req, res) {
      scoreDao.getAll(function(err, data) {
			if (!err) {
         	return res.status(200).json({
					result: data,
					err: ""
				});
			} else {
				return res.status(400).send({
					result: [],
					err: err
				});
			}
      });
   }
};

module.exports = score;