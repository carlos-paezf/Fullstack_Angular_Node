import config from './configurationdb';
import { Pool, Client } from 'pg';
import { Response } from 'express';

const pool = new Pool(config.database);

class ManagerDB {
    protected static async executeQuery(sql: string, parameters: any, res: Response, type: string): Promise < any > {
        pool.connect((error, connection) => {
            if (error) {
                console.log('Found an Error <-->: ', error.message);
            } else {
                if (connection) {
                    connection.release();
                }
                console.log('Conexión establecida con: ', config.database.database);
            }
        })

        pool.query(sql, [parameters], function(error, out){
            if (error) {
                console.log('Found an Error: ', error.message);
            } else {
                switch (type.toUpperCase()) {
                    case 'SELECT':
                        res.status(200).json(out);
                        break;
                    case 'INSERT':
                        res.status(200).json({ 'message': 'Register created', 'id': out.oid });
                        break;
                    case 'DELETE':
                        if (out.rowCount > 0)
                            res.status(200).json({ 'message': 'Record deleted', 'affected rows': out.rowCount });
                        else
                        res.status(400).json({ 'message': 'Rol not found' });
                        break;
                    case 'UPDATE':
                        if (out.rowCount > 0)
                            res.status(200).json({ 'message': 'Records updated', 'affected rows': out.rowCount });
                        else
                            res.status(400).json({ 'message': 'Rol not found' });
                        break;
                    default:
                        res.status(400).json({ 'answer': 'Service not implemented <--' });
                        break;
                }
            }
        })
    }
}

export default ManagerDB;