import { Response } from 'express';
import pool from './connectiondb';
import jwt from 'jsonwebtoken';

class ManagerDB {
    protected static async executeQuery(sql: string, parameters: any, res: Response, type: string): Promise < any > {
        //? pool.query(sql, parameters).then(out => {
        pool.result(sql, parameters).then(out => {
            switch (type.toUpperCase()) {
                case 'SELECT':
                    res.status(200).json(out.rows);
                    break;
                case 'INSERT':
                    res.status(200).json({ 'message': 'Register created', 'id': out.rows });
                    break;
                case 'DELETE':
                    out.rowCount > 0
                        ? res.status(200).json({ 'message': 'Record deleted', 'affected rows': out.rowCount })
                        : res.status(400).json({ 'message': 'Rol not found' });
                    break;
                case 'UPDATE':
                    out.rowCount > 0
                        ? res.status(200).json({ 'message': 'Records updated', 'affected rows': out.rowCount })
                        : res.status(400).json({ 'message': 'Rol not found' });
                    break;
                case 'INSERT-USER':
                    const token = jwt.sign({ 'id': out, 'email': parameters.email }, 'privatekey');
                    res.status(200).json({ 'token': token });
                    break;
                default:
                    res.status(400).json({ 'answer': 'Service not implemented <--' });
                    break;
            }
        })
    }
}

export default ManagerDB;