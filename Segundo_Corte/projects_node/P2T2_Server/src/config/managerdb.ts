import { Response } from 'express';
import pool from './connectiondb';
// TODO: jsonWebToken para validaciones

class ManagerDB {

  //? Solo herencia, ejecución asincrona, retornando una promesa
  protected static async runQuery(sql: string, parameters: any, res: Response, type: string): Promise<any> {
    pool.query(sql, parameters, function(error, out) {
      if (!error) {
        switch (type.toLowerCase()) {
          case 'consult':
            res.status(200).json(out);
            break;
          default:
            res.status(400).json({ 'answer': 'Service not implemented' });
            break;
        }
      }
      console.log('Found a error: ', error);
      res.status(400).json({ 'answer': error });
    });
  }
}

export default ManagerDB;
