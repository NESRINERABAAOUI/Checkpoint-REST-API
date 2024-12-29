let mongoose = require('mongoose') ;
require('dotenv').config();
const mongoURI = process.env.MONGO_URI;

// const server = '127.0.0.1:27017' ; // REMPLACER PAR VOTRE SERVEUR DE BASE DE DONNÉES

// const database = 'myDB' ; // REPLACEZ AVEC LE NOM DE VOTRE BASE DE DONNÉES

// class Database {

//   constructor() {

//     this._connect()

//   }

// _connect() {

//      mongoose.connect(mongoURI) // is similar as mongoose.connect('mongodb://127.0.0.1:27017/myDB')

     
//        .then(() =>  {

//          console.log('Database connection successful')

//        })

//        .catch(err =>  {

//          console.error('Erreur de connexion à la base de données')

//        })

//   }

// }

// module.exports = new Database()

mongoose
.connect(mongoURI)
  .then(() =>
      console.log("Established a connection to the database " )
  )
  .catch((err) =>
      console.log(
          " ❌❌Something went wrong when connecting to the database ❌❌",
          err
      )
  );