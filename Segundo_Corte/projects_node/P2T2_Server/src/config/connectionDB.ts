import config from './configurationdb';
import mysql from 'mysql';

const pool = mysql.createPool(config.database);

export default pool;

pool.getConnection(function(error, connection){
  if (error){
    switch (error.code) {
      case 'ER_BAD_DB_ERROR':
        console.log('The database not exists ', config.database.database, ' ', error.code);
        break;
      case 'ER_ACCESS_DENIED_ERROR':
        console.log('The username or password is incorrect ', error.code);
        break;
      case 'ENOTFOUND':
        console.log('Server Error ', error.code);
        break;
      default :
        console.log('Found an Error', error);
        break;
    }
  } else {
    if (connection){
      connection.release();
    }
    console.log('Conexion establecida con: ', config.database.database);
  }
});
