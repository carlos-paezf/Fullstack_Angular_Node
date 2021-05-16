import { Request, Response } from 'express';
import ManagerDB from '../config/connectiondb';

class RolController extends ManagerDB {

    public getRoles(req: Request, res: Response): Promise<any> {
        const query: string = 'SELECT codrol, namerol FROM rol';
        return RolController.executeQuery(query, req, res, 'SELECT');
    }

    public createRol(req: Request, res: Response): Promise<any> {
        const query: string = 'INSERT INTO rol SET ?';
        return RolController.executeQuery(query, req.body, res, 'INSERT');
    }

    public deleteRol(req: Request, res: Response): Promise<any> {
        if (!isNaN(Number(req.params.codRol))){
            const cod = Number(req.params.codRol);
            const query: string = 'DELETE FROM rol WHERE codrol=?';
            return RolController.executeQuery(query, cod, res, 'DELETE');
        }
        return Promise.resolve(res.status(400).json({'message': 'Invalid cod'}));
    }

    public updateRol(req: Request, res: Response): Promise<any>{
        if (!isNaN(Number(req.params.codRol))) {
            const cod = Number(req.params.codRol);
            delete req.body.codrol;
            const query: string = 'UPDATE rol SET ? WHERE codrol=?';
            return RolController.executeQuery(query, cod, res, 'DELETE');
        }
        return Promise.resolve(res.status(400).json({'message': 'Invalid cod'}))
    }
}

const rolController = new RolController();
export default rolController;