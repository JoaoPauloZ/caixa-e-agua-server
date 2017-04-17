var Connection = require('./conection');

var scoreDao = {

   getAll: function (callback) {
      var resultArray = [];
  		Connection.connect(function (connection) {
			
			if (connection.err) {
				Connection.disconnect();
				callback("003", resultArray);
			} else {
				var db = connection.db;
				var cursor = db.collection('users').find();
				cursor.forEach(function(doc, err) {
					if (err) {
						console.log("Erro no forEach do find");
						callback(err, resultArray);
					}
					resultArray.push(doc);
				}, function() {
					Connection.disconnect();
					callback(null, resultArray);
				});
			}
		});
   },

   getScoreId: function (id, callback) {

   },

   getScoreUser: function (user, callback) {
         
   },

   insertScoreUser: function (user, callback) {
      var item = {
         name: user.name,
         points: user.points
      };
      Connection.connect(function(connection) {
			if (connection.err) {
				callback("001", null);
			} else {
				var db = connection.db;
				db.collection('users').insertOne(item, function(err, result) {
					callback(err, result);
				});
				Connection.disconnect();
			}
      });
	},

	updateScoreUser: function (user, callback) {
   	Connection.connect(function(connection) {
			if (connection.err) {
				callback("001", null);
			} else {
				var db = connection.db;
				db.collection('users').updateOne({name : user.name}, { $set: {points : user.points } }, function(err, result) {
					callback(err, result.result);
				});
				Connection.disconnect();
			}
      });
	}, 

	deleteUser: function(name, callback) {
		Connection.connect(function(connection) {
			if (connection.err) {
				callback("001", null);
			} else {
				var db = connection.db;
				db.collection('users').deleteOne({name: name}, function (err, result) {
					callback("004", result.result);
				});
				Connection.disconnect();
			}
		});
	}

};

module.exports = scoreDao;