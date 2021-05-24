import { Request, Response } from 'express';
import ManagerDB from '../config/managerdb';

class UserController extends ManagerDB{

    public getUsers(req: Request, res: Response): Promise<any> {
        const query: string = 'SELECT coduser, codrol, email, password FROM public.user';
        return UserController.executeQuery(query, req, res, 'SELECT');
    }

    public createUser(req: Request, res: Response): Promise<any> {
        //! delete req.body.token;
        const query: string = 'INSERT INTO user(codrol, email, password) VALUES($1, $2, $3)';
        const parameters = [req.body.codrol, req.body.email, req.body.password];
        return UserController.executeQuery(query, parameters, res, 'INSERT');
        //! return UserController.executeQuery(query, parameters, res, 'INSERT-USER');
    }

    public deleteUser(req: Request, res: Response): Promise<any> {
        if (!isNaN(Number(req.params.codUser))){
            const query: string = 'DELETE FROM user WHERE coduser = $1';
            const parameters = [Number(req.params.codUser)]
            return UserController.executeQuery(query, parameters, res, 'DELETE');
        }
        return Promise.resolve(res.status(400).json({'message': 'Invalid cod'}));
    }

    public updateUser(req: Request, res: Response): Promise<any> {
        if (!isNaN(Number(req.params.codUser))){
            delete req.body.coduser;
            const query: string = 'UPDATE user SET codrol=$2, email=$3, password=$4 WHERE codUser=$1';
            const parameters = [Number(req.params.codUser), req.body.codrol, req.body.email, req.body.password];
            return UserController.executeQuery(query, parameters, res, 'UPDATE');
        }
        return Promise.resolve(res.status(400).json({'message': 'Invalid cod'}));
    }
}

const userController = new UserController();
export default userController;