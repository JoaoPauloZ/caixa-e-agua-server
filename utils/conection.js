// Iniciar o mongo: mongod --dbpath=D:\data\db\
// https://www.youtube.com/watch?v=ZKwrOXl5TDI
// http://mongodb.github.io/node-mongodb-native/2.2/quick-start/quick-start/

// Referência para o Cliente do MongoDB
var MongoClient = require('mongodb').MongoClient;
// URL do banco de dados
var url = 'mongodb://localhost:27017/score';
// Armazena uma refência do banco de dados e um erro se existir
var conection = {db: null,err: null};

module.exports = {
   
   connect: function(callcak) {
      MongoClient.connect(url, function(err, db) {
         if (!err) {
            conection.db = db;
         } else {
            conection.err = err;
         }
         callcak(conection);
      });
   },

   disconnect: function() {
      if (!conection.err) {
         conection.db.close();
      }
   }
};
