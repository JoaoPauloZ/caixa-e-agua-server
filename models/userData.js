var mongoose = require('mongoose');
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