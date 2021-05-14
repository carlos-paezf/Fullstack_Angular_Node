"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
    }
    config() {
        this.app.set('PORT', process.env.PORT || 8098);
        this.app.use(cors_1.default());
        this.app.use(morgan_1.default('dev'));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({
            extended: true
        }));
    }
    start() {
        this.app.listen(this.app.get('PORT'), () => {
            console.log('Server active in port', this.app.get('PORT'));
        });
    }
    routes() {
        //TODO: Faltan las rutas 
    }
}
const server = new Server();
server.start();