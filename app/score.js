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
         if (!user.name || user.points < 0) {
            console.log("Alguns dados não foram informados.");
            return res.status(400).json({
					msg: "Alguns dados não foram informados.",
					idUser: "",
					err: "001"
				});
         }

			if (user.id) { // Usuario ja cadastrado, UPDATE
				scoreDao.updateScoreUser(user, function (err, result) {
						if (!err && result.n == 1) {
							return res.status(200).json({
								msg: "Dados atualizados com sucesso!",
								idUser: user.id,
								err: null
							});
						} else {
							console.log("Erro, dados não salvos!");
							return res.status(400).json({
								msg: "Erro, dados não salvos!",
								idUser: "",
								err: err
							});
						}
					});
				
			} else { // Usuario nao cadastrado, INSERT
				scoreDao.insertScoreUser(user, function (err, data) {
						if (!err) {
							return res.status(200).json({
								msg: "Dados salvos com sucesso!",
								idUser: data.insertedId,
								err: null
							});
						} else {
							return res.status(400).json({
								msg: "Erro, dados não salvos!",
								idUser: "",
								err: err
							});
						}
					});
			}
      } else {
         console.log("Dados do usuário não informados");
         return res.status(400).json({
				msg: "Dados do usuário não informados",
				idUser: "",
				err: "002"
			});
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
				return res.status(400).json({
					result: data,
					err: err
				});
			}
      });
   },

	deleteUser: function (req, res) {
		// Obtendo string com os dados do usuario
      var nameUser = req.headers['name'];
		scoreDao.deleteUser(nameUser, function(err, result) {
			if (err || result.n != 1) {
				console.log("Usuario nao localizado");
				return res.status(400).json({
					msg: "Usuario nao localizado!",
					err: err
				});
			} else {
				if (result.n == 1) {
    				console.log("Usuario removido");
					return res.status(200).json({
						msg: "Usuario removido!",
						err: ""
					});
				}
			}
		});
	}
};

module.exports = score;