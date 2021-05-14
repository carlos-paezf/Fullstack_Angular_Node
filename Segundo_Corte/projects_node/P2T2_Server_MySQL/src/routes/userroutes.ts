import { Router } from 'express';
import userController from '../controllers/usercontroller';

class UserRoutes {
  public router : Router;

  constructor(){
    this.router = Router();
    this.config();
  }

  public config(): void {
    this.router.get('/', userController.getUsers);
    this.router.post('/create', userController.createUser);
    this.router.delete('/:codUser', userController.deleteUser);
    this.router.put('/update/:codUser', userController.updateUser);
  }
}

const userRoutes = new UserRoutes();
export default userRoutes.router;
