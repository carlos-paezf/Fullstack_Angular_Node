import { Response } from 'express';
import pool from './connectiondb';
// TODO: jsonWebToken para validaciones

class ManagerDB {

  //? Solo herencia, ejecución asincrona, retornando una promesa
  protected static async executeQuery(sql: string, parameters: any, res: Response, type: string): Promise<any> {
    pool.query(sql, parameters, function(error, out) {
      if (error) {
        switch (error.code) {
          case 'ER_BAD_DB_ERROR':
            console.log('The database not exists');
            res.status(400).json({'answer': 'Database not exists'});
            break;
          case 'ER_ACCESS_DENIED_ERROR':
            console.log('The username or password is incorrect');
            res.status(400).json({'answer': 'Username or password is incorrect'});
            break;
          case 'ENOTFOUND':
            console.log('Server Error');
            res.status(400).json({'answer': 'Server Error'});
            break;
          case 'ER_PARSE_ERROR':
            console.log('Wrong service query');
            res.status(400).json({'answer': 'Wrong service query'});
            break;
          default :
            console.log('Found an Error', error);
            res.status(400).json({'error': error});
            break;
        }
      } else {
        switch (type.toUpperCase()) {
          case 'SELECT':
            res.status(200).json(out);
            break;
          case 'INSERT':
            res.status(200).json({'message': 'Register created', 'id': out.insertId});
            break;
          case 'DELETE':
            res.status(200).json({'message': 'Record deleted', 'affected rows': out.affectedRows});
            break;
          default:
            res.status(400).json({ 'answer': 'Service not implemented <--' });
            break;
        }
      }
    });
  }
}

export default ManagerDB;
