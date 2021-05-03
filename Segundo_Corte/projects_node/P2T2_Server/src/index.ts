import cors from 'cors';
import morgan from 'morgan';
import express from 'express';

class Server {
  public app: express.Application;

  constructor(){
    this.app = express();
    this.config();
    this.routes();
  }

  public config(): void {
    this.app.set('PORT', process.env.PORT || 8099);

    this.app.use(cors());
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({
      extended:true
    }));
  }

  public routes(): void {
    //! rutas aqui, pero faltan los controllers
  }

  public start(): void {
    this.app.listen(this.app.get('PORT'), () => {
      console.log('Server active in port ', this.app.get('PORT'));
    });
  }
}

const server = new Server();
server.start();
