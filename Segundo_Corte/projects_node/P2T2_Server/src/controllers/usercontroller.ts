import { Request, Response } from 'express';
import ManagerDB from '../config/managerdb';

class UserController extends ManagerDB {

  public getUsers(req: Request, res: Response): Promise<any> {
    const query: string = 'SELECT coduser, codrol, email, password FROM user';
    return UserController.executeQuery(query, req, res, 'SELECT');
  }

  public createUser(req: Request, res: Response): Promise<any> {
    const query: string = 'INSERT INTO user SET ?';
    return UserController.executeQuery(query, req.body, res, 'INSERT');
  }

  public deleteUser(req: Request, res: Response): Promise<any> {
    if (isNaN(Number(req.params.codUser))) {
      return Promise.resolve(res.status(400).json({'message': 'Invalid cod'}));
    }
    const cod = Number(req.params.codUser);
    const query: string = 'DELETE FROM user WHERE coduser=?';
    return UserController.executeQuery(query, cod, res, 'DELETE');
  }

  public updateUser(req: Request, res: Response): Promise<any>{
    if (!isNaN(Number(req.params.codUser))){
      const cod = Number(req.params.codUser);
      delete req.body.coduser;
      const query: string = 'UPDATE user SET ? WHERE codUser=?';
      const parameters = [req.body, cod];
      return UserController.executeQuery(query, parameters, res, 'UPDATE');
    }
    return Promise.resolve(res.status(400).json({'message':'Invalid cod'}));
  }
}

const userController = new UserController();
export default userController;
