import { Request, Response } from 'express';

class IndexController {

  //? Los 2 parametros de esta función son importantes, NO borrarlos
  public index(req: Request, res: Response) {
    console.log(req.headers);
    res.json({
      'answer': 'The public API is in /api/public/roles',
      'answer2': 'Other answer'
    });
  }
}

//? En este caso exportamos solo un objeto del tipo IndexController
const indexController = new IndexController();
export default indexController;
