var mongoose = require('mongoose');
//require('../models/userData')

// https://www.youtube.com/watch?v=E7eji690-J8
// http://nodebr.com/nodejs-e-mongodb-introducao-ao-mongoose/
// ======================================================================
// Iniciar o mongo: mongod --dbpath=D:\data\db\
mongoose.connect('localhost:27017/score');
// testar se conectou
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("conectado ao mongo!")
});

var Schema = mongoose.Schema;

// É o padrão dos dados que serão armazenados (Blue print)
var userDataSchema = new Schema (
   {
      name: {type: String, required: true},
      points: {type: Number, required: true}
   }, 
   {
      colection: 'user-data'
   }
);

// O Modelo do Schema, como se fosse a classe
var UserData = mongoose.model('UserData', userDataSchema);

// ======================================================================

var scoreDao = {

   getAll: function (callback) {
		mongoose.model('UserData').find(callback());
   },

   getScoreId: function (id) {

   },

   getScoreUser: function (user) {
         
   },

   saveScoreUser: function (user) {

		new UserData({
			name: user.name,
			points: user.points
		}).save(function(err, doc) {
			if (err) {
				console.log("Error!");
			} else {
				console.log("Salvou!");
			}
		});
   }

};

module.exports = scoreDao;