var Connection = require('./conection');

var scoreDao = {

   getAll: function (callback) {
      var resultArray = [];
  		Connection.connect(function (connection) {
			
			if (connection.err) {
				return err;

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

   saveScoreUser: function (user, callback) {
      var item = {
         name: user.name,
         points: user.points
      };
      
      // Use connect method to connect to the server
      Connection.connect(function(connection) {
			if (connection.err) {
				callback(err, null);
			} else {
				var db = connection.db;
				db.collection('users').insertOne(item, function(err, result) {
					callback(err, result);
				});
				Connection.disconnect();
			}
      });
	}

};

module.exports = scoreDao;