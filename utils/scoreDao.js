const fs = require('fs');
const LOCAL_DB = "resources/"
var scoreDao = {

   getAll: function () {
      var dados = fs.readFileSync('db_00.json', {encoding: 'utf8'});
      dados = JSON.parse(dados);
      return dados;
   },

   getScoreId: function (id) {
      var dados = fs.readFileSync('db_00.json', {encoding: 'utf8'});
      dados = JSON.parse(dados);

      if (dados) {
         for (var i = 0; i < dados.lenth; i++) {
            if (dados[i].id == id) {
               return dados[i];
            }
         }
      } else {
         return {};
      }
   },

   getScoreUser: function (user) {
         
   },

   saveScoreUser: function (user) {
      var users = fs.readFileSync(LOCAL_DB + 'db_00.json', {encoding: 'utf8'});
      if (!users) users = "[]";
      users = JSON.parse(users);
      if (users) {
         users.push(user);
      } else {
         users = [user];
      }
      fs.writeFileSync(LOCAL_DB + 'db_00.json', JSON.stringify(users), {encoding: 'utf8'});
   }

};

module.exports = scoreDao;