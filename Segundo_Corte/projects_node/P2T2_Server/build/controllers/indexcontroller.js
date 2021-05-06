"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    //? Los 2 parametros de esta función son importantes, NO borrarlos
    index(req, res) {
        console.log(req.headers);
        res.json({
            'answer': 'The public API is in XX',
            'answer2': 'Other answer'
        });
    }
}
//? En este caso exportamos solo un objeto del tipo IndexController
const indexController = new IndexController();
exports.default = indexController;
