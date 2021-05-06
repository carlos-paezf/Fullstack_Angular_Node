import config from './configurationdb';
import mysql from 'mysql';

const pool = mysql.createPool(config.database);

export default pool;

pool.getConnection(function(error, connection){
  if (error){
    console.log('El cod del error es: ', error.code);
  } else {
    if (connection){
      connection.release();
    }
    console.log('Conexion establecida con: ', config.database.database);
  }
});
