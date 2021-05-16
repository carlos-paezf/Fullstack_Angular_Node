"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* //! Trato de pasar la clase integrandola a connectiondb.ts
class ManagerDB {

    protected static async executeQuery(sql: string, parameters: any, res: Response, type: string): Promise<any> {
        pool.query(sql, parameters, function(error, out) {
            if (error) {
                switch (error.code) {
                    case '':
                        console.log('Wrong service query', error);
                        res.status(400).json({ 'answer': 'Wrong service query' });
                        break;
                    default:
                        console.log('Found an Error', error);
                        break;
                }
            } else {
                switch (type.toUpperCase()) {
                    case 'SELECT':
                        res.status(200).json(out);
                        break;
                    case 'INSERT':
                        res.status(200).json({ 'message': 'Register created', 'id': out.insertId });
                        break;
                    case 'DELETE':
                        if (out.affectedRows > 0)
                            res.status(200).json({ 'message': 'Record deleted', 'affected rows': out.affectedRows });
                        else
                            res.status(400).json({ 'message': 'Rol not found' });
                        break;
                    case 'UPDATE':
                        if (out.affectedRows > 0)
                            res.status(200).json({ 'message': 'Records updated', 'affected rows': out.affectedRows });
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

*/ 
