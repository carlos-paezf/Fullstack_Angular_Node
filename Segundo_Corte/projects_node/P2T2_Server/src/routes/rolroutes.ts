import { Router } from 'express';
import rolController from '../controllers/rolcontroller';

class RolRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.config();
  }

  public config(): void {
    this.router.get('/', rolController.getRoles);
    this.router.post('/create', rolController.createRol);
    this.router.delete('/:codRol', rolController.deleteRol);
  }
}

const rolRoutes = new RolRoutes();
export default rolRoutes.router;
