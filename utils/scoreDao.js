
// Iniciar o mongo: mongod --dbpath=D:\data\db\
// https://www.youtube.com/watch?v=ZKwrOXl5TDI
// http://mongodb.github.io/node-mongodb-native/2.2/quick-start/quick-start/

// Referência para o Cliente do MongoDB
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

// URL do banco de dados
var url = 'mongodb://localhost:27017/score';

var scoreDao = {

   getAll: function (callback) {
      var resultArray = [];
       MongoClient.connect(url, function(err, db) {
         assert.equal(null, err);
         var cursor = db.collection('users').find();
         cursor.forEach(function(doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
         }, function() {
            db.close();
            callback(resultArray);
         })
      });
   },

   getScoreId: function (id, callback) {

   },

   getScoreUser: function (user, callback) {
         
   },

   saveScoreUser: function (user, callback) {
      var item = {
         name: user.name,
         points: user.points
      };
      
      // Use connect method to connect to the server
      MongoClient.connect(url, function(err, db) {
         assert.equal(null, err);
         db.collection('users').insertOne(item, function(err, result) {
            assert.equal(null, err);
            console.log('Item inserido');
         });
         db.close();
      });

	}

};

module.exports = scoreDao;